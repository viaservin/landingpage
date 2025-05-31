import { v2 as cloudinary } from 'cloudinary';

const cloud_name = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME;
const api_key = import.meta.env.PUBLIC_CLOUDINARY_API_KEY;
const api_secret = import.meta.env.PUBLIC_CLOUDINARY_API_SECRET;

if (!cloud_name || !api_key || !api_secret) {
  throw new Error('Faltan las credenciales de Cloudinary. Por favor, configura las variables de entorno PUBLIC_CLOUDINARY_CLOUD_NAME, PUBLIC_CLOUDINARY_API_KEY y PUBLIC_CLOUDINARY_API_SECRET');
}

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

export { cloudinary }; 