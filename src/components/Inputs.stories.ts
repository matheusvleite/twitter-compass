export default {
    title: 'Components/Inputs'
};

export const InputTextTweet = () => {
    return `
        <div class="form-area">
            <textarea name="Tweet" id="tweet" class="tweet-area" placeholder="What’s happening?" rows="2" cols="30" maxlength="380" required=""></textarea>
        </div>
    `
}
export const InputSearch = () => {
    return `
        <div class="feed__news-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" name="Search" class="feed__news-search-input" placeholder="Search Twitter">
        </div>
    `
}