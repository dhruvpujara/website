let content = document.querySelector(".content");
let bar = document.querySelector(".bar");
let bardiv = document.querySelector(".bardiv");


let barmenu = false;
bar.addEventListener("click",() =>{
 
  barmenu = !barmenu;
  if (barmenu) {
      bardiv.classList.add("hidebardiv")
  } else{
    bardiv.classList.remove("hidebardiv")
  }
})

animes2.forEach((anime2) => {
    let div = document.createElement("div");
    div.classList.add("ANIME"); 
    div.classList.add("ANIME2"); 
    div.classList.add("border");
    content.append(div);

    // anime img div
    let aniimgDiv = document.createElement("div");
    div.append(aniimgDiv);
    aniimgDiv.classList.add("aniimg");
    aniimgDiv.style.backgroundImage = `url('${anime2.Image}')`;
 
 
    // play button
    let wtbtn = document.createElement("button");
    div.append(wtbtn);
    wtbtn.innerText = "WATCH";
    wtbtn.classList.add("wtbtn");
    wtbtn.classList.add("ANIME_button");
   
    wtbtn.addEventListener("click", () => {
      const animedet = `/anime-det2.ejs/${anime2.Id}`;
      console.log(animedet);
      document.location.href = animedet;
    });


});
