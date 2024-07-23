const onlineTicket = async () => {
    try {
      let tickets = document.querySelector(".ticket");
  
      tickets.classList.add("online-movies");
      let data = await fetch("http://localhost:3000/online");
      let res = await data.json();
      let ticket = res.map((elem) => {
        return ` <div class="ticket">
              <img src=${elem.image}>
              <div class="buy">
                <h1>${elem.title}</h1>
                <span>کارگردان: ${elem.director}</span>
                <div class="ganra">
                  <span>${elem.ganra.first}</span>
                  <span>${elem.ganra.second}</span>
                </div>
                <a href="#">خرید بلیط</a>
              </div>
            </div> `;
      });
      document
        .querySelector(".online-movies")
        .insertAdjacentHTML("beforeend", ticket.join(""));
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export default onlineTicket;
  