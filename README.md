
# Platefuls


## Languages/Frameworks/Dependencies

|Name| Install/version|
|----------|-------|
|Javascript||
|ExpressJS| ```npm i express```
|MongoDB | Community 6.0|
|Mongoose | ```npm i mongoose```|
|Node |version 19.4.0
|nodemon | ```npm i nodemon --save-dev```|
|cors | ```npm i cors```|
|Axios | ```npm i axios```|
|APIDOCS|```npm i apidocs```|

## The Background

Platefuls is a RESTful API made with the goal of interacting with a variety of recipes. The goal of this databse is to provied Recipe information to allow recipes to create an application revolving around this theme.

### Example endpoints:
-------

[Get All Recipes](https://recipe.cleverapps.io/recipes)

[Get Recipe by Name](https://recipe.cleverapps.io/recipes/name/Cauliflower%20Gnocchi)

[Get Recipe by Id](https://recipe.cleverapps.io/recipes/6428ea2d3deecbcde79edbf5)

[Get All Groceries](https://recipe.cleverapps.io/groceries/)

## The Models

There are two models: Recipes and Groceries.

Below are the two models with example outputs. The routes for each model will be laid out as well.

## The Recipes


#### MODEL
--------
```
const Instruction = new Schema({
  position: Number,
  display_text: String,
});


const Recipe = new Schema({
  name: String,
  instruction: [Instruction],
  description: [String],
  components: [String],
  cook_time_minutes: Number,
  img: String,
});
```

Example Output:

```
{
    "_id": "64274320d411498bec23be12",
    "name": "Jalapeño Poppers",
    "instruction": [
        {
            "position": 1,
            "display_text": "Preheat oven to 400°F (200˚C).",
            "_id": "64274320d411498bec23be13"
        },
        {
            "position": 2,
            "display_text": "Slice the jalapeños in half, then remove the seeds by scraping out the insides.",
            "_id": "64274320d411498bec23be14"
        },
        {
            "position": 3,
            "display_text": "Spread the cream cheese evenly among the jalapeño shells.",
            "_id": "64274320d411498bec23be15"
        },
        {
            "position": 4,
            "display_text": "Wrap each jalapeño in bacon.",
            "_id": "64274320d411498bec23be16"
        },
        {
            "position": 5,
            "display_text": "Place the bacon-wrapped jalapeños on a baking sheet lined with parchment paper. Bake for 20 minutes, until bacon is browned and peppers are tender.",
            "_id": "64274320d411498bec23be17"
        },
        {
            "position": 6,
            "display_text": "Enjoy!",
            "_id": "64274320d411498bec23be18"
        }
    ],
    "description": null,
    "components": [
        "jalapeño",
        "bacon",
        "cream cheese"
    ],
    "cook_time_minutes": null,
    "img": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/f5ca94bf8118491dbdbc1c2977ce75cc/BFV11486_3IngredientAppetizers-FB1080SQ.jpg",
    "__v": 0
},
```


#### Recipes Routes and Methods
----

|Method|Requests|Paths|
|----|-----|-----------|
|GET |all recipes | "...```/recipes/```"|
|GET |recipe by name | "...```/recipes/name/<Name Here>```"|
|GET |redirect by name to recipe page| "...```/recipes/redirect/<Name Here>```"|
|GET|recipe by Id| "...```/recipes/<Id Here>```"
|POST |create new recipe | "...```/recipes```"|
|PUT |update recipe by Id | "...```/recipes/<Id Here>```"|
|DELETE |delete recipe by Id | "...```/recipes/<Id Here>```"|

## Groceries Model

#### The Model
____

```const Groceries = new Schema(
  {
    name: String,
    deleted: Boolean,
    checked: Boolean,
    recipe: String,
  },
  { timestamps: true }
);
```

Example Output:

```
{
    "_id": "64235385ee6b130c429d178b",
    "name": "russet potato",
    "recipe": "Microwave 10-Minute Loaded Potato",
    "createdAt": "2023-03-28T20:52:21.154Z",
    "updatedAt": "2023-03-28T22:06:40.123Z",
    "__v": 0,
    "checked": false
},
```

#### Groceries Routes and Methods
----

|Method|Requests|Paths|
|----|-----|-----------|
|GET |all groceries | "...```/groceries/```"|
|GET |groceries by id| "...```/groceries/<Id Here>```"|
|GET |recipe from groceries by id| "...```/groceries/recipe/<Id Here>```"|
|POST |create new groceries | "...```/groceries```"|
|PUT |update groceries by Id | "...```/groceries/<Id Here>```"|
|PUT|Update check on groceries by Id| "...```/groceries/check/<Id Here>```"|
|PUT|Update Delete on groceries by Id| "...```/groceries/delete/<Id Here>```"|
|DELETE |delete recipe by Id | "...```/groceries/<Id Here>```"|


## APIDOC

This repo has API documentation through APIDOCS as well. To run the documentation first run ```npm run docs``` fromt he command line in the root directory for the repository. Then open Index.html from the docs directory.


## Collaborators

1. mmbliv | Min He 
2. evRook | Eric Spychalski

### Thank you for taking the time to look at this repository

## Links
Repo URL: https://github.com/locb65/Recipes-Instagram-Mock

FrontEnd Repo URL: https://github.com/evRook/Recipes-Instagram-Mock-FE


branch test

