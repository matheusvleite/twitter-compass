import { feed } from './components/feed.js'
import { sideMenu } from './components/side-menu.js'
import { postTweet } from './components/post-tweet.js';
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
postTweet(document.querySelector<HTMLButtonElement>('#form-tweet')!);

