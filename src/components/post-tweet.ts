export function postTweet(element: HTMLButtonElement) {
    element.addEventListener('submit', (e) => {
        e.preventDefault();

        alert('ola');
    })
}