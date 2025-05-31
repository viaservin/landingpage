import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.PUBLIC_CLOUDINARY_API_SECRET
});

export async function uploadImageToCloudinary(filePath: string, folder: string): Promise<string | null> {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folder,
      resource_type: 'auto'
    });
    return result.secure_url;
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error);
    return null;
  }
}

async function processDirectory(directoryPath: string, basePath: string, results: Record<string, string>): Promise<void> {
  const items = fs.readdirSync(directoryPath);

  for (const item of items) {
    const fullPath = path.join(directoryPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath, basePath, results);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) {
        const relativePath = path.relative(basePath, fullPath);
        const folder = path.dirname(relativePath);
        const url = await uploadImageToCloudinary(fullPath, folder);
        if (url) {
          results[relativePath] = url;
        }
      }
    }
  }
}

export async function uploadDirectoryToCloudinary(directoryPath: string): Promise<Record<string, string>> {
  const results: Record<string, string> = {};
  await processDirectory(directoryPath, directoryPath, results);
  return results;
} 