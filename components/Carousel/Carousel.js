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

  img1.setAttribute("src", "./assets/carousel/mountains.jpeg")
  img2.setAttribute("src", "./assets/carousel/computer.jpeg")
  img3.setAttribute("src", "./assets/carousel/trees.jpeg")
  img4.setAttribute("src", "./assets/carousel/turntable.jpeg")

  img1.style.display = "block"
  img2.style.display = "none"
  img3.style.display = "none"
  img4.style.display = "none"

  img1.setAttribute("id", "img1")
  img2.setAttribute("id", "img2")
  img3.setAttribute("id", "img3")
  img4.setAttribute("id", "img4")


  //////////////////////////////////////////////////////
  // const list = [1, 2, 3, 4]
  // var target = 0

  // leftButton.addEventListener("click", event =>{
  //   // console.log(event)
  //   console.log(`current: ${index}`)
  //   console.log(`previous:${previous}`)
  //   console.log(`start:${start}`)

  //   if (start){
  //     DisplayToggle(img1)
  //     DisplayToggle(img4)
  //     target = 3
  //     start = 0
  //   }
  // //   switch(index){
  // //     case 0:
  // //       console.log(`case0`)
  // //       DisplayToggle(img1)
  // //       DisplayToggle(img4)
  // //       break;
  // //     case 1:
  // //       console.log(`case1`)
  // //       DisplayToggle(img4)
  // //       DisplayToggle(img3)
  // //       break;
  // //     case 2:
  // //       console.log(`case2`)
  // //       DisplayToggle(img3)
  // //       DisplayToggle(img2)
  // //       break;
  // //     case 3:
  // //       console.log(`case3`)
  // //       DisplayToggle(img2)
  // //       DisplayToggle(img1)
  // //       break;
  // //   }

  //   // if(index === 3){
  //   //   index = 0
  //   // }else{
  //   //   index++
  //   // }
  //   index--
  //   console.log(`next:${index}`)
  // })

  // rightButton.addEventListener("click", event =>{
  //   // console.log(event)
  //   console.log(`current: ${index}`)
  //   console.log(`previous:${previous}`)
  //   console.log(`start:${start}`)

  //   if (start){
  //       DisplayToggle(img1)
  //       DisplayToggle(img2)
  //       start = 0
  //       previous = index
  //   }
  //   // switch(index){
  //   //   case 0:
  //   //     console.log(`case0`)
  //   //     DisplayToggle(img1)
  //   //     DisplayToggle(img2)
  //   //     break;
  //   //   case 1:
  //   //     console.log(`case1`)
  //   //     DisplayToggle(img2)
  //   //     DisplayToggle(img3)
  //   //     break;
  //   //   case 2:
  //   //     console.log(`case2`)
  //   //     DisplayToggle(img3)
  //   //     DisplayToggle(img4)
  //   //     break;
  //   //   case 3:
  //   //     console.log(`case3`)
  //   //     DisplayToggle(img4)
  //   //     DisplayToggle(img1)
  //   //     break;
  //   // }

  //   // if(index === 3){
  //   //   index = 0
  //   // }else{
  //   //   index++
  //   // }
  //   index++
  //   console.log(`next:${index}`)
  // })

  /////////////////////////////////////////
  return carousel
}

function DisplayToggle(img){
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}

function CarouselStart(start){
  timer = setInterval(function(){
    msTime++
    if(start){
      img4.style.display = "none"
      img1.style.display = "block"
      start = 0
    }
    switch(msTime){
      case 300:
        img1.style.display = "none"
        img2.style.display = "block"
        break;
      case 600:
        img2.style.display = "none"
        img3.style.display = "block"
        break;
      case 900:
        img3.style.display = "none"
        img4.style.display = "block"
        break; 
    }
    if(msTime === 1200){
      msTime = 0
      img4.style.display = "none"
      img1.style.display = "block"
    }
  }, 12);
}

function CarouselStop(){
  clearInterval(timer)
}

var msTime = 0;
var timer;

var current = 0
var previous = 0
var start = 1

const carouselContainer = document.querySelector(".carousel-container")
carouselContainer.appendChild(Carousel(current))
CarouselStart(start)

console.log("outside")
var carousels = document.querySelectorAll(".carousel img")

