/* *************** Menu **************** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
  
})(document);


 function lockScroll() {
   document.body.classList.add("lock-scroll");
   document.body.classList.remove("un-lock-scroll");
  //  document.querySelector("body").style.marginRight="11px";
  // document.querySelector(".header").style.marginRight="11px";
  // document.querySelector("#id_header").style.marginRight="0";
  // document.getElementById("id_header").style.marginRight="11px";


  //  alert("gilipollaz")
 }
 function unLockScroll() {
  // document.querySelector("body").style.marginRight="0";
  // document.querySelector(".header").style.marginRight="0";
  // document.getElementById("id_header").style.marginRight="0";
  //  document.querySelector("#project-4").style.marginRight="-11px";
   document.body.classList.remove("lock-scroll");
   document.body.classList.add("un-lock-scroll");

 }

/* ************** ContactForm *************** */
 
((d)=>{
  const $form = d.querySelector(".contact-form"),
  $loader = d.querySelector(".contact-form-loader"),
  $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/rodrigojmayer@gmail.com",{
      method: "POST",
      body: new FormData(e.target),
    })
    .then((res)=> (res.ok ? res.json() : Promise.reject(res)))
    .then((json)=> {
      console.log(json);
      location.hash = "#gracias";
      $form.reset();
    })
    .catch((err)=> {
      console.log(err);
      let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente."
      $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
     })
     .finally(() =>{
      $loader.classList.add("none");
      setTimeout(() => {
        location.hash = "#close"
      }, 3000);
    
    })
  })
})(document);