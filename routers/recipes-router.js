const express = require('express');

const recipesModel = require('../models/recipes-model');

const router = express.Router();

async function validateRecipeID(req, res, next) {
  const { id } = req.params

  try {
    const recipe = await recipesModel.getRecipeByID(id);

    if(recipe.length) {
      next()
    } else {
      res.status(404).json({ error: 'Could not find a recipe with the given ID.'})
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

router.get('/', async (req, res) => {
  try {
    const recipes = await recipesModel.getRecipes()
    res.status(200).json(recipes)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/:id/shoppingList', validateRecipeID, async (req, res) => {
  const { id } = req.params;

  try {
    const shoppingList = await recipesModel.getShoppingList(id)
    res.status(200).json(shoppingList)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/:id/instructions', validateRecipeID, async (req, res) => {
  const { id } = req.params;
 
  try {
    const instructions = await recipesModel.getInstructions(id)
    res.status(200).json(instructions)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router;