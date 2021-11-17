import express from "express";
import DB from "./config/db";
import { restRouter } from "./src";
import not_found from "./middlewares/not_found";
import error from "./middlewares/error";

const app = express();
const port = 3000;
app.use(express.json());

DB.connect();

app.use("/", restRouter);
app.use(not_found);
app.use(error);

app.listen(port, () => {
  console.log(`example with listening at http://localhost${port}`);
});
