function attachEvents() {
    const displayCommentsForPost = function (post, data) {
        const postTitle = document.querySelector('#post-title');
        const postBody = document.querySelector('#post-body');
        const postComments = document.querySelector('#post-comments');

        postTitle.textContent = post.title;
        postBody.textContent = post.body;

        postComments.innerHTML = '';

        for (const element in data) {
            if (data[element].postId === post.id) {
                const li = document.createElement('li');
                li.id = data[element].id;
                li.textContent = data[element].text;
                postComments.appendChild(li);
            }
        }
    };

    const getCommentsForPost = function (post) {
        const urlForComments = `https://blog-apps-c12bf.firebaseio.com/comments.json`;

        fetch(urlForComments)
            .then(response => response.json())
            .then(data => displayCommentsForPost(post, data));
    };

    const viewPost = function (ev) {
        const postId = Array.from(postsSelect).find(x => x.selected === true);
        const urlForPost = `https://blog-apps-c12bf.firebaseio.com/posts/${postId.value}.json`;

        fetch(urlForPost)
            .then(response => response.json())
            .then(data => getCommentsForPost(data));
    };

    const displayPostsInSelectMenu = function (data) {
        for (const element in data) {
            const option = document.createElement('option');
            option.value = element;
            option.textContent = data[element].title;
            postsSelect.appendChild(option);
        }
    };

    const loadPosts = function (ev) {
        const url = `https://blog-apps-c12bf.firebaseio.com/posts.json`;

        fetch(url)
            .then(response => response.json())
            .then(data => displayPostsInSelectMenu(data))
    };

    const postsSelect = document.querySelector('#posts');
    const btnLoadPosts = document.querySelector('#btnLoadPosts');
    const btnViewPost = document.querySelector('#btnViewPost');

    btnLoadPosts.addEventListener('click', loadPosts);
    btnViewPost.addEventListener('click', viewPost);
}

attachEvents();