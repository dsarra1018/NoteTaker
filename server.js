// Declare dependencies
const express = require("express");
const path = require("path");

// Instantiate app and set port number
const app = express();
// PORT = for Heroku || for localhost
let PORT = process.env.PORT || 3000;

// Configure app to handle JSON in the
// request body when using POST
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// PLUS the following
app.use(express.static("public"));
/*
^^ creates a path to static front-end files: html, css & js.
notice how files are referenced in index.html:
                        <script src="/js/index.js"></scripts>.
this is because we have created a static path that routes
to the /public directory automatically.
*/
app.use("/api", apiRoutes); // /api/notes
app.use("/", htmlRoutes); // /notes or /