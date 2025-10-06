import { UploadedAsset } from '@/interface/ChatProps';

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string;
const FOLDER = import.meta.env.VITE_CLOUDINARY_FOLDER as string | undefined;

export function buildFormData(file: File) {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", UPLOAD_PRESET);
    if (FOLDER) fd.append("folder", FOLDER);
    return fd;
}

export async function uploadToCloudinary(file: File): Promise<UploadedAsset> {
    const fd = buildFormData(file);
    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        { method: "POST", body: fd }
    );
    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Cloudinary upload failed: ${err}`);
    }
    const json = await res.json();
    return {
        url: json.secure_url,
        public_id: json.public_id,
        width: json.width,
        height: json.height,
        bytes: json.bytes,
    };
}