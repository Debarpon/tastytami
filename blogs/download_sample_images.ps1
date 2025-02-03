# Function to download image
function Download-Image {
    param (
        [string]$Url,
        [string]$OutFile
    )
    
    try {
        Invoke-WebRequest -Uri $Url -OutFile $OutFile
        Write-Host "Downloaded: $OutFile"
    }
    catch {
        Write-Host "Failed to download: $OutFile"
    }
}

# Create directories if they don't exist
$dirs = @(
    "assets/images/authors",
    "assets/images/posts"
)

foreach ($dir in $dirs) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force
    }
}

# Author images
Download-Image -Url "https://source.unsplash.com/random/200x200?portrait=1" -OutFile "assets/images/authors/alex.jpg"
Download-Image -Url "https://source.unsplash.com/random/200x200?portrait=2" -OutFile "assets/images/authors/emma.jpg"
Download-Image -Url "https://source.unsplash.com/random/200x200?portrait=3" -OutFile "assets/images/authors/david.jpg"

# Post cover images
Download-Image -Url "https://source.unsplash.com/random/800x600?technology" -OutFile "assets/images/posts/tech-ai.jpg"
Download-Image -Url "https://source.unsplash.com/random/800x600?sustainability" -OutFile "assets/images/posts/sustainability.jpg"
Download-Image -Url "https://source.unsplash.com/random/800x600?coding" -OutFile "assets/images/posts/webdev.jpg"
