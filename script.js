document.getElementById("year").textContent=new Date().getFullYear();
document.querySelector(".menu").addEventListener("click",()=>document.querySelector(".links").classList.toggle("show"));
document.getElementById("contactForm").addEventListener("submit",e=>{e.preventDefault();document.getElementById("formMsg").textContent="Thanks! Your message has been received in this demo.";e.target.reset()});