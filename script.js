//your JS code here. If required.
const openModal = document.getElementById("openModal")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".close-modal")

openModal.addEventListener("click", (e) => {
	modal.style.display = "block";
	document.body.style.backgroundColor = "gray";
	e.stopPropagation()
})

window.addEventListener("click", hideModal)

closeModal.addEventListener("click", hideModal) 

function hideModal(){
	modal.style.display = "none";
	document.body.style.backgroundColor = "white"
}