// attachment tray for file upload
import { UploadedAsset } from "@/interface/ChatProps";

type Props = {
    assets: UploadedAsset[];
    max?: number;
    onRemove?: (index: number) => void;
    onAddMore?: () => void;
    readonly?: boolean;
    size?: number;
};

export default function AttachmentTray({
    assets, max = 4, onRemove, onAddMore, readonly = false, size = 56
}: Props) {
    if (!assets.length) return null;

    const remaining = Math.max(0, max - assets.length);

    return (
        <div className={`pc-attachments ${readonly ? "is-readonly" : ""}`} role="region" aria-label="Attached images">
            <div className="pc-row">
                {assets.map((a, i) => (
                    <figure key={`${a.public_id}-${i}`} className="pc-thumb" style={{ width: size, height: size }}>
                        <img src={a.url} alt={`attachment ${i + 1}`} />
                        {!readonly && onRemove && (
                            <button
                                type="button"
                                className="pc-x"
                                aria-label={`Remove image ${i + 1}`}
                                onClick={() => onRemove(i)}
                            >
                                ×
                            </button>
                        )}
                    </figure>
                ))}

                {!readonly && remaining > 0 && onAddMore && (
                    <button
                        type="button"
                        className="pc-add"
                        onClick={onAddMore}
                        aria-label="Add more images"
                        style={{ width: size, height: size }}
                    >
                        +
                    </button>
                )}
            </div>

            <style>
                {`
                .pc-attachments{
                    margin: .5rem .75rem;
                    padding: .5rem;
                    background: transparent;
                }
                .pc-row { display:flex; gap:.5rem; overflow-x:auto; }
                .pc-thumb{
                position:relative; width:56px; height:56px; border-radius:.5rem; overflow:hidden; background:#f3f4f6;
                flex:0 0 auto;
                }
                .pc-thumb img{ width:100%; height:100%; object-fit:cover; display:block; }
                .pc-x{
                position:absolute; top:-1px; right:-1px; width:18px; height:18px;
                border:none; border-radius:999px; background:#000a; color:#fff; cursor:pointer;
                font-size:14px; line-height:18px;
                }
                .pc-add{
                width:56px; height:56px; border-radius:.5rem; border:1px dashed #9ca3af; background:transparent;
                font-size:24px; line-height:1; cursor:pointer; flex:0 0 auto;
                }
            `}
            </style>
        </div>
    );
}
