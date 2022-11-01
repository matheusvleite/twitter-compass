export function getLocal() {
    return localStorage.getItem('localDb');
}

export function updateLocalStorage<Type>(element: Type) {
    return localStorage.setItem('localDb', JSON.stringify(element));
}