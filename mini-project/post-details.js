let divBox = document.querySelector('.postBox');

let  apiURL = 'https://jsonplaceholder.typicode.com/posts/';

let url = new URL (location.href);

let post = url.searchParams.get("post");


fetch(apiURL + post)

    .then(value => value.json())
    .then(value => {
        console.log(value);
        let divPost = document.createElement('div');
        divPost.classList.add('postInfo')
        for (let post in value) {
            let pInfo = document.createElement('p');
            pInfo.innerText = `${post} -- ${value[post]}`;
            divPost.append(pInfo);
            divBox.append(divPost)
        }
    })




let boxComments = document.querySelector('.boxComments');


 fetch(`https://jsonplaceholder.typicode.com/posts/${post}/comments`)
     .then(value => value.json())
     .then(comments => {
         console.log(comments)
         let commentsPost = document.createElement('ol')
         commentsPost.classList.add('listBox')
         for (let commentItem of comments) {
             let commentLi = document.createElement('li');
             commentLi.classList.add('innerBox')
             commentLi.innerText = `${commentItem.body}`;
            commentsPost.append(commentLi);
         }
         boxComments.append(commentsPost);
})

document.body.append(boxComments);