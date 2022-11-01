import { feed } from './components/feed.js';
import { sideMenu } from './components/side-menu.js';
import './css/style.css';
import { feedNews } from './components/feed-news.js';
import { footerNav } from './components/footer.js';
import { view } from './components/view.js';
import { post } from './components/interfaces/post.js';
import { getLocal, updateLocalStorage } from './components/localstorage.js';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="container container-xl">
        ${sideMenu()}
        ${feed()}
        ${feedNews()}
        ${footerNav()}
    </div>
`

// GET ELEMENTS

const buttonFocus = document.querySelector<HTMLButtonElement>('.menu__side-btn')!; // BUTTON SIDEBAR MENU LEFT
const textArea = document.querySelector<HTMLInputElement>('#tweet')!; // INPUT TEXTAREA
const fileArea: HTMLInputElement | any = document.querySelector('#file-image'); // INPUT FILE
const form = document.querySelector<HTMLElement>('#form-tweet')!;
const viewFeed = document.querySelector<HTMLDivElement>('#view')!;


// VARIABLES

const CLIENT_ID: string = '4ce2a6c0ddba9b6';

let postContent: post[] = [] = JSON.parse(getLocal()!) || [];

// FUNCTIONS


function save(text: string, date: Date , url: string) {

    postContent.unshift({text, date, url});
    
    view(postContent);
    
    update();

    updateLocalStorage(postContent);

}

update();


function update() {
    
    let template = view(postContent);
    
    viewFeed.innerHTML = template;

}

function clearForm() { // CLEAR FORM
    textArea.value = '';
    fileArea.value = '';
}

// EVENTS

form.addEventListener('submit', (e) => { // SUBMIT FORM
    e.preventDefault();

    const textAreaValue: string = textArea.value;
    const datePost: Date = new Date();

    const data = new FormData(); // FORMDATA TO GET IMAGE IN API
    data.append('image', fileArea.files[0]);

    fetch('https://api.imgur.com/3/image', { // API UPLOAD IMAGE
        method: 'POST',
        headers: {
            'Authorization': `Client-ID ${CLIENT_ID}`
        },
        body: data
    })
        .then(data => data.json())
        .then(data => save(textAreaValue, datePost, data.data.link)); // PASSING PARAMETERS FOR FUNCTION VIEW
        clearForm(); // CLEAR FORM
        
})

buttonFocus.addEventListener('click', () => { // BUTTON TWEET IN SIDE MENU LEFT TO FOCUS IN INPUT TEXT AREA
    textArea.focus();
})


