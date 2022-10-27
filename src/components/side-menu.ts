import twitterLogo from '../img/Logotwitter.svg'
import profileImg from '../img/profile-img.png'

export function sideMenu(): string {
    return `
    <div class="content">
        <nav class="menu__side">
            <ul class"menu__side-list">
                <li class="side__list-item">
                    <img src="${twitterLogo}" alt="TwitterLogo" class="logo-img"/>
                </li>
                <li class="side__list-item fa-sx active">
                    <i class="fa-solid fa-house-user fa-lg"></i>
                    <a href="#" class="side__list-item-link active">Home</a>
                </li>
                <li class="side__list-item">
                    <i class="fa-regular fa-hashtag fa-lg"></i>
                    <a href="/not-found.html" class="side__list-item-link">Explore</a>
                </li>
                <li class="side__list-item">
                    <i class="fa-regular fa-bell fa-lg"></i>
                    <a href="/not-found.html" class="side__list-item-link">Notifications</a>
                </li>
                <li class="side__list-item">
                    <i class="fa-regular fa-envelope fa-lg"></i>
                    <a href="/not-found.html" class="side__list-item-link">Messages</a> 
                </li>
                <li class="side__list-item">
                    <i class="fa-regular fa-bookmark fa-lg"></i>
                    <a href="/not-found.html" class="side__list-item-link">Bookmarks</a> 
                </li>
                <li class="side__list-item">
                    <i class="fa-solid fa-bars-staggered fa-lg"></i>
                    <a href="/not-found.html" class="side__list-item-link">Lists</a>
                </li>
                <li class="side__list-item">
                    <i class="fa-regular fa-user fa-lg"></i>
                    <a href="/not-found.html" class="side__list-item-link">Profile</a> 
                </li>
                <li class="side__list-item">
                    <i class="fa-solid fa-comment-dots fa-lg"></i>
                    <a href="/not-found.html" class="side__list-item-link">More</a>
                </li>
                <li class="side__list-item">
                <button class="menu__side-btn">Tweet</button>
                </li>
                <div class="menu__side-profile">
                    <img src="${profileImg}" alt="Profile" class="profile-img" />
                    <div class="profile-socials">
                        <h3 class="profile-socials-name">Matheus Victor</h3>
                        <span class="profile-socials-twitter">@mvictor</span>
                    </div>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </ul>
        </nav>
    </div>    
    `
}