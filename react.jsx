
// import unLockScroll from './script.js';



let modal = document.getElementById("project-2")
let prev_project = document.getElementById("prev_project_2")

if(modal){
    prev_project.addEventListener("click", (e)=>{       
        // let ew = false
        // handleModal(ew)
        console.log("abriendo modal")
    }, false)
    ReactDOM.render(<Modal />, modal);
}
// alert("hoi")
function Modal(){
    return(
        <div class="modal-content">
            <a href="#closess" class="modal-close" onClick={unLockScroll}>
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.3333 3C8.98133 3 3 8.98133 3 16.3333C3 23.6853 8.98133 29.6667 16.3333 29.6667C23.6853 29.6667 29.6667 23.6853 29.6667 16.3333C29.6667 8.98133 23.6853 3 16.3333 3ZM21.9427 20.0573L20.0573 21.9427L16.3333 18.2187L12.6093 21.9427L10.724 20.0573L14.448 16.3333L10.724 12.6093L12.6093 10.724L16.3333 14.448L20.0573 10.724L21.9427 12.6093L18.2187 16.3333L21.9427 20.0573Z" />
                </svg>
            </a>
            <article class="portfolio-modal">
                <article class="carousel">
                    <div class="arrow arrow_next" id="arrow_next_auction" >
                        <svg width="49" height="124" viewBox="0 0 49 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.0411 57.8916C48.5551 60.4213 48.5551 63.5787 47.0411 66.1084L14.8644 119.87C10.6952 126.836 -6.87928e-06 123.88 -6.52441e-06 115.761L-1.82446e-06 8.23882C-1.4696e-06 0.120417 10.6952 -2.8357 14.8645 4.13035L47.0411 57.8916Z" fill="#D9D9D9"/>
                        </svg>
                    </div>
                    <div class="arrow arrow_prev hide" id="arrow_prev_auction">
                        <svg width="49" height="125" viewBox="0 0 49 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.45894 66.6084C-0.0551258 64.0787 -0.0551256 60.9213 1.45894 58.3916L33.6356 4.63033C37.8048 -2.33572 48.5 0.620383 48.5 8.73878L48.5 116.261C48.5 124.38 37.8048 127.336 33.6355 120.37L1.45894 66.6084Z" fill="#D9D9D9"/>
                        </svg>
                    </div>
                    <input type="radio" name="slides-auction" class="radio_auction" id="slide-auctions-0" checked />
                    <input type="radio" name="slides-auction" class="radio_auction" id="slide-auctions-1" />
                    <input type="radio" name="slides-auction" class="radio_auction" id="slide-auctions-2"/>
                    <input type="radio" name="slides-auction" class="radio_auction" id="slide-auctions-3"/>
                    <input type="radio" name="slides-auction" class="radio_auction" id="slide-auctions-4"/>
                    <input type="radio" name="slides-auction" class="radio_auction" id="slide-auctions-5"/>
                    <input type="radio" name="slides-auction" class="radio_auction" id="slide-auctions-6"/>
                    <input type="radio" name="slides-auction" class="radio_auction" id="slide-auctions-7"/>
                    <input type="radio" name="slides-auction" class="radio_auction" id="slide-auctions-8"/>
                    <input type="radio" name="slides-auction" class="radio_auction" id="slide-auctions-9"/>
                    <input type="radio" name="slides-auction" class="radio_auction" id="slide-auctions-10"/>
                    <input type="radio" name="slides-auction" class="radio_auction" id="slide-auctions-11"/>
                    <input type="radio" name="slides-auction" class="radio_auction" id="slide-auctions-12"/>
                    <input type="radio" name="slides-auction" class="radio_auction" id="slide-auctions-13"/>
                    <input type="radio" name="slides-auction" class="radio_auction" id="slide-auctions-14"/>
                
                    <ul class="slides-auctions">
                        <li class="slide slide-auction" id="image_auctions_0">
                            <img class="avatar" src="assets/Auctions/01-Active_listings_without_log_in.gif" alt="Project Auctions 1"/>
                            <h4 class="text-first-color">Active listings without log in</h4>
                            <h5>An unlogged user can view all the auctioned items, but cannot interact with them.</h5>
                        </li>
                        <li class="slide slide-auction hide" id="image_auctions_1">
                            <img class="avatar" src="assets/Auctions/02-Article_without_log_in.gif" alt="Project Auctions 2"/>
                            <h4 class="text-first-color">Access to articles without log in</h4>
                            <h5>You do not have permissions to add an item to your Watch List (favorites). You also cannot bid or ask a question about the item.</h5>
                        </li>
                        <li class="slide slide-auction hide" id="image_auctions_2">
                            <img class="avatar" src="assets/Auctions/03-Register.gif" alt="Project Auctions 3"/>
                            <h4 class="text-first-color">Register</h4>
                            <h5>In this section we can register our user, in order to have access to the aforementioned options.</h5>
                        </li>            
                        <li class="slide slide-auction hide" id="image_auctions_3">
                            <img class="avatar" src="assets/Auctions/04-Article_bike_logged_in_bigger_image.gif" alt="Project Auctions 4"/>
                            <h4 class="text-first-color">Access to article</h4>
                            <h5>When entering the auction of an item, we can see in more detail the image of it and its data.</h5>
                        </li>            
                        <li class="slide slide-auction hide" id="image_auctions_4">
                            <img class="avatar" src="assets/Auctions/05-Make_question.gif" alt="Project Auctions 5"/>
                            <h4 class="text-first-color">Make questions</h4>
                            <h5>We have the option to ask a question, which can only be answered by the creator of the auction of that item.</h5>
                        </li>            
                        <li class="slide slide-auction hide" id="image_auctions_5">
                            <img class="avatar" src="assets/Auctions/06-Place_bid.gif" alt="Project Auctions 6"/>
                            <h4 class="text-first-color">Place bid</h4>
                            <h5>If we are not the creator of the auction and the auction is still open, we may place a bid (higher than the current bid).</h5>
                        </li>            
                        <li class="slide slide-auction hide" id="image_auctions_6">
                            <img class="avatar" src="assets/Auctions/07-Add_to_watch_list.gif" alt="Project Auctions 7"/>
                            <h4 class="text-first-color">Add to watch list</h4>
                            <h5>In this way we save an auction in our Watch List (favorites).</h5>
                        </li>           
                        <li class="slide slide-auction hide" id="image_auctions_7">
                            <img class="avatar" src="assets/Auctions/08-Categories.gif" alt="Project Auctions 8"/>
                            <h4 class="text-first-color">Categories</h4>
                            <h5>The auctions are discriminated by categories, by which we can filter them.</h5>
                        </li>          
                        <li class="slide slide-auction hide" id="image_auctions_8">
                            <img class="avatar" src="assets/Auctions/09-Post_item.gif" alt="Project Auctions 9"/>
                            <h4 class="text-first-color">Post item</h4>
                            <h5>With this form we can load the data of the article that we want to auction (all fields must be completed).</h5>
                        </li>       
                        <li class="slide slide-auction hide" id="image_auctions_9">
                            <img class="avatar" src="assets/Auctions/10-Log_in_user_owner_of_auction.gif" alt="Project Auctions 10"/>
                            <h4 class="text-first-color">Log in user owner of auction</h4>
                            <h5>We log in with another user to be able to show the options that the creator of an auction has.</h5>
                        </li>       
                        <li class="slide slide-auction hide" id="image_auctions_10">
                            <img class="avatar" src="assets/Auctions/11-Answer_question.gif" alt="Project Auctions 11"/>
                            <h4 class="text-first-color">Answer question</h4>
                            <h5>Here we can see the option to answer a question that we have been asked about our auctioned item.</h5>
                        </li>       
                        <li class="slide slide-auction hide" id="image_auctions_11">
                            <img class="avatar" src="assets/Auctions/12-Close_auction.gif" alt="Project Auctions 12"/>
                            <h4 class="text-first-color">Close auction</h4>
                            <h5>The creator of the auction has the right to close the auction at any time.</h5>
                        </li>       
                        <li class="slide slide-auction hide" id="image_auctions_12">
                            <img class="avatar" src="assets/Auctions/13-Log_in_auction_winner.gif" alt="Project Auctions 13"/>
                            <h4 class="text-first-color">Log in auction winner</h4>
                            <h5>We change users again in order to expose what we will see when our offer is the winner of an auction.</h5>
                        </li>   
                        <li class="slide slide-auction hide" id="image_auctions_13">
                            <img class="avatar" src="assets/Auctions/14-Ipad_responsive.gif" alt="Project Auctions 14"/>
                            <h4 class="text-first-color">Tablet responsive</h4>
                            <h5>The entire page adapts perfectly to the size of tablet screens.</h5>
                        </li>   
                        <li class="slide slide-auction hide" id="image_auctions_14">
                            <img class="avatar" src="assets/Auctions/15-Mobile_responsive.gif" alt="Project Auctions 15"/>
                            <h4 class="text-first-color">Mobile responsive</h4>
                            <h5>The entire page adjusts perfectly to the size of mobile screens.</h5>
                        </li>
                    </ul>
                    <aside class="slides-nav">
                        <label for="slide-auctions-0" class="radio_dot" id="dot-auctions-0"></label>
                        <label for="slide-auctions-1" class="radio_dot" id="dot-auctions-1"></label>
                        <label for="slide-auctions-2" class="radio_dot" id="dot-auctions-2"></label>
                        <label for="slide-auctions-3" class="radio_dot" id="dot-auctions-3"></label>
                        <label for="slide-auctions-4" class="radio_dot" id="dot-auctions-4"></label>
                        <label for="slide-auctions-5" class="radio_dot" id="dot-auctions-5"></label>
                        <label for="slide-auctions-6" class="radio_dot" id="dot-auctions-6"></label>
                        <label for="slide-auctions-7" class="radio_dot" id="dot-auctions-7"></label>
                        <label for="slide-auctions-8" class="radio_dot" id="dot-auctions-8"></label>
                        <label for="slide-auctions-9" class="radio_dot" id="dot-auctions-9"></label>
                        <label for="slide-auctions-10" class="radio_dot" id="dot-auctions-10"></label>
                        <label for="slide-auctions-11" class="radio_dot" id="dot-auctions-11"></label>
                        <label for="slide-auctions-12" class="radio_dot" id="dot-auctions-12"></label>
                        <label for="slide-auctions-13" class="radio_dot" id="dot-auctions-13"></label>
                        <label for="slide-auctions-14" class="radio_dot" id="dot-auctions-14"></label>
                    </aside>
                
                </article>
                <div class="portfolio-info">
                    <h3>Project Auctions</h3>
                    <p>Design of an eBay-like e-commerce auction site that allows users to post auction listings,
                        bid on listings, comment on those listings, and add listings to a "watch list".
                        Technologies used for this project Python/Django, JS/React, CSS/SASS.</p>
                    <aside class="portfolio-details">
                        <small class="b-small">Client: </small>
                        <small>CS50 Harvard</small>
                        <small class="b-small">Link: </small>
                        <small><a href="https://rjmauctions.pythonanywhere.com/" target="_blank"
                            rel="noopener">https://rjmauctions.pythonanywhere.com/</a></small>
                    </aside>
                </div>
            </article>
        </div>

    )
}

function unLockScroll() {
    document.body.classList.remove("lock-scroll");
    document.body.classList.add("un-lock-scroll");
  
  }