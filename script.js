// const access_key = "84ao4j4a_sACbB3-oqoOZGa52j9bD2JEXrZ3VzOZVsY"

// const formE1 = document.querySelector("form") // clicking the search button

// const inputE1 = document.getElementById("search-input") // the search query
// const searchResults = document.querySelector(".search-results") // the images results
// const showMore = document.getElementById("show-more-button") // the show more images button

// let inputData = ""; // contains the search
// let page = 1; // page no. default to 1 at first

// async function searchImages(){
//     inputData = inputE1.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&clinet_id=${access_key}`

//     const response = await fetch(url) //getting response here
//     const data = await response.json()

//     const results = data.results

//     if (page === 1){
//         searchResults.innerHTML == ""
//     }

//     results.map((result) =>{ // putting those results into the boxes of images here
//         const imageWrapper = document.createElement('div');
//         imageWrapper.classList.add("search-result");
//         const image = document.createElement('img');
//         image.src = result.urls.small;
//         image.alt = results.alt_description;
//         const imageLink = document.createElement('a');
//         imageLink.href = result.links.html;
//         imageLink.target = "_blank";
//         imageLink.textContent = result.alt_description;
        
//         imageWrapper.appendChild(image);
//         imageWrapper.appendChild(imageLink);
//         searchResults.appendChild(imageWrapper);
//     });

//     page++
//     if (page > 1){
//         showMore.style.display = "block"
//     }
// }

// formE1.addEventListener("submit", (event) =>{
//     event.preventDefault()
//     page = 1;
//     searchImages()
// })

// showMore.addEventListener("click", (event) =>{
//     searchImages()
// })

const accessKey = "84ao4j4a_sACbB3-oqoOZGa52j9bD2JEXrZ3VzOZVsY";

const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;
async function searchImages(){
    inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1){
        searchResults.innerHTML = "";
    }

    results.map((result) =>{
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);

    });

    page++;
    
    if (page > 1){
        showMore.style.display = "block";
    }

    formE1.addEventListener("submit", (event) =>{
        event.preventDefault();
        page = 1;
        searchImages();
    })

    showMore.addEventListener("click", () =>{
        searchImages();
    })

}