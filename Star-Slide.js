
const apiUrl = "https://swapi.dev/api/people";

async function getStar() {

    const response = await fetch(apiUrl);

    const data = await response.json();

    console.log(data);

	const star = data.results[0];

	let name = star.name;
  let height = star.height;
  let gender = star.gender;


	document.querySelector("star-name").textContent = name;
	document.querySelector("#star-height").textContent = height;
	document.querySelector("#star-gender").textContent = gender;

	/*let img = document.createElement("img");
	let img_div = document.getElementById("star-img");
	img.src = image;
	img_div.append(img);*/

	}

getStar();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
  
}