const listContainer = document.querySelector(".list-container");

listContainer.innerHTML += `<p> hei, denne teksten er en test av JS </p>`;

console.log("hei");

const url = "http://thefoodplace.local/wp-json/wp/v2/posts";

console.log(url);

async function getPosts() {
    try {
        const respond = await fetch(url);
        const data = await respond.json();

        console.log(data);

        /*         indexContent.innerHTML = "";
         */
        for (let i = 0; i < data.length; i++) {


            console.log(data[i].title);

            listContainer.innerHTML +=
                `<div class="list-grid">
                    <h2>${data[i].title.rendered}</h2>
                    <div class="list-img-container"> ${data[i].content.rendered}
                    </div>
                    <p class="date">Published: ${data[i].date}</p>
                    <div class="text">${data[i].excerpt.rendered}</div>
                    <a href="specific-post.html">
                        <p class="button">read post</p>
                    </a>

                </div>`



           /*  
            `<a href="details.html?id=${data.drinks[i].idDrink}"> 
                                        <div class="item-index">
                                            <h2 class="name-index"> ${data.drinks[i].strDrink}</h2>                                       
                                            <img class="listed-img" src="${data.drinks[i].strDrinkThumb}" alt= "serving example"/>
                                            <div> This drink is ${data.drinks[i].strAlcoholic}</div>
                                        </div>
                                    </a>` */;
        }
    }
    catch (error) {
        console.log("OOOPSIE:/sjekk internettforbindelse!", error);
        indexContent.innerHTML = `<div class="error">OH NO, something went wrong 😢</div>`;
    }
}

getPosts();