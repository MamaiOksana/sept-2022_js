let apiURL = 'https://jsonplaceholder.typicode.com/users/';


let url = new URL (location.href);
let id = url.searchParams.get("id");


fetch(apiURL + id)
    .then(value => value.json())
    .then(value => {

        let container = document.createElement('div')
        container.classList.add('container')

        for (let item in value) {

            let userDiv = document.createElement('div');
            if (typeof value[item] !== 'object') {

                userDiv.innerText = `${item} -- ${value[item]}`;
            } else {
                userDiv.innerText = `${item} :`

                for (const key in value[item]) {
                    const userInnerDiv = document.createElement('div');
                    if (typeof value[item][key] !== 'object') {
                        userInnerDiv.innerText = `${key} -- ${value[item][key]}`;

                    } else {
                        userInnerDiv.innerText = `${key} :`;

                        for (const element in value[item][key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element} -- ${value[item][key][element]}`;
                            }
                            userInnerDiv.append(htmlDivElement);
                        }
                    }
                    userDiv.append(userInnerDiv);
                }
            }
            container.append(userDiv)
            document.body.append(container);
        }




        let btn = document.createElement('button');
        btn.classList.add('buttonInfo')
        btn.innerText = `post of current user`
        btn.onclick = function () {
            this.disabled = true;

            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(value => value.json())
                .then(posts => {
                    containerForPosts = document.createElement('div')
                    containerForPosts.classList.add('forPost')
                    for (let post of posts) {
                        let divPost = document.createElement('div');
                        divPost.classList.add('postContainer')
                        divPost.innerText = `${post.title}`;
                        let anchor = document.createElement('a');
                        anchor.classList.add('infoPost')
                        anchor.innerText = 'details info about post';
                        anchor.href = 'post-details.html?post=' + post.id;
                        divPost.appendChild(anchor);
                        containerForPosts.append(divPost)
                        document.body.appendChild(containerForPosts);
                    }
                })
        }
        document.body.append(btn);
    });