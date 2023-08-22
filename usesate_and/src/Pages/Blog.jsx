import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-container">
            <h2>Latest Blog Posts</h2>
            <div className="posts">
                <div className="post">
                    <h3>The Meteoric Rise of Luna Marshall</h3>
                    <p>Luna Marshall, a name we've all become familiar with in recent months, has taken the world by storm with her debut album, "Stellar Nights". The album's standout track, "Eclipsing Hearts", has remained on the top of the charts for 8 consecutive weeks...</p>
                    <button>Read More</button>
                </div>
                <div className="post">
                    <h3>Trending Now: 'Desert Mirage' by The Nomads</h3>
                    <p>In an age dominated by electronic beats and auto-tuned vocals, The Nomads have brought back the timeless sound of rock with their latest hit single, "Desert Mirage". Their commitment to authentic instrumentation and storytelling is a refreshing change...</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    );
}

export default Blog;

