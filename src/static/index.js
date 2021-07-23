const socket = io("/");

function sending(text){
    console.log(`you : ${text}`)
    socket.emit("MSG",text)
}

socket.on("notification",({data,nickname})=>{
    console.log(`${nickname} : ${data}`)
})

function setNick(nick){
    socket.emit("setNick",nick)
}