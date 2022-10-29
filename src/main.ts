import { feed } from './components/feed.js';
import { sideMenu } from './components/side-menu.js';
import './css/style.css';
import { feedNews } from './components/feed-news.js';
import { footerNav } from './components/footer.js';


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

interface post {
    text: string,
    date: Date,
    url: string
}

let postContent: post[] = [];

// FUNCTIONS

function save(text: string, date: Date, url: string) {
    postContent.push({text, date, url})
    
    view(postContent);

    update()
}

function update() {
    let teste = view(postContent)
    
    viewFeed.innerHTML = teste;
}



function view(postContent: post[]) {
    return postContent.map(item => {
        return  `
        <div class="tweet__card">
        <div class="tweet__header">
            <img src="/src/img/profile-img.png" alt="" class="feed-img">
            <div class="tweet__header-info">
                <span>Matheus Victor</span> <span class="tweet__header-id">@mvictor</span><span class="tweet__header-id"> ${item.date}</span>
            <p class="tweet__descrpt">${item.text}</p>
            
        </div>
        </div>
        <div class="tweet__header-img">
            <img src="${item.url}" alt="Tweet Img" class="tweet-img">
        </div>
        <div class="tweet__info-counts">
            <div class="tweet__info-content">
            <i class="fa-regular fa-comment"></i>
            <div class="count">33</div>
        </div>
        <div class="tweet__info-content">
            <i class="fa-solid fa-retweet"></i>
            <div class="count">397</div>
        </div>
        <div class="tweet__info-content">
            <i class="fa-regular fa-heart"></i>
            <div class="count">
            2.6k
            </div>
        </div>
        <div class="tweet__info-content">
            <i class="fa-regular fa-folder"></i>
            <div class="count">
            2.6k
            </div>
        </div>
        </div>
        </div>
        `
    }).join('')


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
        method: 'post',
        body: data,
        headers: {
            'Authorization': `Client-ID ${CLIENT_ID}`
        }
    })
        .then(data => data.json())
        .then(data => save(textAreaValue, datePost,data.data.link)); // PASSING PARAMETERS FOR FUNCTION VIEW
        clearForm(); // CLEAR FORM
        
})

buttonFocus.addEventListener('click', () => { // BUTTON TWEET IN SIDE MENU LEFT TO FOCUS IN INPUT TEXT AREA
    textArea.focus();
})


