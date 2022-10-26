import profileImg from '../img/profile-img.png'

export function feed(): string {
    return `
        <div class="feed__title">
            <h1 class="feed__title-text">Home</h1> 
            <i class="fa-regular fa-star"></i>
        </div>
        <form id="form-tweet">
        <img src="${profileImg}" alt="Profile" class="feed-img" />
        <textarea name="Tweet" id="Tweet" class="tweet" 
        placeholder="What’s happening?" maxlength="380"></textarea>
        <div class="feed__post">
            <i class="fa-regular fa-image"></i>
            <i class="fa-solid fa-camera"></i>
            <i class="fa-solid fa-square-poll-horizontal"></i>
            <i class="fa-regular fa-face-smile"></i>
            <i class="fa-regular fa-calendar"></i>
            <button class="feed__post-btn">Tweet</button>
        </div>
        </form>
    `
}