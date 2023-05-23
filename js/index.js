const sliderWidth = document.querySelector(".slider-width");

/* sliderWidth.innerHTML += `<p> hei </p>`; */

console.log("hei");


const url = "http://thefoodplace.local/wp-json/wp/v2/posts/?per_page=12";

async function get12Posts() {
    const respond = await fetch(url);
    const data = await respond.json();

    console.log(data);

    for (let i=0; i< data.length; i++) {
        sliderWidth.innerHTML += `
        <div class="item">
            <a href="specific-post.html?id=${data[i].id}">
                <h3>${data[i].title.rendered}</h3>
                <div class="carousel-content">${data[i].content.rendered}</div>

            </a>
        </div>`;

    }

    /*  for (let i = 0; i < data.length; i++) {
 
         carousel.innerHTML += `<a href="specific-post.html?id=${data[i].id}>
         <div> <h3>${data[i].title.rendered}</h3>
         
         
         </div>
         </a>`;
     } */



}

get12Posts();



/* const prevBtn = document.querySelector (".prev");
const nextBtn = document.querySelector (".next");

prevBtn.innerHTML = "hei";
nextBtn.innerHTML= "sann"; */





