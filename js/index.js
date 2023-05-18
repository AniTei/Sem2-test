const listContainer = document.querySelector (".content-container");

listContainer.innerHTML = `<p> hei </p>`;

console.log ("hei");

/* BOTH OK */

const url = "http://thefoodplace.local/wp-json/wp/v2/posts";

async function getPosts () {
    const respond = await fetch(url);
    const data = await respond.json();

    console.log (data);

    return data;

/*     for (let i = 0; i < postData.length; i++) */

}

getPosts();

console.log (data);


/* function showData (data) {
    console.log (data);

HOW DO I RETURN A VARIABLE FROM A FUNCTION???

}

showData(); */






listContainer.innerHTML = `<div> PÅ DEG </div>`;

/* DO I HAVE TO LOOP THROUGH EVERY TIME I WANT TO USE AN ARRAY? */