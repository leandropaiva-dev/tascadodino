import { put } from '@vercel/blob';
import { readFileSync } from 'fs';

async function uploadImages() {
  const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

  if (!BLOB_READ_WRITE_TOKEN) {
    console.error('❌ BLOB_READ_WRITE_TOKEN não encontrado');
    process.exit(1);
  }

  const images = [
    { path: 'public/storysection.JPG', name: 'storysection.jpg' },
    { path: 'public/storysection2.JPG', name: 'storysection2.jpg' },
    { path: 'public/storysection3.JPG', name: 'storysection3.jpg' },
  ];

  try {
    for (const img of images) {
      console.log(`📤 Upload ${img.name}...`);
      const content = readFileSync(img.path);
      const blob = await put(img.name, content, {
        access: 'public',
        token: BLOB_READ_WRITE_TOKEN,
      });
      console.log(`✅ ${img.name}: ${blob.url}`);
    }
  } catch (error) {
    console.error('❌ Erro:', error);
  }
}

uploadImages();
