const specContainer = document.querySelector(".spec-container");

specContainer.innerHTML = `<div>test</div>`;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const idPost = params.get("id");

const url = "http://thefoodplace.local/wp-json/wp/v2/posts/" + idPost;

async function findPost() {
    try {
        const respond = await fetch(url)
        const data = await respond.json();

        console.log(data.date);

        specContainer.innerHTML += `<h1>${data.title.rendered}</h1>
                                        <p class="date">Published: ${data.date}</p>

                                        <div>${data.content.rendered}</div>`;




        detailsTitle.innerHTML = `${yourDrink.strDrink}`;

    }
    catch (error) {
        console.log("OOOPSIE:/sjekk internettforbindelse!", error);
        detailsContent.innerHTML = `<div class="error">OH NO, something went wrong 😢</div>`;
    }
}

findPost();


