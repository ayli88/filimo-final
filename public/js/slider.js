let counter=0;
let detail = document.querySelectorAll(".detail")
function counterS(c) {
    detail.forEach((elem, index) => {
        elem.style.transform = `translateY(${(index-c) * 100}%)`;
    });
}



document.querySelector(".posters").addEventListener("click", function(e){
console.log(e.target.classList);
    if  (e.target.classList.contains("image")){
const clicked = e.target;
counter=+clicked.dataset.id;
counterS(counter)
}
});

const film = document.querySelector(".film-film");
const serial=document.querySelector(".serial-serial");
const filmWrapper = document.querySelector(".film");
const serialWrapper = document.querySelector(".serial");


film.addEventListener("click", () => {
    serialWrapper.style.display = "none";
    filmWrapper.style.display = "flex";
//    console.log(filmWrapper);

});
serial.addEventListener("click", () =>{
    filmWrapper.style.display = "none";
    serialWrapper.style.display = "flex";

});




// const popular = async () => {
//     try {
//       let option = document.querySelector(".free");
  
//       option.classList.add("free");
//       let data = await fetch("http://localhost:3000/free-content");
//       let res = await data.json();
//       let content = res.map((elem) => {
//         return `<div class="movie-option"><img src=${elem.image} alt=${elem.alt} ></div>`;
//       });
//       document
//         .querySelector(".options-movie")
//         .insertAdjacentHTML("beforeend", content.join(""));
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
  
//   export default freeContent;
  