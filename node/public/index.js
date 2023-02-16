import {add, hello} from './util.js'
import './footer.js'
import "./style.css"
import land from "./images/land.jpg"
import sheep from "./images/117.png"
import burger from "./images/hamburger.svg"
import './normalize.css'
// import $ from './jquery-3.6.0.min.js'

const text = hello('hello')
const num = add(1,2)
const img = `<img src="${land}" style="width:100px; height:auto">`
const png = `<img src="${sheep}" style="width:100px; height:auto">`
const svg = `<img src="${burger}" style="width:100px; height:auto">`

$('document').ready(function(){
    document.getElementById('root').innerHTML = `
    <p>${img}</p>
    <p>${svg}</p>
    ${text} webpack nodejs!!!${num}
    <p>${png}</p>
    `    
});
