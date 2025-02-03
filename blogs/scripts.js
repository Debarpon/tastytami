// Function to fetch trending stories
async function fetchTrendingStories() {
    try {
        // For now, using sample data. In production, this would be an API call
        const trendingStories = [
            {
                title: "The Future of AI in 2025",
                excerpt: "Exploring the latest developments in artificial intelligence and what they mean for humanity...",
                author: "Alex Chen",
                authorImage: "assets/images/authors/alex.jpg",
                coverImage: "assets/images/posts/tech-ai.jpg",
                readTime: "5 min read",
                slug: "future-of-ai-2025"
            },
            {
                title: "Sustainable Living: A Guide",
                excerpt: "Practical tips and strategies for reducing your carbon footprint and living more sustainably...",
                author: "Emma Wilson",
                authorImage: "assets/images/authors/emma.jpg",
                coverImage: "assets/images/posts/sustainability.jpg",
                readTime: "8 min read",
                slug: "sustainable-living-guide"
            },
            {
                title: "Modern Web Development",
                excerpt: "Best practices and emerging trends in web development for 2025...",
                author: "David Kumar",
                authorImage: "assets/images/authors/david.jpg",
                coverImage: "assets/images/posts/webdev.jpg",
                readTime: "6 min read",
                slug: "modern-web-development"
            }
        ];

        const trendingStoriesContainer = document.querySelector('#trending-stories');
        if (!trendingStoriesContainer) return;

        trendingStoriesContainer.innerHTML = '';

        trendingStories.forEach(story => {
            const articleElement = document.createElement('article');
            articleElement.className = 'bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 cursor-pointer';
            
            // Make the entire article clickable
            articleElement.onclick = () => {
                window.location.href = `posts/${story.slug}.html`;
            };
            
            articleElement.innerHTML = `
                <img src="${story.coverImage}" alt="${story.title}" class="w-full h-48 object-cover">
                <div class="p-6 space-y-4">
                    <h3 class="text-xl font-semibold text-gray-900 hover:text-blue-600">
                        ${story.title}
                    </h3>
                    <p class="text-gray-600">
                        ${story.excerpt}
                    </p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                            <img src="${story.authorImage}" alt="${story.author}" class="w-10 h-10 rounded-full">
                            <div>
                                <p class="text-sm font-medium text-gray-900">${story.author}</p>
                                <p class="text-sm text-gray-500">${story.readTime}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            trendingStoriesContainer.appendChild(articleElement);
        });

    } catch (error) {
        console.error('Error fetching trending stories:', error);
    }
}

// Load trending stories when the page loads
document.addEventListener('DOMContentLoaded', fetchTrendingStories);
