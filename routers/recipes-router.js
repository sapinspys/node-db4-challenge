const express = require('express');

const recipesModel = require('../models/recipes-model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await recipesModel.getRecipes()
    res.status(200).json(recipes)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/:id/shoppingList', async (req, res) => {
  const { id } = req.params;

  try {
    const shoppingList = await recipesModel.getShoppingList(id)
    res.status(200).json(shoppingList)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/:id/instructions', async (req, res) => {
  const { id } = req.params;
 
  try {
    const instructions = await recipesModel.getInstructions(id)
    res.status(200).json(instructions)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router;