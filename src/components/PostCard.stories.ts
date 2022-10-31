

export default {
    title: 'Components/PostCard'
};

export const PostCards = () => {
    return `
    <div class="tweet__card">
    <div class="tweet__header">
        <img src="/src/img/profile-img.png" alt="" class="feed-img">
        <div class="tweet__header-info">
            <span>Matheus Victor</span> <span class="tweet__header-id">@mvictor</span>
            <span class="tweet__header-id"> 
            2h
            </span>
            <p class="tweet__descrpt">
            Great place to work!!
            </p>  
    </div>
    </div>
    <div class="tweet__header-img">
        
    <img src="https://i.imgur.com/YPg97Ys.jpg" class="tweet-img" referrerpolicy="no-referrer">
    
    </div>
    <div class="tweet__info-counts" width="600px">
        <div class="tweet__info-content">
        <i class="fa-regular fa-comment" role="button"></i>
        <div class="count">
        0
        </div>
    </div>
    <div class="tweet__info-content">
        <i class="fa-solid fa-retweet" role="button"></i>
        <div class="count">
        0
        </div>
    </div>
    <div class="tweet__info-content">
        <i class="fa-regular fa-heart" role="button"></i>
        <div class="count">
        0
        </div>
    </div>
    <div class="tweet__info-content">
        <i class="fa-regular fa-folder" role="button"></i>
        <div class="count">
        0
        </div>
    </div>
    </div>
    </div>
    
    `;
}