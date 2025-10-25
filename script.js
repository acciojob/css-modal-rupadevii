//your JS code here. If required.
const openModal = document.getElementById("openModal")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".close-modal")

openModal.addEventListener("click", () => {
	modal.style.display = "block";
	document.body.style.backgroundColor = "gray";
})

closeModal.addEventListener("click", () => {
	modal.style.display = "none";
	document.body.style.backgroundColor = "white"
})