// components/CloudinaryImagePicker.tsx
import React from "react";
import { uploadToCloudinary } from "@/utils/FileUpload";
import { UploadedAsset } from "@/interface/ChatProps";

type Props = {
    max?: number;
    onChange?: (assets: UploadedAsset[]) => void;
    ui?: "full" | "bare";          // "bare" hides buttons/tiles; keeps hidden input
    autoUpload?: boolean;          // auto upload immediately after selection
};

export type CloudinaryImagePickerRef = {
    open: () => void;
    upload: () => Promise<void>;
    clear: () => void;
};

export const CloudinaryImagePicker = React.forwardRef<CloudinaryImagePickerRef, Props>(
    ({ max = 4, onChange, ui = "full", autoUpload = true }, ref) => {
        const [assets, setAssets] = React.useState<UploadedAsset[]>([]);
        const [localFiles, setLocalFiles] = React.useState<File[]>([]);
        const [isUploading, setIsUploading] = React.useState(false);
        const inputRef = React.useRef<HTMLInputElement | null>(null);

        const remaining = Math.max(0, max - assets.length);
        const openPicker = () => inputRef.current?.click();

        React.useImperativeHandle(ref, () => ({
            open: openPicker,
            upload: uploadAll,
            clear: () => { setAssets([]); setLocalFiles([]); },
        }));

        React.useEffect(() => { onChange?.(assets); }, [assets, onChange]);

        const onPickFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files ? Array.from(e.target.files) : [];
            e.target.value = ""; // allow reselecting same file
            if (!files.length || remaining === 0) return;

            const images = files.filter(f => f.type.startsWith("image/")).slice(0, remaining);
            if (!images.length) return;

            if (autoUpload) {
                setIsUploading(true);
                try {
                    for (const f of images) {
                        const asset = await uploadToCloudinary(f);
                        setAssets(prev => [...prev, asset].slice(0, max));
                    }
                } finally {
                    setIsUploading(false);
                }
            } else {
                setLocalFiles(prev => [...prev, ...images].slice(0, max));
            }
        };

        async function uploadAll() {
            if (!localFiles.length) return;
            setIsUploading(true);
            try {
                const uploaded: UploadedAsset[] = [];
                for (const f of localFiles.slice(0, remaining)) {
                    uploaded.push(await uploadToCloudinary(f));
                }
                setAssets(prev => [...prev, ...uploaded].slice(0, max));
                setLocalFiles([]);
            } finally {
                setIsUploading(false);
            }
        }

        return (
            <>
                {/* keep input mounted but visually hidden */}
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={onPickFiles}
                    style={{ position: "absolute", width: 0, height: 0, opacity: 0, pointerEvents: "none" }}
                />

                {ui === "full" && (
                    <div className="uploader">
                        {/* thumbnails */}
                        <div className="thumbs" aria-label="Selected images">
                            {assets.map((a, i) => (
                                <div key={`${a.public_id}-${i}`} className="thumb">
                                    <img src={a.url} alt={`upload ${i + 1}`} />
                                </div>
                            ))}
                            {assets.length < max && (
                                <button type="button" className="addTile" onClick={openPicker} disabled={isUploading}>+</button>
                            )}
                        </div>

                        {/* actions (only when not auto-uploading) */}
                        {!autoUpload && (
                            <div className="actions">
                                <button type="button" onClick={openPicker} disabled={isUploading || assets.length >= max}>Choose images</button>
                                <button type="button" onClick={uploadAll} disabled={!localFiles.length || isUploading}>
                                    {isUploading ? "Uploading…" : `Upload ${localFiles.length || ""}`}
                                </button>
                                <span className="hint">{assets.length}/{max} uploaded</span>
                            </div>
                        )}
                    </div>
                )}
            </>
        );
    }
);

