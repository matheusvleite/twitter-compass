import { post } from "./interfaces/post"

export function view(postContent: post[]) {
    return postContent.map(item => {

        postContent.sort(function (a, b) {  // SORTING POSTS BY MOST RECENT TIME
            if(a.date > b.date){
                return -1
            }else {
                return 1;
            }
        })

        return  `
        <div class="tweet__card">
        <div class="tweet__header">
            <img src="/src/img/profile-img.png" alt="" class="feed-img">
            <div class="tweet__header-info">
                <span>Matheus Victor</span> <span class="tweet__header-id">@mvictor</span>
                <span class="tweet__header-id"> ${item.date}</span>
            <p class="tweet__descrpt">${item.text}</p>  
        </div>
        </div>
        <div class="tweet__header-img">
            <img src="${item.url}" class="tweet-img" referrerpolicy="no-referrer">
        </div>
        <div class="tweet__info-counts">
            <div class="tweet__info-content">
            <i class="fa-regular fa-comment" role="button"></i>
            <div class="count">
            </div>
        </div>
        <div class="tweet__info-content">
            <i class="fa-solid fa-retweet" role="button"></i>
            <div class="count">
            </div>
        </div>
        <div class="tweet__info-content">
            <i class="fa-regular fa-heart" role="button"></i>
            <div class="count">
            </div>
        </div>
        <div class="tweet__info-content">
            <i class="fa-regular fa-folder" role="button"></i>
            <div class="count">
            </div>
        </div>
        </div>
        </div>
        `
    }).join('')
}