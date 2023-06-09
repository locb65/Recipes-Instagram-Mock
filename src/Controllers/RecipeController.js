import recipes from "../Models/IngredientsModel.js";
import multer from "multer";
const upload = multer({
  dest: "uploads/",
});
const recipeControllers = {
  getAllRecipes: async (req, res) => {
    try {
      const allRecipes = await recipes.find();
      res.json(allRecipes);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  findRecipeById: async (req, res) => {
    try {
      const id = req.params.id;
      const recipe = await recipes.findById(id).then((recipe) => {
        res.json(recipe);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  findRecipeByName: async (req, res) => {
    try {
      const nameParam = req.params.name;
      //sets name to lowercase when searching for recipe
      const name = new RegExp(nameParam, "i");
      const recipe = await recipes.find({ name: name }).then((recipe) => {
        res.json(recipe);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  redirectToRecipe: async (req, res) => {
    try {
      const nameParam = req.params.name;
      const name = new RegExp(nameParam, "i");
      const recipe = await recipes.findOne({ name: name });
      res.json(recipe);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  createRecipe: async (req, res) => {
    try {
      // console.log(req.file);
      const newRecipe = await recipes.create(req.body);
      res.json(newRecipe);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  updateRecipe: async (req, res) => {
    try {
      const id = req.params.id;
      const recipe = await recipes
        .findByIdAndUpdate(id, req.body, { new: true })
        .then((recipe) => {
          res.json(recipe);
        });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  deleteRecipe: async (req, res) => {
    try {
      const id = req.params.id;
      const recipe = await recipes.findByIdAndDelete(id).then((recipe) => {
        res.json(recipe);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  updataLikeStatus: async (req, res) => {
    const id = req.params.id;
    try {
      const data = await recipes.findById(id);
      const updatedData = await recipes.findByIdAndUpdate(id, {
        like: !data.like,
      });
      res.json(updatedData);
    } catch (err) {
      console.log(err);
    }
  },
};

export default recipeControllers;
