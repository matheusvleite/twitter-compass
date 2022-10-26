import { feed } from './components/feed.js'
import { sideMenu } from './components/side-menu.js'
import { postTweet } from './components/post-tweet.js';
import './css/style.css'
import { feedNews } from './components/feed-news.js';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="container">
        ${sideMenu()}
        ${feed()}
        ${feedNews()}
    </div>
`
postTweet(document.querySelector<HTMLButtonElement>('#form-tweet')!);

