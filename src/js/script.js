window.onload = function() {



    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            let parentDiv = document.createElement("DIV");
            json.forEach(element => {
                let div = document.createElement("DIV");
                div.className = 'post';
                let title = document.createElement("H3");
                title.className = 'title';
                let body = document.createElement("P");
                body.className = 'body';
                title.innerHTML = element.title;
                body.innerHTML = element.body;
                div.appendChild(title);
                div.appendChild(body);
                parentDiv.appendChild(div);
            });
            let body = document.querySelector("body");
            body.appendChild(parentDiv);
        })
        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
        })
        .finally(() => {
            let footer = document.createElement("footer");
            date = new Date().toLocaleString()
            footer.innerText = date;
            document.body.appendChild(footer);
        })
}