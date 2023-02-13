import {add, hello} from './util.js'
import "./style.css"

const text = hello('hello')
const num = add(1,2)
document.getElementById('root').innerHTML = `${text} webpack!!@!!!${num}`