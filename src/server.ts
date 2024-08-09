import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route";
import connectDb from "./database";
import logRouter from "./routes/log.route";
import assetRouter from "./routes/asset.route";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/user", userRouter);
app.use("/api/asset", assetRouter);
app.use("/api/log", logRouter);

app.use((err: any, _: any, res: any, __: any) => {
  res.status(400).json({ error: err?.message });
});

const startServer = async () => {
  const dbConnection = await connectDb();
  if (dbConnection) {
    app.listen(8080, () => {
      console.log("The application is running on port 8080");
    });
  }
};

startServer();
