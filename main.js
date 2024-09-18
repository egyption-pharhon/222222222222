
// open list items @ media 767px

function openNavList(){
	let navlist = document.querySelector('nav');
	navlist.classList.toggle("show");
}

// open details of product
export const allProduct = [];


function openProduct(){
	window.open("product.html", "_self")
	console.log(allProduct)
}
//  change color of product
let activeImage = document.querySelector('.product .images .active')

function changeColor(newImage){
	activeImage.src = newImage
}















