import { post } from "./interfaces/post";
import moment from 'moment'; // API MOMENT JS



export function view(postContent: post[]) {

    return postContent.map(item => {

        let imgSource = `
        <img src=${item.url} class="tweet-img" referrerpolicy="no-referrer">
        `;
        let imgSrcRender = '';
        if(item.url != null) {
            imgSrcRender = imgSource;
        }; 

        return  `
        <div class="tweet__card">
        <div class="tweet__header">
            <img src="/src/img/profile-img.png" alt="" class="feed-img">
            <div class="tweet__header-info">
                <span>Matheus Victor</span> <span class="tweet__header-id">@mvictor</span>
                <span class="tweet__header-id"> 
                ${  formatData(item.date) }
                </span>
                <p class="tweet__descrpt">
                ${ item.text }
                </p>  
        </div>
        </div>
        <div class="tweet__header-img">
            ${ imgSrcRender }
        </div>
        <div class="tweet__info-counts">
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
        <a href="/not-found.html" class="card__post-showmore">Show this thread</a>
        </div>
        `
    }).join('')
}

function formatData(date: Date) {

    let datePost = date = new Date(date);
    
    moment.updateLocale('en', {
        relativeTime : {
            future: "in %s",
            past:   "%s",
            s  : '%ds',
            ss : '%ds',
            m:  "%dmin",
            mm: "%dmin",
            h:  "%dh",
            hh: "%dh",
            d:  "%ddays",
            dd: "%ddays",
            w:  "%dweeks",
            ww: "%dweeks",
            M:  "%dmonths",
            MM: "%dmonths",
            y:  "%dyears",
            yy: "%dyears"
        }
    });

    const start = moment(datePost)


    return moment(start).fromNow();
;
}

