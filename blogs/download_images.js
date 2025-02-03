const https = require('https');
const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const dirs = [
    'assets/images/posts',
    'assets/images/authors'
];

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Function to download image
function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                const writeStream = fs.createWriteStream(filepath);
                response.pipe(writeStream);
                writeStream.on('finish', () => {
                    writeStream.close();
                    console.log(`Downloaded: ${filepath}`);
                    resolve();
                });
            } else {
                reject(`Failed to download ${filepath}: ${response.statusCode}`);
            }
        }).on('error', (err) => {
            reject(`Error downloading ${filepath}: ${err.message}`);
        });
    });
}

// Images to download
const images = [
    {
        url: 'https://source.unsplash.com/800x600/?artificial-intelligence',
        path: 'assets/images/posts/tech-ai.jpg'
    },
    {
        url: 'https://source.unsplash.com/800x600/?sustainability',
        path: 'assets/images/posts/sustainability.jpg'
    },
    {
        url: 'https://source.unsplash.com/800x600/?coding',
        path: 'assets/images/posts/webdev.jpg'
    },
    {
        url: 'https://i.pravatar.cc/150?img=1',
        path: 'assets/images/authors/alex.jpg'
    },
    {
        url: 'https://i.pravatar.cc/150?img=2',
        path: 'assets/images/authors/emma.jpg'
    },
    {
        url: 'https://i.pravatar.cc/150?img=3',
        path: 'assets/images/authors/david.jpg'
    }
];

// Download all images
async function downloadAllImages() {
    try {
        await Promise.all(images.map(img => downloadImage(img.url, img.path)));
        console.log('All images downloaded successfully!');
    } catch (error) {
        console.error('Error downloading images:', error);
    }
}

downloadAllImages();
