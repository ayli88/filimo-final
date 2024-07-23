const freeContent = async () => {
    try {
      let option = document.querySelector(".free");
  
      option.classList.add("free");
      let data = await fetch("http://localhost:3000/free-content");
      let res = await data.json();
      let content = res.map((elem) => {
        return `<div class="movie-option"><img src=${elem.image} alt=${elem.alt} ></div>`;
      });
      document
        .querySelector(".options-movie")
        .insertAdjacentHTML("beforeend", content.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export default freeContent;
  