import { put } from '@vercel/blob';
import { readFileSync } from 'fs';

async function uploadVideos() {
  const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;

  if (!BLOB_READ_WRITE_TOKEN) {
    console.error('❌ BLOB_READ_WRITE_TOKEN não encontrado nas variáveis de ambiente');
    console.log('\n📝 Passos para configurar:');
    console.log('1. Vai a https://vercel.com/dashboard');
    console.log('2. Seleciona o projeto tasca-do-dino');
    console.log('3. Vai em Storage > Create Database > Blob');
    console.log('4. Copia o token BLOB_READ_WRITE_TOKEN');
    console.log('5. Cria um ficheiro .env.local na raiz do projeto com:');
    console.log('   BLOB_READ_WRITE_TOKEN=seu_token_aqui');
    process.exit(1);
  }

  try {
    console.log('📤 A fazer upload do herocompleto.mp4...');
    const heroVideo = readFileSync('public/herocompleto.mp4');
    const heroBlob = await put('herocompleto.mp4', heroVideo, {
      access: 'public',
      token: BLOB_READ_WRITE_TOKEN,
    });
    console.log('✅ herocompleto.mp4 uploaded:', heroBlob.url);

    console.log('\n📤 A fazer upload do mercearia.mp4...');
    const merceariaVideo = readFileSync('public/mercearia.mp4');
    const merceariaBlob = await put('mercearia.mp4', merceariaVideo, {
      access: 'public',
      token: BLOB_READ_WRITE_TOKEN,
    });
    console.log('✅ mercearia.mp4 uploaded:', merceariaBlob.url);

    console.log('\n✨ URLs dos vídeos (guarda isto):');
    console.log('Hero:', heroBlob.url);
    console.log('Mercearia:', merceariaBlob.url);
  } catch (error) {
    console.error('❌ Erro ao fazer upload:', error);
  }
}

uploadVideos();
