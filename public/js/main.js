import freeContent from "./free.js";
import comment from "./comment.js";
import onlineTicket from "./online.js";

async function allData(){
    await freeContent();
    // onlineTicket();
    comment();
}

allData();