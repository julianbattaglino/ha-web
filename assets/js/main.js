document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector("body").classList.toggle("burger__opened");
    document.querySelector(".menu").classList.toggle("opened");
    setTimeout(() => {
        document.querySelector(".menu__content").classList.toggle("opened");
    }, 500);
    setTimeout(() => { 
        document.querySelector(".menu__sidebar").classList.toggle("opened");
        document
            .querySelector(".menu__content-small__links")
            .classList.toggle("opened");
    }, 700);
});