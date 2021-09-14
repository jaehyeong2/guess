import {join} from "path";
import express from "express";
import socketIO from "socket.io";

const PORT = 4000;
const app = express();
app.set("view engine","pug");
app.set("views", join(__dirname,"views"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req,res) => res.render("home"));

const handleListening = () => console.log(` ${PORT}포트에서 서버 러닝중! `);

app.listen(PORT,handleListening);