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
            <input type="text" name="Search" class="feed__news-search-input" placeholder="Search Twitter">
        </div>
        <div class="feed__news-notice">
            <h1 class="feed__news-notice-title">What’s happening</h1>
            <div class="feed__news-card">
                <div class="feed__news-card-content">
                    <span class="feed__news-descript">COVID19 - Last night</span>
                    <div class="feed__news-notice-area">
                        <h3 class="feed__news-area-title">England’s Chief Medical Officer says the UK is 
                        at the most dangerous time of the pandemic</h3>
                        <img src="${newsOne}" alt="News" class="feed__news-area-img" />
                    </div>
                    <span class="feed__news-descript">Trending with <a href="/not-found.html" class="feed__news-thrend">#covid19</a></span>
                </div>    
            </div>
            <div class="feed__news-card">
                <div class="feed__news-card-content">
                    <span class="feed__news-descript">US news - 4h ago</span>
                    <div class="feed__news-notice-area">
                        <h3 class="feed__news-area-title">Parler may go offline following suspensions by Amazon,
                        Apple and Google</h3>
                        <img src="${newsTwo}" alt="News" class="feed__news-area-img" />
                    </div>
                    <span class="feed__news-descript">Trending with
                    <a href="/not-found.html" class="feed__news-thrend">#trump </a></span>
                </div>    
            </div>
            <div class="feed__news-card">
                <div class="feed__news-card-content">
                    <span class="feed__news-descript">India - 1h ago</span>
                    <div class="feed__news-notice-area">
                        <h3 class="feed__news-area-title">India vs Australia: India hold on to 
                        earn a draw on Day 5 in Sydney Test</h3>
                        <img src="${newsThree}" alt="News" class="feed__news-area-img" />
                    </div>
                    <span class="feed__news-descript">Trending with <a href="/not-found.html" class="feed__news-thrend">#sport</a></span>
                </div>    
            </div>
            <div class="feed__news-more">
            <a href="/not-found.html" class="feed__news-showmore">Show more</a>
            </div>
        </div>
        <div class="feed__news-follow">
            <h1 class="feed__news-notice-title">Who to follow</h1>
        <div class="feed__news-card-follow">    
            <div class="feed__news-card-follow-content">
                <div class="feed__news-follow-area">
                        <img src="${profileOne}" alt="News" class="feed__news-follow-img" />
                        <div class="feed__news-content-text">
                            <h3 class="feed__news-card-name">Bessie Cooper</h3>
                            <span class="feed__news-card-twitter">@alessandroveronezi</span>
                        </div>
                        <button class="feed__news-follow-btn">Follow</button>
                </div>
            </div>
        </div>
        <div class="feed__news-card-follow">    
            <div class="feed__news-card-follow-content">
                <div class="feed__news-follow-area">
                        <img src="${profileTwo}" alt="News" class="feed__news-follow-img" />
                        <div class="feed__news-content-text">
                            <h3 class="feed__news-card-name">Jenny Wilson</h3>
                            <span class="feed__news-card-twitter">@gabrielcantarin</span>
                        </div>
                        <button class="feed__news-follow-btn">Follow</button>
                </div>
            </div>
        </div>
            <div class="feed__news-more">
            <a href="/not-found.html" class="feed__news-showmore">Show more</a>
            </div>
        </div>
        <div class="feed__news-term">
            <span class="feed__news-term-text">Terms of Service Privacy Policy Cookie Policy
            Ads info More © 2021 Twitter, Inc.</span>
        </div>
    </div>
    `
}