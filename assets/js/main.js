let header = document.getElementsByTagName("header")[0];
document.getElementById("menu").addEventListener("click", (e) => {
  let div = document.createElement("div");
  if (document.getElementsByClassName("menux")[0] === undefined) {
    let ul = document.createElement("ul");
    for (let i = 0; i < 5; i++) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      if (i === 0) {
        a.innerText = "Home";
      } else if (i === 1) {
        a.innerText = "About";
      } else if (i === 2) {
        a.innerText = "Contact";
      } else if (i === 3) {
        a.innerText = "Blog";
      } else if (i === 4) {
        a.innerText = "Careers";
      }
      a.classList.add(
        "text-Dark_Blue-0",
        "cursor-pointer",
        "transition-colors",
        "duration-500",
        "text-[1.2em]",
        "hover:text-Lime_Green-0"
      );
      li.append(a);
      li.classList.add(
        "transtion-translate",
        "duration-700",
        "hover:translate-x-3"
      );
      li.style.cssText = `margin: 15px 0;`;
      ul.append(li);
      div.append(ul);
      div.style.cssText = `
      background-color: white; 
      border-radius: 5px;
      position: fixed; 
      width: 91%;
      top: 69px;
      padding: 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      z-index:5;
      box-shadow: rgba(45, 49, 77, 0.29) 0px 155px 20px 33vh;
      left: 50%;
      transform: translate(-50%, 22px);
      `;
      div.classList.add("menux");

      document.body.append(div);
    }
    document.getElementById("menu").querySelectorAll("span")[0].style.margin =
      "0px 0px 0px 0px";
    document.getElementById("menu").querySelectorAll("span")[0].style.rotate =
      "-45deg";
    setTimeout(() => {
      document
        .getElementById("menu")
        .querySelectorAll("span")[1].style.display = "none";
    }, 100);

    document.getElementById("menu").querySelectorAll("span")[2].style.margin =
      "-2px 0 3px 0px";
    document.getElementById("menu").querySelectorAll("span")[2].style.rotate =
      "45deg";
  } else {
    document.getElementById("menu").querySelectorAll("span")[0].style.margin =
      "0";
    document.getElementById("menu").querySelectorAll("span")[0].style.rotate =
      "0deg";
    setTimeout(() => {
      document
        .getElementById("menu")
        .querySelectorAll("span")[1].style.display = "block";
    }, 100);

    document.getElementById("menu").querySelectorAll("span")[2].style.margin =
      "0";
    document.getElementById("menu").querySelectorAll("span")[2].style.rotate =
      "0deg";
    document.getElementsByClassName("menux")[0].remove();
  }
});
