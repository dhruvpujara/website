document.addEventListener("DOMContentLoaded", () => {

  let contactus = document.querySelector(".contactus");
  let currmode = "light";
  let body = document.querySelector("body");
  let modebtn = document.querySelector(".mdbtn");
  let content = document.querySelector(".content");
  let bar = document.querySelector(".bar");
  let bardiv = document.querySelector(".bardiv");
  let footer = document.querySelector(".footer");
  let navbar = document.querySelector(".NAVBAR");

  // CONTACT US AND BUG REPORT MECHANISM
  contactus.addEventListener("click", () => {
    alert("contact no 7046056443");
  });

  // mode button mechanism
  modebtn.addEventListener("click", () => {
    if (currmode == "light") {
      currmode = "dark";
      body.classList.add("dark");
      body.classList.remove("light");
      footer.classList.remove("footborder");
      content.classList.add("contentimg1");
      content.classList.remove("contentimg2");
    } else {
      currmode = "light";
      body.classList.add("light");
      body.classList.remove("dark");
      navbar.classList.add("navborder");
      footer.classList.add("footborder");
      content.classList.add("contentimg2");
      content.classList.remove("contentimg1");
    }
  });

  let barmenu = false;
  bar.addEventListener("click", () => {
    barmenu = !barmenu;
    if (barmenu) {
      bardiv.classList.add("hidebardiv");
    } else {
      bardiv.classList.remove("hidebardiv");
    }
  });

  // Iterate over the animes array from ddlinks.js
  animes.forEach((anime , index) => {
    let div = document.createElement("div");
    div.classList.add("ANIME");
    div.classList.add("border");
    content.append(div);

    // anime img div
    let aniimgDiv = document.createElement("div");
    div.append(aniimgDiv);
    aniimgDiv.classList.add("aniimg");
    aniimgDiv.style.backgroundImage = `url('${anime.Image}')`;

    // play button
    let wtbtn = document.createElement("button");
    div.append(wtbtn);
    wtbtn.innerText = "WATCH";
    wtbtn.classList.add("wtbtn");
    wtbtn.classList.add("ANIME_button");

    wtbtn.addEventListener("click", () => {
      const animedet = `/anime-det/${anime.Id}`;
      document.location.href = animedet;
    });

  });
});