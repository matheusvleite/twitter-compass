import newsOne from '../img/news-1.svg'
import newsTwo from '../img/news-2.svg'
import newsThree from '../img/news-3.svg'
import profileOne from '../img/Profile-Picture.svg'
import profileTwo from '../img/Profile-Picture-2.svg'

export function feedNews(): string {
    return `
    <div class="content">
        <div class="feed__news-search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" name="Search" placeholder="Search Twitter">
        </div>
        <div class="feed__news-notice">
            <div class="feed__news-card">
                <h2 class="feed__news-notice-title">What’s happening</h2>
                    <span class="feed__news-descript">COVID19 - Last night</span>
                    <div class="feed__news-notice-area">
                    <h3 class="feed__news-area-title">England’s Chief Medical Officer says the UK is 
                    at the most dangerous time of the pandemic</h3>
                    <img src="${newsOne}" alt="News" class="feed__news-area-img" />
                    </div>
                    <span class="feed__news-descript">Trending with <a href="/not-found.html" class="feed__news-thrend">#covid19</a></span>
                </div>
            <div class="feed__news-card">
                <span class="feed__news-descript">US news - 4h ago</span>
                <div class="feed__news-notice-area">
                <h3 class="feed__news-area-title">Parler may go offline following suspensions by Amazon, Apple and Google</h3>
                <img src="${newsTwo}" alt="News" class="feed__news-area-img" />
                </div>
                <span class="feed__news-descript">Trending with <a href="/not-found.html" class="feed__news-thrend">#trump</a></span>
            </div>
            <div class="feed__news-card">
                <span class="feed__news-descript">India - 1h ago</span>
                <div class="feed__news-notice-area">
                <h3 class="feed__news-area-title">India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test</h3>
                <img src="${newsThree}" alt="News" class="feed__news-area-img" />
                </div>
                <span class="feed__news-descript">Trending with <a href="/not-found.html" class="feed__news-thrend">#sport</a></span>
            </div>
            <a href="/not-found.html" class="feed__news-showmore">Show more</a>
        </div>

        <div class="feed__news-follow">
        <div class="feed__news-card-follow">
            <h2 class="feed__news-notice-title">Who to follow</h2>
            <div class="feed__news-card-area">
                <img src="${profileOne}" alt="News" class="feed__news-follow-img" />
                <div>
                <h3 class="feed__news-card-name">Bessie Cooper</h3>
                <span class="feed__news-card-twitter">@alessandroveronezi</span>
                </div>
                <button class="feed__news-follow">Follow</button>
            </div>
        </div>
        <div class="feed__news-card-follow">
            <div class="feed__news-card-area">
                <img src="${profileTwo}" alt="News" class="feed__news-follow-img" />
                <div>
                <h3 class="feed__news-card-name">Jenny Wilson</h3>
                <span class="feed__news-card-twitter">@gabrielcantarin</span>
                </div>
                <button class="feed__news-follow">Follow</button>
            </div>
        </div>
            <a href="/not-found.html" class="feed__news-showmore">Show more</a>
        </div>

        <span class="feed__news-term">Terms of Service Privacy Policy Cookie Policy
        Ads info More © 2021 Twitter, Inc.</span>
    </div>
    `
}