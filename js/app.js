
//variables
// import { projects } from "./data.js"

//cached elements

const cardContainer = document.getElementById('card-container')
const githubBtn = document.getElementById('git')
const linkedinBtn = document.getElementById('linkedin')
const email = document.getElementById('yahoo')

//event listeners

githubBtn.addEventListener('mouseover', function (e) {
    e.target.style.filter='invert(50%)'
})
githubBtn.addEventListener('mouseout',(e) => {
    e.target.style.filter='invert(0)'
})
  
linkedinBtn.addEventListener('mouseover', function (e) {
    e.target.style.filter='invert(50%)'
})
linkedinBtn.addEventListener('animationend',(e) => {
    e.target.style.filter='invert(0)'
})
  
email.addEventListener('mouseover', function (e) {
    e.target.style.filter='invert(50%)'
})
email.addEventListener('animationend',(e) => {
    e.target.style.filter='invert(0)'
})
  
