let crbutton = document.querySelector(".crtacc");
let logbody=document.querySelector(".loginbody");
let pg= document.querySelector(".pg")
let hiddendiv= document.querySelector(".hiddendiv");
let code = document.querySelector(".code");
let generateRandomCode = function generateRandomCode() {
  return Math.floor(100000 + Math.random() * 900000);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".code").textContent = generateRandomCode();
});

crbutton.addEventListener("dblclick", ()=>{
    logbody.removeChild(pg)
    hiddendiv.classList.remove("hidediv");
  })

 