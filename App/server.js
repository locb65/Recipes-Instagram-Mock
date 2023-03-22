import express from 'express';
import errorHandler from './Helpers/errorHandler.js';
import recipeRouter from './Routes/RecipeRouter.js';
import groceriesRouter from './Routes/GroceriesRouter.js';

const app = express();

app.use(express.json());

app.use("/recipes", recipeRouter);

app.use("/groceries", groceriesRouter);

app.use(errorHandler);

app.listen(4000)