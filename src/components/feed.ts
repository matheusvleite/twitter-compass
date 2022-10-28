import profileImg from '../img/profile-img.png'

export function feed(): string {
    return `
    <div class="content">
        <div class="feed__content">   
            <div class="feed__title">
                <h1 class="feed__title-text">Home</h1> 
                <i class="fa-regular fa-star fa-lg active" role="button"></i>
            </div>
            <form id="form-tweet" method="post">
                <div class="form-area">
                <img src="${profileImg}" alt="Profile" class="feed-img">
                <textarea name="Tweet" id="tweet" class="tweet-area" 
                placeholder="What’s happening?"  rows="2" cols="30" maxlength="380"></textarea>
                </div>
                <div class="feed__post">
                    <div class="feed__post-icons">
                        <label for="file-image"><i class="fa-regular fa-image fa-lg" role="button"></i></label>
                        <input type="file" id="file-image" style="display:none">
                        <i class="fa-solid fa-camera fa-lg" role="button"></i>
                        <i class="fa-solid fa-square-poll-horizontal fa-lg" role="button"></i>
                        <i class="fa-regular fa-face-smile fa-lg" role="button"></i>
                        <i class="fa-regular fa-calendar fa-lg" role="button"></i>
                    </div>    
                    <button class="feed__post-btn">Tweet</button>
                </div>
            </form>
            <div id="view">
            <div class="tweet__card">
            <div class="tweet__header">
                <img src="${profileImg}" alt="" class="feed-img">
                <div class="tweet__header-info">
                    <span>Matheus Victor</span> <span class="tweet__header-id">@mvictor</span><span class="tweet__header-id">. Jun 27</span>
                <p class="tweet__descrpt">If you're tired of ola!</p>
                
            </div>
            </div>
            <div class="tweet__header-img">
                <img src="https://pbs.twimg.com/media/Dgti2h0WkAEUPmT.png" alt="Tweet Img" class="tweet-img">
            </div>
            <div class="tweet__info-counts">
                <div class="tweet__info-content">
                <i class="fa-regular fa-comment"></i>
                <div class="count">33</div>
            </div>
            <div class="tweet__info-content">
                <i class="fa-solid fa-retweet"></i>
                <div class="count">397</div>
            </div>
            <div class="tweet__info-content">
                <i class="fa-regular fa-heart"></i>
                <div class="count">
                2.6k
                </div>
            </div>
            <div class="tweet__info-content">
                <i class="fa-regular fa-folder"></i>
                <div class="count">
                2.6k
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>  
    </div>
    `
}