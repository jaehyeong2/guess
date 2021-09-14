import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 4000;
const app = express();
app.set("view engine","pug");
app.set("views", join(__dirname,"views"));
app.use(express.static(join(__dirname, "static")));
app.use(logger("dev"));
app.get("/", (req,res) => res.render("home"));

const handleListening = () => console.log(` ${PORT}포트에서 서버 러닝중! `);

const server = app.listen(PORT,handleListening);

const io = socketIO(server);

io.on("connection",(socket)=> {
  socket.on("newMessage",({message}) => {
      socket.broadcast.emit("messageNotif", {
        message,
        nickname: socket.nickname || "Anon"
    });
  })
  socket.on("setNickname", ({nickname})=> {
      socket.nickname = nickname;
  })
});


