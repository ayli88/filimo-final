const comment = async () => {
    try {
      let box = document.querySelector(".box");
  
      box.classList.add("box");
      let data = await fetch("http://localhost:3000/comment");
      let res = await data.json();
      let commentBox = res.map((elem) => {
        return `  <div class="box">
              <img src="./image/1.png" alt="">
              <span>${elem.name}</span>
              <p>${elem.text}</p>
            </div>`;
      });
      document
        .querySelector(".box-wrapper")
        .insertAdjacentHTML("beforeend", commentBox.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export default comment;
  