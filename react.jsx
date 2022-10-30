// const { Fragment } = require("react");




let modal = document.getElementById("project-2")
let prev_project = document.getElementById("prev_project_2")

// if(modal){
    prev_project.addEventListener("click", (e)=>{       
        // let ew = false
        // handleModal(ew)
        // console.log("abriendo modal")
    // const myCompi = <ModalImages />
    ReactDOM.render(<Modal />, modal);


    
    
    }, false)
// }
// alert("hoi")


const RenderList = props => {
    const animals = ["Dog", "Bird", "Cat", "Mouse", "Horse"];
  
    return (
      <div>
        {animals.map(animal => (
          <input>{animal}</input>
        ))}
      </div>
    );
  };

// function ModalImages(){

//     const rows = [];
//     for (let i = 0; i < 10; i++) {
//         // note: we are adding a key prop here to allow react to uniquely identify each
//         // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
//         rows.push("asder");
//     }
//     return <div>{rows}</div>;

//     // return(
//     //     <div>
//     //     </div>
//     // )
// }
function Modal(){

    let num_array = new Array(), project = "", projects = "", folder = "", images = new Array, client = "", description = "", link = ""
    // console.log(prev_project.id)
    if(prev_project.id == "prev_project_2"){
        // const slides = new Array(15)
         num_array =  Array.from(Array(15).keys())
         project = "auction"
         projects = "auctions"
         folder = "Auctions"
         images = [
            {src: '01-Active_listings_without_log_in',         h4: 'Active listings without log in',     h5: 'An unlogged user can view all the auctioned items, but cannot interact with them.'},
            {src: '02-Article_without_log_in',                 h4: 'Access to articles without log in',  h5: 'You do not have permissions to add an item to your Watch List (favorites). You also cannot bid or ask a question about the item.'},
            {src: '03-Register',                               h4: 'Register',                           h5: 'In this section we can register our user, in order to have access to the aforementioned options.'},
            {src: '04-Article_bike_logged_in_bigger_image',    h4: 'Access to article',                  h5: 'When entering the auction of an item, we can see in more detail the image of it and its data.'},
            {src: '05-Make_question',                          h4: 'Make questions',                     h5: 'We have the option to ask a question, which can only be answered by the creator of the auction of that item.'},
            {src: '06-Place_bid',                              h4: 'Place bid',                          h5: 'If we are not the creator of the auction and the auction is still open, we may place a bid (higher than the current bid).'},
            {src: '07-Add_to_watch_list',                      h4: 'Add to watch list',                  h5: 'In this way we save an auction in our Watch List (favorites).'},
            {src: '08-Categories',                             h4: 'Categories',                         h5: 'The auctions are discriminated by categories, by which we can filter them.'},
            {src: '09-Post_item',                              h4: 'Post item',                          h5: 'With this form we can load the data of the article that we want to auction (all fields must be completed).'},
            {src: '10-Log_in_user_owner_of_auction',           h4: 'Log in user owner of auction',       h5: 'We log in with another user to be able to show the options that the creator of an auction has.'},
            {src: '11-Answer_question',                        h4: 'Answer question',                    h5: 'Here we can see the option to answer a question that we have been asked about our auctioned item.'},
            {src: '12-Close_auction',                          h4: 'Close auction',                      h5: 'The creator of the auction has the right to close the auction at any time.'},
            {src: '13-Log_in_auction_winner',                  h4: 'Log in auction winner',              h5: 'We change users again in order to expose what we will see when our offer is the winner of an auction.'},
            {src: '14-Ipad_responsive',                        h4: 'Tablet responsive',                  h5: 'The entire page adapts perfectly to the size of tablet screens.'},
            {src: '15-Mobile_responsive',                      h4: 'Mobile responsive',                  h5: 'The entire page adjusts perfectly to the size of mobile screens.'}
        ]
         client = 'CS50 Harvard'
         description = 'Design of an eBay-like e-commerce auction site that allows users to post auction listings, bid on listings, comment on those listings, and add listings to a "watch list". Technologies used for this project Python/Django, JS/React, CSS/SASS.'
         link = 'https://rjmauctions.pythonanywhere.com/'
    }






    // const images = []
    




 


    // return (
    //   <div>
        // {animals.map(slides => (
        //   <input>{slides}</input>
        // ))}
    //   </div>
    // );

    return(
        <div class="modal-content">
            <a href="#close" class="modal-close" onClick={unLockScroll}>
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.3333 3C8.98133 3 3 8.98133 3 16.3333C3 23.6853 8.98133 29.6667 16.3333 29.6667C23.6853 29.6667 29.6667 23.6853 29.6667 16.3333C29.6667 8.98133 23.6853 3 16.3333 3ZM21.9427 20.0573L20.0573 21.9427L16.3333 18.2187L12.6093 21.9427L10.724 20.0573L14.448 16.3333L10.724 12.6093L12.6093 10.724L16.3333 14.448L20.0573 10.724L21.9427 12.6093L18.2187 16.3333L21.9427 20.0573Z" />
                </svg>
            </a>
            <article class="portfolio-modal">
                <article class="carousel">
                    <div class="arrow arrow_next" id={'arrow_next_' + project} >
                        <svg width="49" height="124" viewBox="0 0 49 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.0411 57.8916C48.5551 60.4213 48.5551 63.5787 47.0411 66.1084L14.8644 119.87C10.6952 126.836 -6.87928e-06 123.88 -6.52441e-06 115.761L-1.82446e-06 8.23882C-1.4696e-06 0.120417 10.6952 -2.8357 14.8645 4.13035L47.0411 57.8916Z" fill="#D9D9D9"/>
                        </svg>
                    </div>
                    <div class="arrow arrow_prev hide" id={'arrow_prev_' + project}>
                        <svg width="49" height="125" viewBox="0 0 49 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.45894 66.6084C-0.0551258 64.0787 -0.0551256 60.9213 1.45894 58.3916L33.6356 4.63033C37.8048 -2.33572 48.5 0.620383 48.5 8.73878L48.5 116.261C48.5 124.38 37.8048 127.336 33.6355 120.37L1.45894 66.6084Z" fill="#D9D9D9"/>
                        </svg>
                    </div>

                    {num_array.map((inputs) => (
                        (inputs === 0 ) ? <input type="radio" name={'slides-' + project} class={'radio_' + project} id={'slide-' + projects + '-' +  inputs} checked/> : <input type="radio" name={'slides-' + project} class={'radio_' + project}  id={'slide-' + projects +'-' +  inputs} />
                        // <p>holi</p>
                    ))}

                    <ul class={'slides-' + projects}>
                        {images.map((image, index) => (
                            <li class={index == 0 ? 'slide slide-' + project : 'slide slide-' + project + ' hide' } id={'image_' + projects + '_' + index}>
                                <img class="avatar" src={'assets/' + folder + '/' + image.src + '.gif'} alt={'Project ' + folder + ' ' + index+1}/>
                                <h4 class="text-first-color">{image.h4}</h4>
                                <h5>{image.h5}</h5>
                            </li>
                        ))}
                    </ul>
                    
                    <aside class="slides-nav">
                        {num_array.map((nlabel) => (
                            <label for={'slide-' + projects + '-' + nlabel} class="radio_dot" id={'dot-' + projects + '-' + nlabel}></label>
                        ))}
                    </aside>
                
                </article>
                <div class="portfolio-info">

                    <h3>Project {folder}</h3>
                    <p> {description} </p>
                    <aside class="portfolio-details">
                        <small class="b-small">Client: </small>
                        <small>{client}</small>
                        <small class="b-small">Link: </small>
                        <small><a href={link} target="_blank"
                            rel="noopener">{link}</a></small>
                    </aside>
                    {/* {rows} */}
                    {/* <ModalImages /> */}
                    {/* <RenderList /> */}
                </div>
            </article>
        </div>
    )
}




function unLockScroll() {
    document.body.classList.remove("lock-scroll");
    document.body.classList.add("un-lock-scroll");
  
  }

