import {add, hello} from './util.js'
import './section.js'
import "./style.css"
import land from "./images/land.jpg"
import sheep from "./images/117.png"
import burger from "./images/hamburger.svg"
import banner2 from './images/banner_pvp_optimized.jpg'
import './normalize.css'
// import $ from './jquery-3.6.0.min.js'

const text = hello('hello')
const num = add(1,2)
const img = `<img src="./images/land.jpg" style="width:100px; height:auto">`
// const img = `<img src="${land}" style="width:100px; height:auto">`
const png = `<img src="./images/117.png" style="width:100px; height:auto">`
const svg = `<img src="./images/hamburger.svg" style="width:100px; height:auto">`
// const bg = `<img src="https://cdn.sheepfarm.io/images/www/banner_pvp.jpg" style="width:100px; height:auto">`
const bg = `<img src='./images/banner_pvp_optimized.jpg' style="width:100px; height:auto">`

$('document').ready(function(){
    document.getElementById('root').innerHTML = `
    <div class="battery"></div>
    <p>${bg}</p>
    <p>${img}</p>
    <p>${svg}</p>
    ${text} webpack nodejs!!!${num}
    <p>${png}</p>
    `    
});
