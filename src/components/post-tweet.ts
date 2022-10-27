export function postTweet(element: HTMLButtonElement) {
    element.addEventListener('submit', (e) => {
        e.preventDefault();

        alert('ola');
    })
}

export function focusTweet(button: HTMLButtonElement, element: HTMLInputElement) {
    button.addEventListener('click', () => {
        element.focus();
    })
}