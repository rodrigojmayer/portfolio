

// let elem;
let url = window.location.href;

document.addEventListener('DOMContentLoaded', function(){
  
  // KEYCODE_BACK = 4 
//   .onkeypress = function (e) {
//     e = e || window.event;
//     // use e.keyCode
// };
  document.addEventListener("keypress", function(event) {
    
    // console.log(event.key);
    alert(event.key);
    // if (event.key === "Enter") {
    //     event.preventDefault();
    //     handleModal()
    // }
    });

  // newurl = url.split('#');
  if (performance.getEntriesByType("navigation")[0].type == "reload") {
    // window.location.href = newurl.at(0)
//////////////////////////////////////////////////////////  CHANGE THIS AFTER FINISH EDITION PROJECTS///////////////////////////////////////////////////////////////////////////////
    // window.location.href = newurl.at(0)+"#portafolio"
    location.hash = "#portafolio"
    // location.hash = "#inicio"
    // window.location.href = newurl.at(0)
  }


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



  /* *****************  Images of Projects  ***************** */
  
  let prev_project_1 = document.getElementById("prev_project_1")
  prev_project_1.addEventListener("click", changeImages, { once: true })
  prev_project_1.myParam = "wiki"

  let prev_project_2 = document.getElementById("prev_project_2")
  prev_project_2.addEventListener("click", changeImages, { once: true })
  prev_project_2.myParam = "auction"

  let prev_project_3 = document.getElementById("prev_project_3")
  prev_project_3.addEventListener("click", changeImages, { once: true })
  prev_project_3.myParam = "mail"

  let prev_project_4 = document.getElementById("prev_project_4")
  prev_project_4.addEventListener("click", changeImages, { once: true })
  prev_project_4.myParam = "network"

  // document.getElementById("prev_project_2").addEventListener("click", changeImages("auction"))

  // someInput.addEventListener('click', myFunc, false);
  // someInput.myParam = 'This is my parameter';
  // function myFunc(evt)

  addEventListener('click', (eventest) => {
    // console.log("eventest")
    // console.log(eventest)
  });

  function changeImages(param){
    // let radio_auction = document.getElementsByClassName("radio_auction");
    // console.log(param.currentTarget.myParam)
    let prjct = param.currentTarget.myParam
    // alert("prjct")
        let var_radio
        let last_radio = 0;
        
        let radio
        let option
        let arrow_prev_prjct
        let arrow_next_prjct
        let slide
      // const elm = await waitForElm('.some-class');
      waitForElm(`#arrow_next_${prjct}`).then((elm) => {
        // console.log("pasa el waitforelm!")
        
        radio = document.getElementsByClassName(`radio_${prjct}`);
        option=document.getElementsByName(`slides-${prjct}`);
        arrow_prev_prjct = document.getElementById(`arrow_prev_${prjct}`)
        arrow_next_prjct = document.getElementById(`arrow_next_${prjct}`)
        slide = document.getElementsByClassName(`slide-${prjct}`)
        
        // console.log('radio')
        // console.log(radio)
        // console.log('option')
        // console.log(option)
        // console.log('arrow_prev_prjct')
        // console.log(arrow_prev_prjct)
        // console.log('arrow_next_prjct')
        // console.log(arrow_next_prjct)
        console.log('var_radio')
        console.log(var_radio)

        arrow_next_prjct.addEventListener("click", ()=> {
          console.log('last_radio')
          console.log(last_radio)
          var_radio = last_radio + 1
          option[var_radio].click();
        })

        arrow_prev_prjct.addEventListener("click", ()=> {
          var_radio = last_radio - 1
          option[var_radio].click();
        })

        for (let i = 0; i < radio.length; i++) {
          option[i].addEventListener('click', myFunction, false);
        }

        function myFunction (){
          let id_slide = parseInt(this.id.replace( /^\D+/g, ''));
          parseInt(id_slide)
          option[last_radio].checked = false;
          option[id_slide].checked = true;
  
          for(var j = 0; j < slide.length; j++){
            if(id_slide == j)
              show(slide[j])
            else
              hide(slide[j])
          }
          if(id_slide != "0"){
            show(arrow_prev_prjct)
          }
          else{
            hide(arrow_prev_prjct)
          }
          if(id_slide != radio.length-1){
            show(arrow_next_prjct)
          }
          else{
            hide(arrow_next_prjct)
          }
          last_radio = id_slide
        };
      });
  }



  
  document.addEventListener("deviceready", stopBack, false);
  function stopBack() /* Stops user navigating pages using back button on device */{
      document.addEventListener("backbutton", backKeyPressed, false);

      function backKeyPressed() {
        unLockScroll()
        location.hash = "#close"
          //Do some stuff

      }
  }


});


function lockScroll() {
  document.body.classList.add("lock-scroll");
  document.body.classList.remove("un-lock-scroll");
}
function unLockScroll() {
  document.body.classList.remove("lock-scroll");
  document.body.classList.add("un-lock-scroll");

}

// export const unLockScroll = ()=>{
//   document.body.classList.remove("lock-scroll");
//   document.body.classList.add("un-lock-scroll");
// }



function show(element){
  element.classList.add("show")
  element.classList.remove("hide")
}
function hide(element){
  element.classList.add("hide")
  element.classList.remove("show")
}


function waitForElm(selector) {
  // console.log("document.querySelector(selector)1")
  // console.log(document.querySelector(selector))
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
        // console.log("document.querySelector(selector)2")
          // console.log(document.querySelector(selector))
          return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector)) {
            // console.log("document.querySelector(selector)3")
              // console.log(document.querySelector(selector))
              resolve(document.querySelector(selector));
              observer.disconnect();
          }
      });

      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  });
}