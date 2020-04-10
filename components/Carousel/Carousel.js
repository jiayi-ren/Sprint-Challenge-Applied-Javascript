/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel(index){
  const carousel = document.createElement("div")
  const leftButton = document.createElement("div")
  const img1 = document.createElement("img")
  const img2 = document.createElement("img")
  const img3 = document.createElement("img")
  const img4 = document.createElement("img")
  const rightButton = document.createElement("div")

  carousel.appendChild(leftButton)
  carousel.appendChild(img1)
  carousel.appendChild(img2)
  carousel.appendChild(img3)
  carousel.appendChild(img4)
  carousel.appendChild(rightButton)

  carousel.classList.add("carousel")
  leftButton.classList.add("left-button")
  rightButton.classList.add("right-button")

  leftButton.textContent = "<"
  rightButton.textContent = "\u003E"
  rightButton.style.textAlign = "center"

  img1.setAttribute("src", "./assets/carousel/mountains.jpeg")
  img2.setAttribute("src", "./assets/carousel/computer.jpeg")
  img3.setAttribute("src", "./assets/carousel/trees.jpeg")
  img4.setAttribute("src", "./assets/carousel/turntable.jpeg")

  img1.setAttribute("id", "img1")
  img2.setAttribute("id", "img2")
  img3.setAttribute("id", "img3")
  img4.setAttribute("id", "img4")

  img1.style.display = "block"
  img2.style.display = "none"
  img3.style.display = "none"
  img4.style.display = "none"

  return carousel
}

function CarouselStart(carousels, buttons, start, current){

  timer = setInterval(function(){
    msTime++
    // console.log(current)
    if(start){
      img4.style.display = "none"
      img1.style.display = "block"
      start = 0
      current = 0
    }
    switch(msTime){
      case 300:
        img1.style.display = "none"
        img2.style.display = "block"
        current = 1
        break;
      case 600:
        img2.style.display = "none"
        img3.style.display = "block"
        current = 2
        break;
      case 900:
        img3.style.display = "none"
        img4.style.display = "block"
        current = 3
        break; 
    }
    if(msTime === 1200){
      msTime = 0
      img4.style.display = "none"
      img1.style.display = "block"
      current = 0
    }
    CarouselButton(carousels, buttons, current)
    console.log(`inside Start: ${current}`)
  }, 12);

}

function CarouselStop(){
  clearInterval(timer)
}

function CarouselButton(imgList, buttons, current){

  const leftButton = buttons[0]
  const rightButton = buttons[1]

  leftButton.addEventListener("click", event =>{
    CarouselStop()
    for(var i = 0; i < imgList.length; i++){
      imgList[i].style.animation = "none"
    }
    var imgShow = 0
    imgList[current].style.display = "none"
    if(current === 0){
      imgShow = ((current + 3) % imgList.length)
        imgList[imgShow].style.display = "block"
      current = imgList.length - 1 
    }else{
      imgShow = current - 1
      imgList[imgShow].style.display = "block"
      current--
    }

  })

  rightButton.addEventListener("click", event =>{
    CarouselStop()
    for(var i = 0; i < imgList.length; i++){
      imgList[i].style.animation = "none"
    }
    var imgShow = 0
    imgList[current].style.display = "none"
    if(current === 3){
      imgShow = ((current - 3) % imgList.length)
        imgList[imgShow].style.display = "block"
      current = 0 
    }else{
      imgShow = current + 1
      imgList[imgShow].style.display = "block"
      current++
    }
  })
}

////////////////Generate Carousel///////////////
const carouselContainer = document.querySelector(".carousel-container")
carouselContainer.appendChild(Carousel(current))
///////////////Carousel scroll/////////////
var msTime = 0;
var timer;
var current = 0
var start = 1
const carousels = document.querySelectorAll(".carousel img")
const buttons = document.querySelectorAll(".carousel div")
CarouselStart(carousels, buttons, start, current)
