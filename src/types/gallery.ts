export interface CreateGalleryData {
    title: string;
    description?: string;
    coverImageFile?: File;       // actual file
    coverImagePreview?: string;  // preview URL
    visibility: "public" | "private";
}
  