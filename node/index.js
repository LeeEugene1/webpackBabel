const express = require('express')
const app = express()

//라우팅
// app.use('/',(req,res)=>{
// 	res.send('hello, world!')
// })

// //라우팅 + get,post 메소드
// app.get('/',(req,res)=>{
// 	res.send('GET')
// })

// app.post('/',(req,res)=>{
// 	res.send('POST')
// })
app.set('view engine', 'ejs');

let router = express.Router();
router.use('/',(req,res)=>{
	res.render('index',{})
})

app.use(express.static('public'));//이경우 src의 경로 root는 public내에서만 가져옴
// app.use(express.static('dist'));
app.use("/", router)

const PORT = 500
app.listen(PORT, ()=>{
	console.log(`The Express server is listening at PORT: ${PORT}`)
})