export default {
    title: 'Components/Icon'
};

export const IconsPost = () => {
    return `
        <div class="feed__post">
        <div class="feed__post-icons">
            <label for="file-image"><i class="fa-regular fa-image fa-lg" role="button"></i></label>
            <input type="file" id="file-image" style="display:none">
            <i class="fa-solid fa-camera fa-lg" role="button"></i>
            <i class="fa-solid fa-square-poll-horizontal fa-lg" role="button"></i>
            <i class="fa-regular fa-face-smile fa-lg" role="button"></i>
            <i class="fa-regular fa-calendar fa-lg" role="button"></i>
            <i class="fa-solid fa-wand-magic-sparkles" role="button"></i>
        </div>  
        </div>
    
    `
}
export const IconsMenu = () => {
    return `
    <ul class"menu__side-list">
    <li class="side__list-item fa-sx active">
        <i class="fa-solid fa-house-user fa-lg"></i>
    </li>
    <li class="side__list-item">
        <i class="fa-regular fa-hashtag fa-lg"></i>
    </li>
    <li class="side__list-item">
        <i class="fa-regular fa-bell fa-lg"></i>
    </li>
    <li class="side__list-item">
        <i class="fa-regular fa-envelope fa-lg"></i> 
    </li>
    <li class="side__list-item">
        <i class="fa-regular fa-bookmark fa-lg"></i>
    </li>
    <li class="side__list-item">
        <i class="fa-solid fa-bars-staggered fa-lg"></i>
    </li>
    <li class="side__list-item">
        <i class="fa-regular fa-user fa-lg"></i>
    </li>
    <li class="side__list-item">
        <i class="fa-solid fa-comment-dots fa-lg"></i>
    </li>
    <li class="side__list-item">
        <i class="fa-solid fa-ellipsis" role="button"></i>
    </li>
</ul>
    
    `
}

export const IconsPostCard = () => {
    return `
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
    `
}

export const IconFeedNews = () =>{
    return `
        <i class="fa-solid fa-magnifying-glass"></i>
    `
}