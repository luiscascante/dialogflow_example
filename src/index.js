import express from "express";
import bodyParser from "body-parser";
import DialogflowBot from "./DialogflowBot";
//
const app = express();
const bot = new DialogflowBot();

app.post("/action", bodyParser.json(), async (req, res, next) => {
  try {
    await bot.handle(req, res);
  } catch (err) {
    next(err);
  }
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
