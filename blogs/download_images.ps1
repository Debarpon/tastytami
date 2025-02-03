# Create directories if they don't exist
$dirs = @(
    "assets/images/posts",
    "assets/images/authors",
    "assets/images/featured"
)

foreach ($dir in $dirs) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force
    }
}

# Images to download
$images = @(
    # Existing blog post images
    @{
        url = "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
        path = "assets/images/posts/tech-ai.jpg"
    },
    @{
        url = "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg"
        path = "assets/images/posts/sustainability.jpg"
    },
    @{
        url = "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg"
        path = "assets/images/posts/webdev.jpg"
    },
    # Author images
    @{
        url = "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
        path = "assets/images/authors/alex.jpg"
    },
    @{
        url = "https://images.pexels.com/photos/3777566/pexels-photo-3777566.jpeg"
        path = "assets/images/authors/emma.jpg"
    },
    @{
        url = "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg"
        path = "assets/images/authors/david.jpg"
    },
    # Additional post images for explore page
    @{
        url = "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
        path = "assets/images/posts/tech-workspace.jpg"
    },
    @{
        url = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        path = "assets/images/posts/startup.jpg"
    },
    @{
        url = "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
        path = "assets/images/posts/collaboration.jpg"
    },
    @{
        url = "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
        path = "assets/images/posts/remote-work.jpg"
    },
    @{
        url = "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
        path = "assets/images/posts/tech-future.jpg"
    },
    # Additional author images
    @{
        url = "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
        path = "assets/images/authors/sarah.jpg"
    },
    @{
        url = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        path = "assets/images/authors/michael.jpg"
    },
    @{
        url = "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
        path = "assets/images/authors/james.jpg"
    }
)

# Download images
foreach ($image in $images) {
    try {
        Write-Host "Downloading $($image.path)..."
        Invoke-WebRequest -Uri $image.url -OutFile $image.path
        Write-Host "Successfully downloaded $($image.path)"
    }
    catch {
        Write-Host "Failed to download $($image.path): $_"
    }
}
