// Sample blog posts data
const blogPosts = [
    {
        title: "The Future of Remote Work in Tech",
        excerpt: "Exploring how remote work is reshaping the technology industry and what it means for developers, designers, and tech companies...",
        author: "Sarah Johnson",
        authorImage: "assets/images/authors/sarah.jpg",
        coverImage: "assets/images/posts/remote-work.jpg",
        readTime: "7 min read",
        category: "Technology",
        tags: ["remote work", "technology", "future of work"]
    },
    {
        title: "Building Successful Tech Startups",
        excerpt: "Key insights and lessons learned from successful tech entrepreneurs about building and scaling startups in today's competitive landscape...",
        author: "Michael Chen",
        authorImage: "assets/images/authors/michael.jpg",
        coverImage: "assets/images/posts/startup.jpg",
        readTime: "10 min read",
        category: "Business",
        tags: ["startup", "entrepreneurship", "tech business"]
    },
    {
        title: "The Power of Team Collaboration",
        excerpt: "How effective team collaboration can drive innovation and success in modern software development projects...",
        author: "James Wilson",
        authorImage: "assets/images/authors/james.jpg",
        coverImage: "assets/images/posts/collaboration.jpg",
        readTime: "6 min read",
        category: "Leadership",
        tags: ["collaboration", "teamwork", "leadership"]
    },
    {
        title: "Modern Workspace Design",
        excerpt: "Creating productive and inspiring tech workspaces that foster creativity, collaboration, and employee well-being...",
        author: "Emma Wilson",
        authorImage: "assets/images/authors/emma.jpg",
        coverImage: "assets/images/posts/tech-workspace.jpg",
        readTime: "8 min read",
        category: "Workplace",
        tags: ["workspace", "office design", "productivity"]
    },
    {
        title: "Tech Trends Shaping Our Future",
        excerpt: "An in-depth look at the emerging technologies and trends that will shape our digital future in the coming years...",
        author: "Alex Chen",
        authorImage: "assets/images/authors/alex.jpg",
        coverImage: "assets/images/posts/tech-future.jpg",
        readTime: "9 min read",
        category: "Technology",
        tags: ["future tech", "trends", "innovation"]
    }
];

// Function to create a blog post card
function createBlogPostCard(post) {
    return `
        <article class="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow duration-300">
            <div class="md:w-1/3">
                <img src="${post.coverImage}" alt="${post.title}" class="w-full h-48 md:h-full object-cover">
            </div>
            <div class="p-6 md:w-2/3 flex flex-col justify-between">
                <div>
                    <div class="flex items-center space-x-2 mb-2">
                        <span class="text-sm font-medium text-blue-600">${post.category}</span>
                        <span class="text-gray-300">•</span>
                        <span class="text-sm text-gray-500">${post.readTime}</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">${post.title}</h3>
                    <p class="text-gray-600 mb-4">${post.excerpt}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${post.tags.map(tag => `
                            <span class="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">#${tag}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <img src="${post.authorImage}" alt="${post.author}" class="w-10 h-10 rounded-full">
                        <div>
                            <p class="text-sm font-medium text-gray-900">${post.author}</p>
                        </div>
                    </div>
                    <button class="text-blue-600 hover:text-blue-700 font-medium">Read More</button>
                </div>
            </div>
        </article>
    `;
}

// Function to render blog posts
function renderBlogPosts(posts = blogPosts) {
    const container = document.querySelector('.grid');
    if (!container) return;
    
    container.innerHTML = posts.map(post => createBlogPostCard(post)).join('');
}

// Function to filter posts by search term
function filterPosts(searchTerm) {
    const filteredPosts = blogPosts.filter(post => {
        const searchString = `${post.title} ${post.excerpt} ${post.author} ${post.category} ${post.tags.join(' ')}`.toLowerCase();
        return searchString.includes(searchTerm.toLowerCase());
    });
    renderBlogPosts(filteredPosts);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Render initial posts
    renderBlogPosts();

    // Set up search functionality
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterPosts(e.target.value);
        });
    }

    // Set up category filter
    const categorySelect = document.getElementById('category');
    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            const category = e.target.value;
            const filteredPosts = category ? 
                blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase()) :
                blogPosts;
            renderBlogPosts(filteredPosts);
        });
    }
});
