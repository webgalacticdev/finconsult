const blogPosts = [
  {
    title: "Understanding Market Trends in 2024",
    excerpt: "Discover the latest market trends and how they affect your investments.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"
  },
  {
    title: "Essential Investment Strategies",
    excerpt: "Learn about proven investment strategies for long-term growth.",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc"
  },
  {
    title: "Planning for Retirement",
    excerpt: "Expert tips on how to prepare for a comfortable retirement.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <button className="text-primary font-medium hover:text-primary/80 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;