// select modal-btn, model-overlay, close-btn
// listen for clicks events on modal-btn and close-btn
// when user clicks modal-btn add .OPEN-MODAL to modal-overlay
// when user clicks close-btn remove .OPEN-MODAL from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function(){
    modal.classList.add("open-modal");

})

closeBtn.addEventListener("click", function (){
    modal.classList.remove("open-modal");
})