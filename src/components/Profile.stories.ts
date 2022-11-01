export default {
    title: 'Components/Profile'
}

export const ProfileTwitter = () => {
    return `
        <div class="menu__side-profile">
        <img src="/src/img/profile-img.png" alt="Profile" class="profile-img">
        <div class="profile-socials">
            <h3 class="profile-socials-name">Matheus Victor</h3>
            <span class="profile-socials-twitter">@mvictor</span>
        </div>
        <i class="fa-solid fa-ellipsis" role="button"></i>
        </div>
    `
}

export const ProfileHowToFollow = () => {
    return `
        <div class="feed__news-card-follow">    
        <div class="feed__news-card-follow-content">
            <div class="feed__news-follow-area">
                    <img src="/src/img/Profile-Picture.svg" alt="News" class="feed__news-follow-img">
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
                    <img src="/src/img/Profile-Picture-2.svg" alt="News" class="feed__news-follow-img">
                    <div class="feed__news-content-text">
                        <h3 class="feed__news-card-name">Jenny Wilson</h3>
                        <span class="feed__news-card-twitter">@gabrielcantarin</span>
                    </div>
                    <button class="feed__news-follow-btn">Follow</button>
            </div>
        </div>
        </div>
    `
}