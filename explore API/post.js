function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    // .then(data => console.log(data));
    .then(data => displayPost(data));
}
/**
 * 1. get the container element where you want to add the new element
 * 2. create child element
 * 3. set innertext or innerHTML
 * 4. append child
 */


function displayPost(posts){
    // console.log(posts);
    const postContainer = document.getElementById('posts-container');
    for(const post of posts){
        // console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
        <h4>user-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <P>Post Description: ${post.body}</P>
        `;
        postContainer.appendChild(postDiv);
    }
}

loadPost();