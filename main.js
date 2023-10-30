const registerNowButton=document.getElementById("registerNowButton")
const inputField = document.querySelectorAll("#inputfield")
console.log(inputField)
console.log("lola")

registerNowButton.addEventListener('click', ()=>{
 console.log("yes")
})






const textCollapseDiv = document.querySelector(".text-collapse-div")
 console.log(textCollapseDiv.children)


    textCollapseDiv.addEventListener('click', e =>{   
        for(let collapsediv = 0; collapsediv < textCollapseDiv.children.length; collapsediv++){
       let div = textCollapseDiv[collapsediv]
console.log(e.target)
}
       
 })




// countdown logic
var countDownDate = new Date("December 05, 2023 00:00:00").getTime();
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
