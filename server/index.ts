import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import modelSchema from "./model";

const port: number = 2233;
const app = express();
const url =
  "mongodb+srv://shecodesaj:shecodesaj@cluster0.xe1jgnf.mongodb.net/realDB";

app.use(cors());
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  const getData = await modelSchema.find();
  res.status(200).json({
    message: "reading",
    data: getData,
  });
});

app.post("/", async (req: Request, res: Response) => {
  const { name } = req.body;
  const getData = await modelSchema.create({ name });
  res.status(200).json({
    message: "reading",
    data: getData,
  });
});

mongoose.connect(url).then(() => {
  app.listen(port, () => {
    console.log("server is ready!");
  });
});
