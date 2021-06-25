let cursorMeter = document.getElementById("cursorMeter");
document.addEventListener("mousemove",function(e){
    cursorMeter.style.top = e.clientY+"px";
    cursorMeter.style.left = e.clientX+"px";
})
let percent = document.getElementById("percent");
let progressBar = document.getElementById("progressBar");

let totalHight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progress = (window.pageYOffset / totalHight)*100;
    progressBar.style.width = progress + "%";

    percent.innerText = "page scrolled: " + Math.round(progress) + "%";
}
