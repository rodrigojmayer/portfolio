// const { Fragment } = require("react");
// import {useEffect} from 'react';
let modal 
let prev_project1 = document.getElementById("prev_project_1") // wiki
let prev_project2 = document.getElementById("prev_project_2") // auction s
let prev_project3 = document.getElementById("prev_project_3") // mail
let prev_project4 = document.getElementById("prev_project_4") // network

prev_project1.addEventListener("click", (e)=>{     
    modal = document.getElementById("project-1")
    ReactDOM.render(<Modal />, modal);
    document.getElementById('vid-wiki0').play();
}, { once: true })
prev_project2.addEventListener("click", (e)=>{     
    modal = document.getElementById("project-2")
    ReactDOM.render(<Modal />, modal);
    document.getElementById('vid-auction0').play();
}, { once: true })
prev_project3.addEventListener("click", (e)=>{     
    modal = document.getElementById("project-3")
    ReactDOM.render(<Modal />, modal);
    document.getElementById('vid-mail0').play();
}, { once: true })

prev_project4.addEventListener("click", (e)=>{     
    modal = document.getElementById("project-4")
    ReactDOM.render(<Modal />, modal);
    document.getElementById('vid-network0').play();
}, { once: true })       

function Modal(){
    let num_array = new Array, project = "", projects = "", folder = "", images = new Array, title = "", client = "", description_eng = "", description_esp = "", link = ""

        // do stuff here...
        // console.log(modal.id)
        // console.log("entrando al react")
        if (modal.id == "project-1") {
            // const slides = new Array(15)
            num_array = Array.from(Array(7).keys())
            project = "wiki"
            projects = "wiki"
            folder = "Wiki"
            images = [
                { src: '01-Index_page',     h4_eng: 'Index page',   h5_eng: 'User can click on any entry name to be taken directly to that entry page.',                                h4_esp: 'Página de inicio',     h5_esp: 'El usuario puede hacer clic en cualquier nombre de entrada para ir directamente a esa página de entrada.' },
                { src: '02-New_page',       h4_eng: 'New page',     h5_eng: 'Form to enter the title and the content of the wiki page we want to create.',                              h4_esp: 'Nueva página',         h5_esp: 'Formulario para introducir el título y el contenido de la página wiki que queremos crear.' },
                { src: '03-Entry_page',     h4_eng: 'Entry page',   h5_eng: 'Render the page that displays the contents of that encyclopedia entry.',                                   h4_esp: 'Página de entrada',    h5_esp: 'Renderiza la página que muestra el contenido de esa entrada de la enciclopedia.' },
                { src: '04-Edit_page',      h4_eng: 'Edit page',    h5_eng: 'The user can edit any entry page.',                                                                        h4_esp: 'Página de edición',    h5_esp: 'El usuario puede editar cualquier página de entrada.' },
                { src: '05-Random_page',    h4_eng: 'Random page',  h5_eng: 'Takes us to any aleatory page.',                                                                           h4_esp: 'Página aleatoria',     h5_esp: 'Nos lleva a cualquier página aleatoria.' },
                { src: '06-Search',         h4_eng: 'Search',       h5_eng: 'Allow the user to type a query into the search box in the sidebar to search for an encyclopedia entry.',   h4_esp: 'Búsqueda',             h5_esp: 'Permite que el usuario escriba una consulta en el cuadro de búsqueda en la barra lateral para buscar una entrada de la enciclopedia.' },
                { src: '07-Not_found',      h4_eng: 'Not found',    h5_eng: 'Page error when there is no match in the search.',                                                         h4_esp: 'No encontrada',        h5_esp: 'Error de página cuando no hay coincidencia en la búsqueda.' }
            ]
            title = 'Wiki'
            client = 'CS50 Harvard'
            description_eng = `Design of a Wikipedia-like online encyclopedia that anyone can edit. When entering the page we can see the options bar on the left. "Search Encyclopedia" to filter the names of the Entry-pages, and if you do not find what you are looking for, the option to load it. "Home" to return to the index page where we see the complete list of Entry-pages. To edit, we have to enter the one we want and there we will see the "Edit" option. "Create New Page" will allow us to load a new Entry-page. And finally, "Random Page" to randomly open one of these.`
            description_esp = `Diseño de una enciclopedia en línea similar a Wikipedia que cualquiera puede editar. Al ingresar a la página podemos ver la barra de opciones a la izquierda. "Buscar en Enciclopedia" para filtrar los nombres de las Entry-pages, y si no encuentras lo que buscas, la opción de cargarlo. "Inicio" para volver a la página de índice donde vemos la lista completa de páginas de entrada. Para editar, tenemos que ingresar el que queramos y allí veremos la opción "Editar". "Crear nueva página" nos permitirá cargar una nueva página de entrada. Y finalmente, "Página aleatoria" para abrir aleatoriamente uno de estos.`
            link = 'https://rodrigojmayer.pythonanywhere.com/'
        }
        if (modal.id == "project-2") {
            // const slides = new Array(15)
            num_array = Array.from(Array(15).keys())
            project = "auction"
            projects = "auctions"
            folder = "Auctions"
            images = [
                { src: '01-Active_listings_without_log_in',         h4_eng: 'Auctions listing without log in',       h5_eng: 'An unlogged user can view all the auctioned items, but cannot interact with them.',                                               h4_esp: 'Active listings without log in',                   h5_esp: 'Un usuario no registrado puede ver todos los artículos subastados, pero no puede interactuar con ellos.' },
                { src: '02-Article_without_log_in',                 h4_eng: 'Access to articles without log in',    h5_eng: 'You do not have permissions to add an item to your Watch List (favorites). You also cannot bid or ask a question about the item.', h4_esp: 'Acceso a los artículos sin iniciar sesión',        h5_esp: 'No tiene permisos para agregar un elemento a su lista de vigilancia (favoritos). Tampoco puede ofertar o hacer una pregunta sobre el artículo.' },
                { src: '03-Register',                               h4_eng: 'Register',                             h5_eng: 'In this section we can register our user, in order to have access to the aforementioned options.',                                 h4_esp: 'Registro',                                         h5_esp: 'En esta sección podemos registrar a nuestro usuario, para tener acceso a las opciones antes mencionadas.' },
                { src: '04-Article_bike_logged_in_bigger_image',    h4_eng: 'Access to article',                    h5_eng: 'When entering the auction of an item, we can see in more detail the image of it and its data.',                                    h4_esp: 'Acceso al artículo',                               h5_esp: 'Al entrar en la subasta de un artículo, podemos ver con más detalle la imagen del mismo y sus datos.' },
                { src: '05-Make_question',                          h4_eng: 'Make questions',                       h5_eng: 'We have the option to ask a question, which can only be answered by the creator of the auction of that item.',                     h4_esp: 'Hacer preguntas',                                  h5_esp: 'Tenemos la opción de hacer una pregunta, que solo puede ser respondida por el creador de la subasta de ese artículo.' },
                { src: '06-Place_bid',                              h4_eng: 'Place bid',                            h5_eng: 'If we are not the creator of the auction and the auction is still open, we may place a bid (higher than the current bid).',        h4_esp: 'Hacer oferta',                                     h5_esp: 'Si no somos los creadores de la subasta y la subasta aún está abierta, podemos realizar una oferta (superior a la oferta actual).' },
                { src: '07-Add_to_watch_list',                      h4_eng: 'Add to watch list',                    h5_eng: 'In this way we save an auction in our Watch List (favorites).',                                                                    h4_esp: 'Añadir a lista de seguimiento',                    h5_esp: 'De esta forma guardamos una subasta en nuestra Watch List (favoritos).' },
                { src: '08-Categories',                             h4_eng: 'Categories',                           h5_eng: 'The auctions are discriminated by categories, by which we can filter them.',                                                       h4_esp: 'Categorías',                                       h5_esp: 'Las subastas están discriminadas por categorías, por las cuales podemos filtrarlas.' },
                { src: '09-Post_item',                              h4_eng: 'Post item',                            h5_eng: 'With this form we can load the data of the article that we want to auction (all fields must be completed).',                       h4_esp: 'Publicar elemento',                                h5_esp: 'Con este formulario podemos cargar los datos del artículo que queremos subastar (todos los campos son obligatorios).' },
                { src: '10-Log_in_user_owner_of_auction',           h4_eng: 'Log in user owner of auction',         h5_eng: 'We log in with another user to be able to show the options that the creator of an auction has.',                                   h4_esp: 'Iniciar sesión usuario propietario de la subasta', h5_esp: 'Iniciamos sesión con otro usuario para poder mostrar las opciones que tiene el creador de una subasta.' },
                { src: '11-Answer_question',                        h4_eng: 'Answer question',                      h5_eng: 'Here we can see the option to answer a question that we have been asked about our auctioned item.',                                h4_esp: 'Responder pregunta',                               h5_esp: 'Aquí podemos ver la opción de responder a una pregunta que nos han hecho sobre nuestro artículo subastado.' },
                { src: '12-Close_auction',                          h4_eng: 'Close auction',                        h5_eng: 'The creator of the auction has the right to close the auction at any time.',                                                       h4_esp: 'Cerrar subasta',                                   h5_esp: 'El creador de la subasta tiene derecho a cerrar la subasta en cualquier momento.' },
                { src: '13-Log_in_auction_winner',                  h4_eng: 'Log in auction winner',                h5_eng: 'We change users again in order to expose what we will see when our offer is the winner of an auction.',                            h4_esp: 'Iniciar sesión ganador de la subasta',             h5_esp: 'Volvemos a cambiar de usuario para exponer lo que veremos cuando nuestra oferta resulte ganadora de una subasta.' },
                { src: '14-Ipad_responsive',                        h4_eng: 'Tablet responsive',                    h5_eng: 'The entire page adapts perfectly to the size of tablet screens.',                                                                  h4_esp: 'Despliegue responsivo en tableta',                 h5_esp: 'Toda la página se adapta perfectamente al tamaño de las pantallas de las tabletas.' },
                { src: '15-Mobile_responsive',                      h4_eng: 'Mobile responsive',                    h5_eng: 'The entire page adjusts perfectly to the size of mobile screens.',                                                                 h4_esp: 'Despliegue responsivo en móvil',                   h5_esp: 'Toda la página se ajusta perfectamente al tamaño de las pantallas de los móviles.' }
            ]
            title = 'Auction'
            client = 'CS50 Harvard'
            description_eng = `Design of an eBay-like e-commerce auction site that allows users to post auction listings, bid on listings, comment on those listings, and add listings to a "watch list". Technologies used for this project Python/Django, JS/React, CSS/SASS.`
            description_esp = `Diseño de un sitio de comercio electrónico para subastas similar a eBay, que permite a los usuarios subastar artículos, ofertar por artículos subastados, hacer preguntas sobre esos artículos y agregar listados a una "lista de vigilancia". Tecnologías utilizadas para este proyecto Python/Django, JS/React, CSS/SASS.`
            link = 'https://rjmauctions.pythonanywhere.com/'
        }
        if (modal.id == "project-3") {
            // const slides = new Array(15)
            num_array = Array.from(Array(12).keys())
            project = "mail"
            projects = "mail"
            folder = "RJMail"
            images = [
                { src: '01-Sign_up_page',       h4_eng: 'Sign up page',         h5_eng: 'Enables users to independently register and gain access to the e-mail system.',                                            h4_esp: 'Página de registro',               h5_esp: 'Permite a los usuarios registrarse de forma independiente y obtener acceso al sistema de correo electrónico.' },
                { src: '02-Basic_login_page',   h4_eng: 'Basic login page',     h5_eng: 'This is a general layout of a common login screen. A user can input the username and the password together to log in.',    h4_esp: 'Página de inicio de sesión',       h5_esp: 'Este es un diseño general de una pantalla de inicio de sesión común. Un usuario puede ingresar el nombre de usuario y la contraseña juntos para iniciar sesión.' },
                { src: '03-Inbox',              h4_eng: 'Inbox',                h5_eng: 'The default repository for all incoming mail.',                                                                            h4_esp: 'Bandeja de entrada',               h5_esp: 'El repositorio predeterminado para todo el correo entrante.' },
                { src: '04-Search',             h4_eng: 'Search',               h5_eng: 'Function to filter by a sentence the emails of the current section.',                                                      h4_esp: 'Búsqueda',                         h5_esp: 'Función para filtrar por una frase los correos electrónicos de la sección actual.' },
                { src: '05-Archived',           h4_eng: 'Archived',             h5_eng: 'You can archive your emails. In that case they are moved to the "Archived" page.',                                         h4_esp: 'Archivado',                        h5_esp: 'Puede archivar sus correos electrónicos. En ese caso, se mueven a la página "Archivado".' },
                { src: '06-Compose',            h4_eng: 'Compose',              h5_eng: 'This is the form to create and send a new email.',                                                                         h4_esp: 'Componer',                         h5_esp: 'Este es el formulario para crear y enviar un nuevo correo electrónico.' },
                { src: '07-Email_view',         h4_eng: 'Email view',           h5_eng: 'Open an email to see all the information about it. You can also reply to it or archive it.',                               h4_esp: 'Vista de correo electrónico',      h5_esp: 'Abre un correo electrónico para ver su contenido. Desde aquí puede responderlo y/o archivarlo.' },  
                { src: '08-Email_replay',       h4_eng: 'Email reply',          h5_eng: 'To answer to received emails.',                                                                                            h4_esp: 'Respuesta de correo electrónico',  h5_esp: 'Para responder a los correos electrónicos recibidos.' },      
                { src: '09-Sent_emails',        h4_eng: 'Sent emails',          h5_eng: 'Here you can find all your sent emails.',                                                                                  h4_esp: 'Correos electrónicos enviados',    h5_esp: 'Aquí están todos los correos electrónicos enviados.' },        
                { src: '10-Sent_email',         h4_eng: 'Sent email',           h5_eng: 'To see the contain of an old sent email.',                                                                                 h4_esp: 'Email enviado',                    h5_esp: 'Para ver el contenido de un correo antiguo enviado.' },
                { src: '11-Tablet_responsive',  h4_eng: 'Tablet responsive',    h5_eng: 'The entire page adapts perfectly to the size of tablet screens.',                                                          h4_esp: 'Despliegue responsivo en tableta', h5_esp: 'Toda la página se adapta perfectamente al tamaño de las pantallas de las tabletas.' }, 
                { src: '12-Mobile_responsive',  h4_eng: 'Mobile responsive',    h5_eng: 'The entire page adjusts perfectly to the size of mobile screens.',                                                         h4_esp: 'Despliegue responsivo en móvil',   h5_esp: 'Toda la página se ajusta perfectamente al tamaño de las pantallas de los móviles.' }
            ]
            title = 'Mail'
            client = 'CS50 Harvard'
            description_eng = `Design of the front-end and back-end for an internal email client that makes API calls. Once you're signed in, you should see yourself taken to the Inbox page of the mail client, though this page is mostly blank (for now). Click the buttons to navigate to your Sent and Archived mailboxes, and notice how those, too, are currently blank. Click the “Compose” button, and you'll be taken to a form that will let you compose a new email. Each time you click a button, though, you're not being taken to a new route or making a new web request: instead, this entire application is just a single page, with JavaScript used to control the user interface.`
            description_esp = `Diseño del front-end y back-end de un correo electrónico de uso interno que funciona mediante utilizando APIs. Una vez que haya iniciado sesión, debería verse llevado a la página de la bandeja de entrada del cliente de correo, aunque esta página está casi en blanco (por ahora). Haga clic en los botones para navegar a sus buzones de correo Enviados y Archivados, y observe cómo estos también están actualmente en blanco. Haga clic en el botón "Redactar" y accederá a un formulario que le permitirá redactar un nuevo correo electrónico. Sin embargo, cada vez que hace clic en un botón, no lo llevan a una nueva ruta ni realiza una nueva solicitud web: en cambio, toda la aplicación es solo una página, con JavaScript utilizado para controlar la interfaz de usuario.`
            link = 'https://rjmayl.herokuapp.com/'
        }
        if (modal.id == "project-4") {
            // const slides = new Array(15)
            num_array = Array.from(Array(14).keys())
            project = "network"
            projects = "network"
            folder = "RJMNetwork"
            images = [
                { src: '01-Main_page_unlogged', h4_eng: 'Main page unlogged',   h5_eng: 'Home page before logging in. You can view all existing posts, but not interact with them.',                            h4_esp: 'Página principal sin inicio de sesión',    h5_esp: 'Página de inicio antes de iniciar sesión. Puede ver todas las publicaciones existentes, pero no interactuar con ellas.' },
                { src: '02-Sign_up',            h4_eng: 'Sign up page',         h5_eng: 'It allows users to register and gain access to the network.',                                                          h4_esp: 'Página de registro',                       h5_esp: 'Permite a los usuarios registrarse y obtener acceso a interactual en la página web.' },
                { src: '03-Main_page_logged',   h4_eng: 'Main page logged',     h5_eng: 'Home page after logging in. Now you can interact with all the posts.',                                                 h4_esp: 'Página principal iniciada sesión',         h5_esp: 'Página de inicio después de iniciar sesión. Ahora puedes interactuar con todas las publicaciones.' },
                { src: '04-Create_new_post',    h4_eng: 'Create new post',      h5_eng: 'Modal to create a post.',                                                                                              h4_esp: 'Crear nueva publicación',                  h5_esp: 'Modal para crear una publicación.' },
                { src: '05-Profile_logged',     h4_eng: 'User profile page',    h5_eng: 'Here you can see all your posts, the number of followers and followings you have, and acces to edit your profile.',    h4_esp: 'Página de perfil del usuario',             h5_esp: 'Aquí puedes ver todas tus publicaciones, el número usuarios que te siguen y que sigues, y acceder a editar tu perfil.' },
                { src: '06-Edit_profile',       h4_eng: 'Edit profile logged',  h5_eng: 'Modal to change username, email address, password and the profile picture.',                                           h4_esp: 'Editar perfil registrado',                 h5_esp: 'Modal para cambiar el nombre de usuario, la dirección de correo electrónico, la contraseña y la foto de perfil.' },
                { src: '07-Edit_post',          h4_eng: 'Edit post',            h5_eng: 'You can edit your own posts.',                                                                                         h4_esp: 'Editar publicación',                       h5_esp: 'Puedes editar tus propias publicaciones.' },
                { src: '08-Users_difference',   h4_eng: 'Users difference',     h5_eng: 'Users with the same first letter will have a different profile picture by default.',                                   h4_esp: 'Diferenciar usuarios',                     h5_esp: 'Los usuarios con la misma primera letra tendrán una foto de perfil diferente por defecto.' },
                { src: '09-Login_page',         h4_eng: 'Login page',           h5_eng: 'Common login screen. A user can input their username and password to login.',                                          h4_esp: 'Página inicio sesion',                     h5_esp: 'Pantalla de inicio de sesión común. Un usuario puede ingresar su nombre de usuario y contraseña para iniciar sesión.' },
                { src: '10-Followed_users',     h4_eng: 'Followed Users',       h5_eng: 'On this page you can see the posts of all the users you follow.',                                                      h4_esp: 'Usuarios seguidos',                        h5_esp: 'En esta página puedes ver las publicaciones de todos los usuarios que sigues.' },
                { src: '11-Liked_posts',        h4_eng: 'Liked posts',          h5_eng: 'On this page you can see all the posts you liked.',                                                                    h4_esp: 'Publicaciones que han gustado',            h5_esp: 'En esta página puedes ver todas las publicaciones que te gustaron.' },
                { src: '12-Search',             h4_eng: 'Search',               h5_eng: 'Search will filter the posts you are looking for.',                                                                    h4_esp: 'Búsqueda',                                 h5_esp: 'Filtrará las publicaciones que está buscando.' },
                { src: '13-Tablet',             h4_eng: 'Tablet responsive',    h5_eng: 'The entire page adapts perfectly to the size of tablet screens.',                                                      h4_esp: 'Despliegue responsivo en tableta',         h5_esp: 'Toda la página se adapta perfectamente al tamaño de las pantallas de las tabletas.' },
                { src: '14-Mobile',             h4_eng: 'Mobile responsive',    h5_eng: 'The entire page adjusts perfectly to the size of mobile screens.',                                                     h4_esp: 'Despliegue responsivo en móvil',           h5_esp: 'Toda la página se ajusta perfectamente al tamaño de las pantallas de los móviles.' }
            ]
            title = 'Network'
            client = 'CS50 Harvard'
            description_eng = `Design of a Twitter-like social network website for making posts and following users. Once you're signed in, you should see all the posts in the main page. At the bottom we have the menu bar with the five options (Home, Search, Following, Liked and Profile). Over the menu bar, floating to the right of the page is the button to create posts. You can give a like to the post you want, as well as follow the users you prefer, and so you will have these posts on the Like and Following pages respectively. You are also enabled to edit your posts and your profile data. You can select an image for your user, but in case you don't want to, the first letter of your username will represent your posts, with a random color to distinguish it from other users with the same first letter.`
            description_esp = `Diseño de un sitio web de red social similar a Twitter para hacer publicaciones y seguir a los usuarios. Una vez que haya iniciado sesión, debería ver todas las publicaciones en la página principal. En la parte inferior tenemos la barra de menú con las cinco opciones (Inicio, Buscar, Siguiendo, Me gusta y Perfil). Sobre la barra de menú, flotando a la derecha de la página está el botón para crear publicaciones. Puede darle a me gusta a la publicación que quieras, así como seguir a los usuarios que prefieras, y así tendrás estas publicaciones en las páginas de Me Gusta y Siguiendo respectivamente. También puede editar sus publicaciones y los datos de su perfil. Puede seleccionar una imagen para su usuario, o dejar por defecto la primera letra de su nombre de usuario, con un color aleatorio para distinguirlo de otros usuarios que empiecen con la misma letra.`
            link = 'https://rjmnetwork.herokuapp.com/'
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
                                {/* <img class="avatar" src={'assets/' + folder + '/' + image.src + '.gif'} alt={'Project ' + title + ' ' + index+1}/> */}
                                <video id={'vid-' + project + index} class="avatar" src={'assets/' + folder + '/' + image.src + '.webm'} alt={'Project ' + title + ' ' + index+1}   controls playsinline autoplay muted loop >
                                    <source src={'assets/' + folder + '/' + image.src + '.webm'} type="video/webm" />
                                </video>
                                {/* <img class="avatar" src={'assets/' + folder + '/' + image.src +  (index == 0 ? '.webm' : '.gif')} alt={'Project ' + title + ' ' + index+1}/> */}


 
                                <h4 class="text-first-color english hide">{image.h4_eng}</h4>
                                <h4 class="text-first-color espaniol">{image.h4_esp}</h4>
                                <h5 class="english hide">{image.h5_eng}</h5>
                                <h5 class="espaniol">{image.h5_esp}</h5>
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

                    <h3 class="english hide">Project {title}</h3>
                    <h3 class="espaniol">Proyecto {title}</h3>
                    <p class="english hide"> {description_eng} </p>
                    <p class="espaniol"> {description_esp} </p>
                    <aside class="portfolio-details">
                        <small class="b-small english hide">Client: </small>
                        <small class="b-small espaniol">Cliente: </small>
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

