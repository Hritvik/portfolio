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
        <div className="section-subtitle">// writing backlog</div>
        <h2 className="section-title">Notes I Should Write</h2>
        <p className="section-intro">
          These are intentionally framed as technical writing candidates for now:
          each one maps to a real system or design from the project archive.
        </p>
        
        <div className="blog-list">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-item">
              <div className="blog-content">
                <div className="blog-meta">
                  {formatDate(post.date)} · {post.category} · {post.readTime} read
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
              </div>
              <span className="blog-status">Coming Soon</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
