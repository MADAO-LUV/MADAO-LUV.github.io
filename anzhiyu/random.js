var posts=["posts/4055ee82.html","posts/b0e2bb20.html","posts/4a17b156.html","posts/0.html","posts/842d5faf.html","posts/5e52f62.html","posts/9bcefa22.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};