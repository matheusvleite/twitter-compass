import twitterLogo from '../img/Logotwitter.svg'
import profileImg from '../img/profile-img.png'

export function sideMenu(): string {
    return `
        <nav class="menu__side">
            <ul class"menu__side-list>
                <li class="side__list-item">
                    <img src="${twitterLogo}" alt="TwitterLogo" class="logo-img"/>
                </li>
                <li class="side__list-item">
                    <i class="fa-solid fa-house-user"></i><a href="#">Home</a>
                </li>
                <li class="side__list-item">
                    <i class="fa-regular fa-hashtag"></i><a href="/not-found.html">Explore</a>
                </li>
                <li class="side__list-item">
                    <i class="fa-regular fa-bell"></i><a href="/not-found.html">Notifications</a>
                </li>
                <li class="side__list-item">
                    <i class="fa-regular fa-envelope"></i><a href="/not-found.html">Messages</a> 
                </li>
                <li class="side__list-item">
                    <i class="fa-regular fa-bookmark"></i><a href="/not-found.html">Bookmarks</a> 
                </li>
                <li class="side__list-item">
                    <i class="fa-solid fa-bars-staggered"></i><a href="/not-found.html">Lists</a>
                </li>
                <li class="side__list-item">
                    <i class="fa-regular fa-user"></i><a href="/not-found.html">Profile</a> 
                </li>
                <li class="side__list-item">
                    <i class="fa-solid fa-comment-dots"></i><a href="/not-found.html">More</a>
                </li>
                <button class="menu__side-btn">Tweet</button>
                <div class="menu__side-profile">
                    <img src="${profileImg}" alt="Profile" class="profile-img" />
                    <div class="profile-socials">
                        <h2>Matheus Victor</h2>
                        <span>@matheusvictor</span>
                    </div>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </ul>
        </nav>
    `
}