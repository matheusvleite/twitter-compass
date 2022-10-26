import { feed } from './components/feed.js'
import { sideMenu } from './components/side-menu.js'
import { postTweet } from './components/post-tweet.js';
import './css/style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${sideMenu()}
    ${feed()}
`
postTweet(document.querySelector<HTMLButtonElement>('#form-tweet')!);

