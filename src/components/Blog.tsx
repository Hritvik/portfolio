import React from 'react';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Blog</h2>
        
        <div className="blog-list">
          {blogPosts.map((post) => (
            <a 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="blog-item"
              onClick={(e) => e.preventDefault()}
            >
              <div className="blog-content">
                <div className="blog-meta">
                  {formatDate(post.date)} · {post.category} · {post.readTime} read
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>
              <div className="blog-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
