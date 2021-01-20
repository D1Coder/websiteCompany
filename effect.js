var imgs = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
]
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
  if(counter === 3){
    counter = 0;
  }
  img.src = imgs[counter]
  counter = counter + 1;
});
