import express from "express";
import cors from "cors";
import errorHandler from "./Helpers/errorHandler.js";
import recipeRouter from "./Routes/RecipeRouter.js";
import groceriesRouter from "./Routes/GroceriesRouter.js";

const app = express();

const corsOption = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};


app.use(cors(corsOption));

app.use(express.json());

app.use("/recipes", recipeRouter);

app.use("/groceries", groceriesRouter);

app.use(errorHandler);

app.listen(5001, () => {
  console.log("listening");
});