
// const hamburgerButton = document.getElementById('hamburger')
// const navList = document.getElementById('nav-list')

// function toggleButton() {
//     navList.classList.toggle('show')
// }

// hamburgerButton.addEventListener('click', toggleButton)

//variables
import { projects } from "./data.js"

//cached elements
const cardContainer = document.getElementById('card-container')
const githubBtn = document.getElementById('github')
const linkedinBtn = document.getElementById('linkedin')
const body = document.querySelector('body')
const toggleBtn = document.querySelector('toggleBtn')

//event listeners
toggleBtn.addEventListener('click', toggleDark)

//functions
