import profileImg from '../img/profile-img.png'
export function feed(): string {
    return `
    <div class="content">
        <div class="feed__title">
            <h1 class="feed__title-text">Home</h1> 
            <i class="fa-regular fa-star"></i>
        </div>
        <form id="form-tweet">
            <div class="form-area">
            <img src="${profileImg}" alt="Profile" class="feed-img" />
            <textarea name="Tweet" id="Tweet" class="tweet-area" 
            placeholder="What’s happening?"  rows="3" cols="30" maxlength="380"></textarea>
            </div>
            <div class="feed__post">
                <i class="fa-regular fa-image"></i>
                <i class="fa-solid fa-camera"></i>
                <i class="fa-solid fa-square-poll-horizontal"></i>
                <i class="fa-regular fa-face-smile"></i>
                <i class="fa-regular fa-calendar"></i>
                <button class="feed__post-btn">Tweet</button>
            </div>
        </form>
    </div>
    `
}