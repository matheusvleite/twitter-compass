export default {
    title: 'Text/Span'
}

export const SpanTitleCardPost = () => {
    return `
        <div class="tweet__header-info">
                <span>Matheus Victor</span>
        </div>
    `

}
export const SpanIdAndHour = () => {
    return `
    <div class="tweet__header-info">
    <span class="tweet__header-id">@mvictor</span>
    <span class="tweet__header-id"> 
    40min
    </span>
</div>
    `
}
export const SpanDescriptionTweet = () => {
    return `
        <p class="tweet__descrpt">
        Here description post!
        </p>
    `
}