const registerNowButton=document.getElementById("registerNowButton")
const inputFieldOne= document.getElementById("input-one")
const inputFieldTwo= document.getElementById("input-two")
const inputFieldThree= document.getElementById("input-three")
const inputFieldFour= document.getElementById("input-four")
const mobileBar = document.getElementById("mobile-bar")
const mobileNavPage =document.getElementById("mobile-nav")

console.log(mobileBar)


// mobile bar codes

function addToggle(){
  mobileBar.classList.remove("fa-bars")
  mobileBar.classList.add("fa-times")
  mobileBar.classList.add("clicked")
  mobileNavPage.style="display:block"
}
function removeToggle(){
mobileBar.classList.add("fa-bars")
mobileBar.classList.remove("fa-times")
mobileBar.classList.remove("clicked")

}

mobileBar.addEventListener('click', ()=>{
 const isClicked = mobileBar.classList.contains("clicked")
 if(isClicked){
   removeToggle()
   console.log('hello')
 }else{
   addToggle()
   console.log('who you be')
 }
console.log(mobileBar)
})

// countdown logic
var countDownDate = new Date("December 26, 2023 00:00:00").getTime();
console.log(countDownDate)

var x = setInterval(function() { 
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hours").innerHTML = "EXPIRED";
    document.getElementById("minutes").innerHTML.style = "display:none";
  document.getElementById("seconds").innerHTML.style= "display:none";
  }
}, 1000);






registerNowButton.addEventListener('click', ()=>{
   if(inputFieldOne.value  == ""){
    console.log('yes')
  }else if (inputFieldTwo.value == ""){
    console.log('yes')
  }else if (inputFieldThree.value ==""){
    console.log('yes')
  }else if (inputFieldFour.value ==""){
    console.log('yes')
  }else{
    console.log('woo')
    window.open("confirmationpage.html")
  }
  
})



const textCollapseDiv = document.querySelector(".text-collapse-div")
 console.log(textCollapseDiv.children)


    textCollapseDiv.addEventListener('click', e =>{   
        for(let collapsediv = 0; collapsediv < textCollapseDiv.children.length; collapsediv++){
       let div = textCollapseDiv[collapsediv]
console.log(e.target)
}
       
 })





