// Primary author: nlucas
var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');


var User = require('../models/User');
var Cookbook = require('../models/Cookbook');
var Recipe = require('../models/Recipe');

/*
  Require authentication on ALL access to cookbook
  Clients which are not logged in will receive a 403 error code.
*/
var requireAuthentication = function(req, res, next) {
  if (!req.currentUser) {
    utils.sendErrResponse(res, 403, 'Must be logged in to use this feature.');
  } else {
    next();
  }
};



// Register the middleware handlers above.
router.all('*', requireAuthentication);


/*
  The following retrieves all recipes from the current cookbook.

  GET /cookbook/recipes
  No request parameters
  Response:
    - success: true if successful
    - recipes: all the recipes in the cookbook
*/

router.get('/recipes', function(req, res) {
  Cookbook.Cookbook.getRecipes(req.currentUser.username, function(err, recipes) {
    if (!err) {
      utils.sendSuccessResponse(res, { recipes: recipes, currentUser: req.currentUser.username });
    } else {
      utils.sendErrResponse(res, 403, 'Something went wrong.');
    }
  });
});



/*
  The following calls getRecipe from the Recipe schema given a recipeId
  It populates req with a recipe object
*/
router.param('cookbook', function(req, res, next, recipeId) {
    Recipe.getRecipe(recipeId, function(err, recipe) {
      if (recipe) {
        req.recipe = recipe;
        next();
      } else {
        utils.sendErrResponse(res, 404, 'Resource not found.');
      }
  });
});

/*
  Adds a new recipe to the cookbook.

  All recipes in the cookbook must be distinct. If a request arrives with a ingredient that
  already exists, the response will be an error.

  PUT /cookbook
  Request body:
    - recipeId: the id of the recipe to add
    - username: the owner of the cookbook
  Response:
    - success: true if user creation succeeded; false otherwise
    - err: on error, an error message
*/

router.put('/:cookbook', function(req, res) {
  Cookbook.Cookbook.addRecipe(req.currentUser.username, req.recipe._id.toString(), function(err, cookbook) {
    if (!err) {
      Recipe.getRecipe(req.recipe._id, function(err, recipe) {
        if (!err) {
          utils.sendSuccessResponse(res, {recipe: recipe, displayButton: false});
        }
      })
    } else {
      utils.sendErrResponse(res, 400, err.msg);
    }
  });
});

/*
  Deletes an recipe from the cookbook

  DELETE /delete
  Request body:
    - username: the owner of the cookbook
    - recipeId: the id of the recipe to delete
  Response:
    - success: true if ingredient deleted; false otherwise
    - err: on error, an error message
*/

router.delete('/', function(req, res) {
  Cookbook.Cookbook.deleteRecipe(req.currentUser.username, req.body.recipeId, function(err, cookbook) {
    if (err) {
      res.send({
        success:false,
        message: err.msg
      })
    }
    else {
      res.send({success:true});
    }
  });
});

module.exports = router;
