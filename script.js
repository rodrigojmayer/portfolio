
document.addEventListener('DOMContentLoaded', function(){


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




  let radio_auction = document.getElementsByClassName("radio_auction");
  let last_radio = 0;
  let var_radio
  var option=document.getElementsByName('slides-auctions');
  console.log(option[0])
  console.log(option[1])
  let arrow_prev_auctions = document.getElementById("arrow_prev_auctions")
  let arrow_next_auctions = document.getElementById("arrow_next_auctions")
  let slide_auctions = document.getElementsByClassName("slide-auctions")
  arrow_next_auctions.addEventListener("click", ()=> {
    var_radio = last_radio + 1
    option[var_radio].click();
  })
  arrow_prev_auctions.addEventListener("click", ()=> {
    var_radio = last_radio - 1
    option[var_radio].click();
  })
  for (let i = 0; i < radio_auction.length; i++) {
    option[i].addEventListener('change', myFunction, false);
  }

  function myFunction (){
      let id_slide = parseInt(this.id.replace( /^\D+/g, ''));
      parseInt(id_slide)
      console.log(id_slide)
      
      option[last_radio].checked = false;
      option[id_slide].checked = true;

      for(var j = 0; j < slide_auctions.length; j++){
        if(id_slide == j)
          show(slide_auctions[j])
        else
          hide(slide_auctions[j])
      }
      if(id_slide != "0"){
        show(arrow_prev_auctions)
      }
      else{
        hide(arrow_prev_auctions)
      }
      if(id_slide != radio_auction.length-1){
        show(arrow_next_auctions)
      }
      else{
        hide(arrow_next_auctions)
      }
      last_radio = id_slide
  };


});


function lockScroll() {
  document.body.classList.add("lock-scroll");
  document.body.classList.remove("un-lock-scroll");
}
function unLockScroll() {
  document.body.classList.remove("lock-scroll");
  document.body.classList.add("un-lock-scroll");

}

function show(element){
  element.classList.add("show")
  element.classList.remove("hide")
}
function hide(element){
  element.classList.add("hide")
  element.classList.remove("show")
}