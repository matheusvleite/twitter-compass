export default {
    title: 'Components/Noticies'
}

export const FeedNoticiesCard = () => {
    return `
        <div class="feed__news-notice">
        <div class="feed__news-card">
            <div class="feed__news-card-content">
                <span class="feed__news-descript">COVID19 - Last night</span>
                <div class="feed__news-notice-area">
                    <h3 class="feed__news-area-title">England’s Chief Medical Officer says the UK is 
                    at the most dangerous time of the pandemic</h3>
                    <img src="/src/img/news-1.svg" alt="News" class="feed__news-area-img">
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
                    <img src="/src/img/news-2.svg" alt="News" class="feed__news-area-img">
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
                    <img src="/src/img/news-3.svg" alt="News" class="feed__news-area-img">
                </div>
                <span class="feed__news-descript">Trending with <a href="/not-found.html" class="feed__news-thrend">#sport</a></span>
            </div>    
        </div>
        </div>
    `
}