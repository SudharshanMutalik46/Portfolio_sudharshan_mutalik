
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable AWS Infrastructure with Terraform",
      excerpt: "Learn how to design and implement scalable AWS infrastructure using Terraform, exploring best practices for modular code, state management, and multi-environment deployments.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AWS",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg"
    },
    {
      title: "Kubernetes Security Best Practices",
      excerpt: "Discover essential security practices for Kubernetes clusters, including RBAC, network policies, pod security standards, and vulnerability scanning strategies.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Security",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg"
    },
    {
      title: "CI/CD Pipeline Optimization Strategies",
      excerpt: "A comprehensive guide to optimizing CI/CD pipelines, covering parallel execution, caching strategies, and deployment automation for faster delivery cycles.",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "DevOps",
      image: "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg"
    },
    {
      title: "The Future of Cloud Infrastructure in 2024",
      excerpt: "Exploring emerging trends in cloud infrastructure, from serverless computing to edge computing and the evolution of container orchestration platforms.",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Cloud",
      image: "https://images.pexels.com/photos/11035769/pexels-photo-11035769.jpeg"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Latest Blog Posts</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about DevOps practices, cloud architecture, and infrastructure automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group bg-gray-950 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-medium">
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;