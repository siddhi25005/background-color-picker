let color=document.querySelector(".color");
let body=document.querySelector("body");
let rbox=document.querySelector(".res");
color.addEventListener("click",function(){
    let c=color.value;
    body.style.backgroundColor=c;
    rbox.innerText=c;

})
