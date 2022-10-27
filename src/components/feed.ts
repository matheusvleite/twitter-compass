import profileImg from '../img/profile-img.png'
export function feed(): string {
    return `
    <div class="content">
        <div class="feed__content">   
            <div class="feed__title">
                <h1 class="feed__title-text">Home</h1> 
                <i class="fa-regular fa-star fa-lg active" role="button"></i>
            </div>
            <form id="form-tweet">
                <div class="form-area">
                <img src="${profileImg}" alt="Profile" class="feed-img" />
                <textarea name="Tweet" id="tweet" class="tweet-area" 
                placeholder="What’s happening?"  rows="2" cols="30" maxlength="380"></textarea>
                </div>
                <div class="feed__post">
                    <div class="feed__post-icons">
                        <i class="fa-regular fa-image fa-lg" role="button"></i>
                        <i class="fa-solid fa-camera fa-lg" role="button"></i>
                        <i class="fa-solid fa-square-poll-horizontal fa-lg" role="button"></i>
                        <i class="fa-regular fa-face-smile fa-lg" role="button"></i>
                        <i class="fa-regular fa-calendar fa-lg" role="button"></i>
                    </div>    
                    <button class="feed__post-btn">Tweet</button>
                </div>
            </form>
        </div>  
    </div>
    `
}