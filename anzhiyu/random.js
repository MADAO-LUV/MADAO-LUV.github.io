var posts=["posts/14ee3806.html","posts/d409b276.html","posts/b0e2bb20.html","posts/4055ee82.html","posts/4a17b156.html","posts/0.html","posts/f5156368.html","posts/9bcefa22.html","posts/2266ffb9.html","posts/5faf78be.html","posts/75e8915.html","posts/a78b3962.html","posts/165e2cae.html","posts/5e52f62.html","posts/842d5faf.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};