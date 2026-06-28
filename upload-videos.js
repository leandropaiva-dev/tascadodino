const cloudinary = require('cloudinary').v2;
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dmqpoaiq5',
  api_key: '986758996626266',
  api_secret: 'dIwSW6hAxUlVqXxk_c0Uo_3RTLc'
});

const videos = [
  {
    path: './public/RUIR5648.mp4',
    public_id: 'tasca-dino/RUIR5648'
  },
  {
    path: './public/mercearia.mp4',
    public_id: 'tasca-dino/mercearia'
  }
];

async function uploadVideos() {
  console.log('🎬 Uploading videos to Cloudinary...\n');

  for (const video of videos) {
    try {
      console.log(`📤 Uploading ${path.basename(video.path)}...`);

      const result = await cloudinary.uploader.upload(video.path, {
        resource_type: 'video',
        public_id: video.public_id,
        folder: 'tasca-dino',
        overwrite: true
      });

      console.log('✅ Upload successful!');
      console.log('   Public ID:', result.public_id);
      console.log('   Duration:', result.duration, 'seconds');
      console.log('   Format:', result.format);
      console.log('   Size:', (result.bytes / 1024 / 1024).toFixed(2), 'MB');
      console.log('   URL:', result.secure_url);
      console.log('');

    } catch (error) {
      console.error(`❌ Error uploading ${video.path}:`, error.message);
    }
  }

  console.log('🎉 Done! All videos uploaded.');
}

uploadVideos();
