import express from "express"
import {join} from "path"
import socketIO from "socket.io"
 
const app = express();

const PORT = 5000;

app.set("view engine","pug")
app.set("views",join(__dirname,"views"))
app.use(express.static(join(__dirname,"static")));

app.use("/",(req,res)=>{res.render("home")})

const server = app.listen(PORT,()=>console.log(`✅ my server on http://localhost:${PORT}`))
const io = socketIO(server)

io.on("connection",(socket)=>{
    socket.on("MSG",(data)=>{
      console.log(data,"data")
      socket.broadcast.emit("notification",{
        data,
        nickname:socket.nickname
      })
    })
    socket.on("setNick",(joon)=>{
      console.log(joon,"준이에요")
      socket.nickname = joon
    })
})