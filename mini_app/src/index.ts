import express, { Application } from "express";
import chat from "./routes/index";
import sendMessage from "./routes/send_message";
import path from "path";
import bodyParser from "body-parser";

const PORT: number = 3000;

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use("/", chat);
app.use("/", sendMessage);

app.listen(PORT);
