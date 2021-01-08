function highlightBtn(button) {
  console.log(button);
  var homebtn = document.getElementById("menu-home");
  var aboutbtn = document.getElementById("menu-aboutme");
  var resumebtn = document.getElementById("menu-resume");
  console.log(homebtn);
  if (button === "home") {
    homebtn.classList.add("active");
    aboutbtn.classList.remove("active");
    resumebtn.classList.remove("active");
  } else if (button === "about") {
    aboutbtn.classList.add("active");
    homebtn.classList.remove("active");
    resumebtn.classList.remove("active");
  } else {
    resumebtn.classList.add("active");
    homebtn.classList.remove("active");
    aboutbtn.classList.remove("active");
  }
}

homebtn.addEventListener("click", () => {
  homebtn.classList.add("active");
  aboutbtn.classList.remove("active");
  resumebtn.classList.remove("active");
});

aboutbtn.addEventListener("click", () => {
  aboutbtn.classList.add("active");
  homebtn.classList.remove("active");
  resumebtn.classList.remove("active");
});

resumebtn.addEventListener("click", () => {
  resumebtn.classList.add("active");
  homebtn.classList.remove("active");
  aboutbtn.classList.remove("active");
});

// homebtn.addEventListener('click', () => {
//     console.log('Hi')
//     homebtn.classList.add('active');
//     aboutme.classList.remove('active');
// })

// aboutme.addEventListener('click', () => {
//     console.log('Hi')
//     aboutme.classList.add('active');
//     home.classList.remove('active');
// })
