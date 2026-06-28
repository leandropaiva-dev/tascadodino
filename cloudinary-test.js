const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with inline credentials
cloudinary.config({
  cloud_name: 'dmqpoaiq5',
  api_key: '986758996626266',
  api_secret: 'dIwSW6hAxUlVqXxk_c0Uo_3RTLc'
});

async function testCloudinary() {
  try {
    // 1. Upload a sample image from Cloudinary demo
    console.log('📤 Uploading image...\n');
    const uploadResult = await cloudinary.uploader.upload(
      'https://res.cloudinary.com/demo/image/upload/sample.jpg',
      { public_id: 'tasca-dino-test' }
    );

    console.log('✅ Upload successful!');
    console.log('Public ID:', uploadResult.public_id);
    console.log('Secure URL:', uploadResult.secure_url);
    console.log('');

    // 2. Get image details
    console.log('📊 Image metadata:');
    console.log('Width:', uploadResult.width, 'px');
    console.log('Height:', uploadResult.height, 'px');
    console.log('Format:', uploadResult.format);
    console.log('File size:', uploadResult.bytes, 'bytes');
    console.log('');

    // 3. Transform the image
    // f_auto = automatic format selection (WebP, AVIF for modern browsers)
    // q_auto = automatic quality optimization (reduces file size while maintaining visual quality)
    const transformedUrl = cloudinary.url(uploadResult.public_id, {
      fetch_format: 'auto',
      quality: 'auto'
    });

    console.log('🎨 Done! Click link below to see optimized version of the image.');
    console.log('Check the size and the format.');
    console.log('Transformed URL:', transformedUrl);

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testCloudinary();
