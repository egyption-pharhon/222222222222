import { allProduct } from "items.js";
// open list items @ media 767px

function openNavList(){
	let navlist = document.querySelector('nav');
	navlist.classList.toggle("show");
}

// open details of product

function openProduct(id){
	window.open("product.html", "_self")
	productDetails(id)
}
//  change color of product
let activeImage = document.querySelector('.product .images .active')

function changeColor(newImage){
	activeImage.src = newImage
}

const allProduct = [ ]

function productDetails(id){
	console.log(allProduct)

}















