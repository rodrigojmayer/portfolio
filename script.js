
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



// setTimeout(console.log(myElement), 5000);
  // let myElement = document.querySelector(".slides-auctions");
  // myElement.getElementsByClassName.transform = ""
  // console.log(myElement)
  // for(let i = 0; i<100; i++)
  //  setTimeout(console.log(myElement), 5000);

  // let checklist1 = document.querySelector("#slide-auctions-1")
  // let checklist2 = document.querySelector("#slide-auctions-2")
  // let checklist = document.name("#slide-auctions-2")
  // console.log(checklist1)
  // console.log(checklist2)

  // checklist.addEventListener("click", function(){
  //   console.log("entrando")
  //   console.log(myElement)
  // })
  // var rad = document.slidesauctions;
  // var prev = null;
  // for (var i = 0; i < rad.length; i++) {
  //     rad[i].addEventListener('change', function() {
  //         (prev) ? console.log(prev.value): null;
  //         if (this !== prev) {
  //             prev = this;
  //         }
  //         console.log(this.value)
  //         // console.log(i)
  //     });
  // }

  let radio_auction = document.getElementsByClassName("radio_auction");
  // let radio_auction2 = document.querySelectorAll(".radio_auction");
  // let element_actual_radio = document.getElementById("slide-auctions-1")
  let last_radio = 0;
  
  var option=document.getElementsByName('slides-auctions');
  console.log(option[0])
  console.log(option[1])
  
  for (let i = 0; i < radio_auction.length; i++) {
    option[i].addEventListener('change', myFunction, false);
    // option
  }

  function myFunction (){
      // this.id = this.id.replace( /^\D+/g, '');
      let id_slide = this.id.replace( /^\D+/g, '');
      // document.getElementById(`slide-auctions-${last_radio}`).checked = false;
      // let element_last_radio = document.getElementById(`slide-auctions-${last_radio}`);
      // let element_last_radio = option[last_radio];
      // document.getElementById(`slide-auctions-${this.id}`).checked = true;
      // let stringtest = `slide-auctions-${this.id}`;
      // let element_actual_radio = option[this.id];
      // let element_actual_radio = document.getElementById(stringtest)
      // console.log(`element _last_radio ${last_radio}`)
      // console.log(element_last_radio)
      // console.log(`element _actual_radio ${this.id}`)
      // console.log(element_actual_radio)
      
      option[last_radio].checked = false;
      option[id_slide].checked = true;

      // var attribute = this.name
      // console.log(attribute)
      // console.log(radio_auction.length)
      // console.log(radio_auction.length)
      let arrow_prev_auctions = document.getElementById("arrow_prev_auctions")
      let arrow_next_auctions = document.getElementById("arrow_next_auctions")
      let slide_auctions = document.getElementsByClassName("slide-auctions")
      // console.log(slide_auctions.length)
      for(var j = 0; j < slide_auctions.length; j++){
        if(id_slide == j)
          show(slide_auctions[j])
        else
          hide(slide_auctions[j])
      }
      if(id_slide != "0"){
        show(arrow_prev_auctions)
        // arrow_prev_auctions.classList.add("show")
        // arrow_prev_auctions.classList.remove("hide")
      }
      else{
        hide(arrow_prev_auctions)
        // arrow_prev_auctions.classList.add("hide")
        // arrow_prev_auctions.classList.remove("show")
      }
      if(id_slide != radio_auction.length-1){
        show(arrow_next_auctions)
        // arrow_next_auctions.classList.add("show")
        // arrow_next_auctions.classList.remove("hide")
      }
      else{
        hide(arrow_next_auctions)
        // arrow_next_auctions.classList.add("hide")
        // arrow_next_auctions.classList.remove("show")

      }
      last_radio = id_slide
      // slide-auctions
      // image_auctions_6
  };

  // radio_auction2.forEach(item => {
  //   item.addEventListener('click', event => {
  //     //handle click
  //     // console.log("entra al foreach")
  //   })
  // })

  // for (let i = 0; i < radio_auction.length; i++) {
    // radio_auction[i].addEventListener('change', myFunction, false);
    // radio_auction[i].addEventListener('change', ()=>{

    //   this.id = this.id.replace( /^\D+/g, '');
    //   // document.getElementById(`slide-auctions-${last_radio}`).checked = false;
    //   let element_last_radio = document.getElementById(`slide-auctions-${last_radio}`);
    //   // document.getElementById(`slide-auctions-${this.id}`).checked = true;
    //   let stringtest = `slide-auctions-${this.id}`;
    //   let element_actual_radio = document.getElementById(stringtest)
    //   console.log(`element _last_radio ${last_radio}`)
    //   console.log(element_last_radio)
    //   console.log(`element _actual_radio ${this.id}`)
    //   console.log(element_actual_radio)
    // })
  // }

  // if (!(option[0].checked || option[1].checked)) {
      // alert("Please Select Your Gender");
      // return false;
  // }




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
  // console.log(element)
  element.classList.add("hide")
  element.classList.remove("show")
}