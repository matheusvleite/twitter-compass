import { sideMenu } from './components/side-menu.js'
import './css/style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${sideMenu()}
`


