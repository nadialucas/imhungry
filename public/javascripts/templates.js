(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
<<<<<<< HEAD
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"navbar navbar-static-top\">\n    <div class=\"container-fluid \">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\"><div class=\"header-logo\"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"active\"><a href=\"\">PANTRY</a></li>\n          <li><a href=\"\">COOKBOOK</a></li>\n<!-- \n          <li><img id=\"mazzetti\" class=\"navpic\" src=\"img/domm.jpg\" alt=\"Bro Science\"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n  ";
=======
templates['cookbook'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.cookbookRecipe,depth0,{"name":"cookbookRecipe","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "                <p><em>Your cookbook is currently empty. Save recipes to stash them here!</em></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"cookbook\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.recipes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "          </div>";
},"usePartial":true,"useData":true});
templates['cookbookRecipeView'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"cookbookItem\" data-recipid="
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + ">\n<div class=\"cookbookRecipe\" data-recipeid="
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + ">\n  <p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n  <img src = "
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.imageURLs : depth0)) != null ? stack1["1"] : stack1), depth0))
    + ">\n  \n  \n  \n</div>\n<button id=\"recipe-delete-btn\" data-id="
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + " class=\"btn btn-lg btn-warning recipe-delete-btn\" type=\"button\">Delete</button>\n</div>";
},"useData":true});
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"navbar navbar-static-top\">\n    <div class=\"container-fluid \">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\"><div class=\"header-logo\"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"active\"><a href=\"\">PANTRY</a></li>\n          <li class=\"active\"><a href=\"\" id=\"cookbook-btn\">COOKBOOK</a></li>\n<!-- \n          <li><img id=\"mazzetti\" class=\"navpic\" src=\"img/domm.jpg\" alt=\"Bro Science\"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n  ";
>>>>>>> b4ca2d80ee627966e66eb61c9176d8fdcef09702
},"useData":true});
templates['index'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<nav class=\"navbar navbar-static-top\">\n    <div class=\"container-fluid \">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\"><div class=\"header-logo\"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"active\"><a href=\"\" id=\"register-btn\">SIGN UP</a></li>\n<!-- \n          <li><img id=\"mazzetti\" class=\"navpic\" src=\"img/domm.jpg\" alt=\"Bro Science\"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  \n\n\n<div class =\"container-fluid\">\n<div class=\"row\">  \n  <div class=\"col-md-4 col-md-offset-4 signin-box\" >\n    <h2 class=\"text-center\">Sign in</h2>\n      <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n\n      <form id=\"signin-form\">\n      <div>\n        <label for=\"inputUsername\" class=\"sr-only\"><span>Username</span></label>\n        <input type=\"username\" id=\"inputUsername\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required autofocus/>\n      </div>\n      <div>\n        <label for=\"inputPassword\" class=\"sr-only\"><span>Password</span></label>\n        <input type=\"password\" id=\"inputPassword\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required/>\n      </div>\n        <input type=\"submit\" class=\"btn btn-lg btn-warning btn-block\"/>\n      </form>\n</div>\n</div>\n</div>\n";
},"useData":true});
templates['ingredient'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"ingredient\">\n  <label>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ingredient : depth0)) != null ? stack1.name : stack1), depth0))
    + " </label><p>: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ingredient : depth0)) != null ? stack1.amount : stack1), depth0))
    + " </p>\n</div>";
},"useData":true});
templates['recipe'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"recipe\" data-recipeid="
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
<<<<<<< HEAD
=======
    + " data-recipesize="
    + alias4(((helper = (helper = helpers.size || (depth0 != null ? depth0.size : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"size","hash":{},"data":data}) : helper)))
>>>>>>> b4ca2d80ee627966e66eb61c9176d8fdcef09702
    + ">\n  <p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n  <img src = "
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.imageURLs : depth0)) != null ? stack1["1"] : stack1), depth0))
    + ">\n  \n</div>\n\n\n";
},"useData":true});
templates['recipeView'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"ingredient\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</div>\n";
<<<<<<< HEAD
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;
=======
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <button id=\"save-btn\" data-id="
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1._id : stack1), depth0))
    + " class=\"btn btn-lg btn-warning save-btn\">Save Recipe to Cookbook</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};
>>>>>>> b4ca2d80ee627966e66eb61c9176d8fdcef09702

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div data-recipeid="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1._id : stack1), depth0))
    + ">\n\n<div class=\"container-fluid\">\n\n<div class=\"row\">\n  <div class=\"col-md-5 recipe-box\">\n    <div class=\"recipe-view-img\" style=\"background-image: url("
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.imageURLs : stack1)) != null ? stack1["0"] : stack1), depth0))
    + ")\"></div>\n    <div class=\"serving-label\">Serving size: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.servingSize : stack1), depth0))
    + "</div>\n    <div class=\"recipe-name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.name : stack1), depth0))
    + "</div>\n  </div>\n\n  <div class=\"col-md-6 col-md-offset-1 recipe-box\">\n    <div class=\"ingredients\">\n      <div class=\"ingredients-header\">Ingredients: </div>\n      \n"
<<<<<<< HEAD
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.ingredients : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"instructions\">\n      <div class=\"instructions-label\">Instructions: </div>\n      <a class=\"recipe-url\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.sourceURL : stack1), depth0))
    + "\">Full instructions here</a>\n    </div>\n    \n\n\n  </div>\n</div>\n\n</div>\n</div>";
=======
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.ingredients : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"instructions\">\n      <div class=\"instructions-label\">Instructions: </div>\n      <a class=\"recipe-url\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.sourceURL : stack1), depth0))
    + "\">Full instructions here</a>\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.displayButton : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n  </div>\n</div>\n\n</div>\n</div>";
>>>>>>> b4ca2d80ee627966e66eb61c9176d8fdcef09702
},"usePartial":true,"useData":true});
templates['register'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<nav class=\"navbar navbar-static-top\">\n    <div class=\"container-fluid \">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\"><div class=\"header-logo\"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"active\"><a href=\"#\" id=\"home-link\" >BACK TO HOME</a></li>\n<!-- \n          <li><img id=\"mazzetti\" class=\"navpic\" src=\"img/domm.jpg\" alt=\"Bro Science\"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n  \n\n\n\n<div class =\"container-fluid\">\n<div class=\"row\">  \n  <div class=\"col-md-4 col-md-offset-4 signin-box\" >\n  \n\n  <h2 class=\"text-center\">Register</h2>\n  <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n<!--   <form id=\"register-form\">\n    <div>Username: <input type=\"text\" name=\"username\" required /></div>\n    <div>Password: <input type=\"password\" name=\"password\" required /></div>\n    <div>Confirm Password: <input type=\"password\" name=\"confirm\" required /></div>\n    <input type=\"submit\" />\n  </form> -->\n\n\n  <form id=\"register-form\">\n  <div>\n    <label for=\"inputUsername\" class=\"sr-only\"><span>Username</span></label>\n    <input type=\"username\" id=\"inputUsername\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required autofocus/>\n  </div>\n  <div>\n    <label for=\"inputPassword\" class=\"sr-only\"><span>Password</span></label>\n    <input type=\"password\" id=\"inputPassword\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required/>\n  </div>\n  <div>\n    <label for=\"inputPasswordConfirm\" class=\"sr-only\"><span>Confirm Password</span></label>\n    <input type=\"password\" id=\"inputPasswordConfirm\" name=\"confirm\" class=\"form-control\" placeholder=\"Confirm Password\" required/>\n  </div>\n    <input type=\"submit\" class=\"btn btn-lg btn-warning btn-block\"/>\n  </form>\n</div>\n</div>\n</div>";
},"useData":true});
templates['search'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "              "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
<<<<<<< HEAD
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.recipes : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.recipe,depth0,{"name":"recipe","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
=======
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.recipes : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.recipe,depth0,{"name":"recipe","hash":{"size":(depths[1] != null ? depths[1].size : depths[1])},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
>>>>>>> b4ca2d80ee627966e66eb61c9176d8fdcef09702
},"6":function(container,depth0,helpers,partials,data) {
    return "                <p><em>No recipes found. We suggest that you allow additional ingredients in your search.</em></p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <li class=\"ingredient\" style=\"list-style-type:none\" data-ingredient-id="
<<<<<<< HEAD
    + alias2(alias1((depth0 != null ? depth0._id : depth0), depth0))
    + ">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "<button class=\"btn btn-warning delete-button\" type=\"button\">Delete</button></li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "        <p><em>No ingredients yet!</em></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\">imHungry</a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"active\"><a href=\"\">Pantry</a></li>\n          <li><a href=\"\">Cookbook</a></li>\n<!-- \n          <li><img id=\"mazzetti\" class=\"navpic\" src=\"img/domm.jpg\" alt=\"Bro Science\"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n<p>Welcome, <b>"
    + container.escapeExpression(((helper = (helper = helpers.currentUser || (depth0 != null ? depth0.currentUser : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentUser","hash":{},"data":data}) : helper)))
    + "</b> (<a href=\"#\" id=\"logout-link\">logout</a>)</p>\n\n<div class=\"container-fluid\">\n<div class=\"row\">\n    <div class=\"col-md-5 left\">\n        <h1>Find recipes.</h1>\n\n        <form id=\"search-form\">\n<!--           <div>Serving size: <input type=\"number\" name=\"servingsize\"/></div>\n          <div>Additional ingredients: <input type=\"text\" name=\"additional\"/></div> -->\n          <input type=\"submit\" value=\"Scavenge\" class=\"btn btn-warning\"/>\n        </form>\n\n          <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n\n          <div class=\"results\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.searched : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n    </div>\n\n    <div class=\"col-md-5 col-md-offset-2 right\">\n      <h1>Your pantry.</h1>\n\n      <div id=\"ingredientsList\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.ingredients : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "      </div>\n\n      <form id=\"pantry-form\">\n        <div>Add a new ingredient: <input class=\"form-control\" id=\"new-ingredient\" name=\"ingredient\" required />\n        <input type=\"submit\" value=\"Add\" class=\"btn btn-warning\"/></div>\n      </form>\n  </div>\n  </div>\n";
},"usePartial":true,"useData":true});
=======
    + alias2(alias1(depth0, depth0))
    + ">"
    + alias2(alias1(depth0, depth0))
    + "<button class=\"btn btn-warning delete-button\" type=\"button\">Delete</button></li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "        <p><em>No ingredients yet!</em></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"welcome\">Welcome, <b>"
    + container.escapeExpression(((helper = (helper = helpers.currentUser || (depth0 != null ? depth0.currentUser : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentUser","hash":{},"data":data}) : helper)))
    + "</b> (<a href=\"#\" id=\"logout-link\">logout</a>)</div>\n\n<div class=\"container-fluid\">\n<div class=\"row\">\n  <div class=\"wrapper\">\n    <div class=\"col-md-6 left\">\n        <h1>Find recipes.</h1>\n\n        <form id=\"search-form\">\n           <div>Serving size: <input type=\"number\" name=\"servingsize\"/></div>\n          <div>Additional ingredients: <input type=\"text\" name=\"additional\"/></div>\n          <input type=\"submit\" value=\"Scavenge\" class=\"btn btn-warning\"/>\n        </form>\n\n          <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n\n          <div class=\"results\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.searched : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n    </div>\n\n    <div class=\"col-md-4 col-md-offset-1 right\">\n      <h1>Your pantry.</h1>\n\n      <div id=\"ingredientsList\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.ingredients : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "      </div>\n\n      <form id=\"pantry-form\">\n        <div>Add a new ingredient: <input class=\"form-control\" id=\"new-ingredient\" name=\"ingredient\" required />\n        <input type=\"submit\" value=\"Add\" class=\"btn btn-warning\"/></div>\n      </form>\n      </div>\n  </div>\n  </div>\n";
},"usePartial":true,"useData":true,"useDepths":true});
>>>>>>> b4ca2d80ee627966e66eb61c9176d8fdcef09702
})();