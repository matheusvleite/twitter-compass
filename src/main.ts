import { feed } from './components/feed.js'
import { sideMenu } from './components/side-menu.js'
import './css/style.css'
import { feedNews } from './components/feed-news.js';
import { footer } from './components/footer.js';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="container container-xl">
        ${sideMenu()}
        ${feed()}
        ${feedNews()}
        ${footer()}
    </div>
`

// GET ELEMENTS

const buttonFocus = document.querySelector<HTMLButtonElement>('.menu__side-btn')!;
const textArea = document.querySelector<HTMLInputElement>('#tweet')!;
const fileArea: any = document.querySelector<HTMLInputElement>('#file-image');
const form = document.querySelector<HTMLElement>('#form-tweet')!;

// VARIABLES

const CLIENT_ID: string = '4ce2a6c0ddba9b6';

// FUNCTIONS


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const textAreaValue: string = textArea.value;
    const datePost: Date = new Date();

    const data = new FormData();
    data.append('image', fileArea.files[0])

    fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        headers: {
            'Authorization': `Client-ID ${CLIENT_ID}`,
        },
        body: data,
    })
        .then(data => data.json())
        .then(console.log)


})

buttonFocus.addEventListener('click', () => {
    textArea.focus();
})


