import Groceries from "../Models/Groceries.js";
import Recipe from "../Models/IngredientsModel.js";

const groceriesController = {
  updateCheck: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Groceries.findById(id);
      const updatedData = await Groceries.findByIdAndUpdate(id, {
        checked: !data.checked,
      });
      res.json(updatedData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  updateDelete: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Groceries.findById(id);
      const updatedData = await Groceries.findByIdAndUpdate(id, {
        deleted: !data.deleted,
      });
      res.json(updatedData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  getAllGroceries: async (req, res) => {
    try {
      const groceries = await Groceries.find();
      res.json(groceries);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  getGroceries: async (req, res) => {
    try {
      const id = req.params.id;
      const groceries = Groceries.findById(id);
      //   .populate("recipe", "name")
      res.json(groceries);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //the controller below works in postman, will return a recipe from a grocery list
  //use the groceryId to get the recipe
  getRecipebyGrocery: async (req, res) => {
    try {
      const id = req.params.id;
      //finding the groceries by id
      const groceries = await Groceries.findById(id).populate("recipe");
      if (!groceries) {
        return res.status(404).json({ message: "Groceries not found" });
      }
      //finding the recipe associated with groceries based off of groceries.recipe.id
      const recipe = await Recipe.findById(groceries.recipe._id);
      if (!recipe) {
        //return errors if no recipe is found
        return res.status(404).json({ message: "Recipe not found" });
      }
      res.json(recipe);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  createGroceries: async (req, res) => {
    try {
      const { name, recipe } = req.body;
      const data = await Groceries.findOne({ name: name });
      if (data) {
        res
          .status(400)
          .json({ message: `You already have ${name} in your groceries` });
      } else {
        const newGroceries = await Groceries.create({ name, recipe });
        res.json(newGroceries);
      }

      // const populatedGroceries = await newGroceries.populate(
      //   "recipe",
      //   "name components"
      // );
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  deleteGroceries: async (req, res) => {
    try {
      const id = req.params.id;
      const groceries = await Groceries.findByIdAndDelete(id).then(
        (groceries) => res.json(groceries)
      );
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  updateGroceries: async (req, res) => {
    try {
      const id = req.params.id;
      Groceries.findByIdAndUpdate(id, req.body).then((groceries) => {
        res.json(groceries);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

export default groceriesController;
