import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import dotenv from "dotenv"
dotenv.config();

cloudinary.config({
  cloud_name: process.env.API_CLOUDNAME_CLOUDINARY,
  api_key: process.env.API_KEY_CLOUDINARY,
  api_secret: process.env.API_SECRET_CLOUDINARY,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "productos", // carpeta donde se guardan
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

export const upload = multer({ storage });
export { cloudinary };
