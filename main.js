const star1 = document.getElementById("star1");
const star2 = document.getElementById("star2");
const star3 = document.getElementById("star3");
const star4 = document.getElementById("star4");
const star5 = document.getElementById("star5");
const submit = document.getElementById("submitBtn");

submit.addEventListener("click", () => {
    document.getElementById("ratingULid").style.display = "none";
    document.getElementById("thkYouULid").style.display = "flex";
    document.getElementById("numOfStars").innerHTML = value; 
})
star1.addEventListener("click", () => {
    star1.classList.toggle("active");
    star2.classList.remove("active");
    star3.classList.remove("active");
    star4.classList.remove("active");
    star5.classList.remove("active");
    // console.log(document.getElementById("star1").getAttribute("value"));
    document.getElementById("numOfStars").innerHTML = document.getElementById("star1").getAttribute("value");
})
star2.addEventListener("click", () => {
    star1.classList.remove("active");
    star2.classList.toggle("active");
    star3.classList.remove("active");
    star4.classList.remove("active");
    star5.classList.remove("active");
    document.getElementById("numOfStars").innerHTML = document.getElementById("star2").getAttribute("value");
})
star3.addEventListener("click", () => {
    star1.classList.remove("active");
    star2.classList.remove("active");
    star3.classList.toggle("active");
    star4.classList.remove("active");
    star5.classList.remove("active");
    document.getElementById("numOfStars").innerHTML = document.getElementById("star3").getAttribute("value");
})
star4.addEventListener("click", () => {
    star1.classList.remove("active");
    star2.classList.remove("active");
    star3.classList.remove("active");
    star4.classList.toggle("active");
    star5.classList.remove("active");
    document.getElementById("numOfStars").innerHTML = document.getElementById("star4").getAttribute("value");
})
star5.addEventListener("click", () => {
    star1.classList.remove("active");
    star2.classList.remove("active");
    star3.classList.remove("active");
    star4.classList.remove("active");
    star5.classList.toggle("active");
    document.getElementById("numOfStars").innerHTML = document.getElementById("star5").getAttribute("value");
})
