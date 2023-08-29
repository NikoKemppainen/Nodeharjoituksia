// WEB SERVER FOR ELECTRICITY USAGE PLANNING WEB PAGES AND AN API
// ==============================================================

// LIBRARIES AND MODULES
// =====================

// USE EXPRESS AS WEB ENGINE
const express = require("express");
// Use Express handlebars as template engine
const {engine} = require("express-handlebars");

// EXPRESS APPLICATION SETTINGS
// ---------------------------

// Create the server
const app = express();
const PORT = process.env.PORT || 8080;

// set folder paths: public is for assets and views for pages
app.use(express.static("public"));
app.set("views", "./views");

// Engine settings
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// URL ROUTES
//-----------


// START THE LISTENER
app.listen(PORT)
console.log("Server started and it will listen TCP port", PORT)