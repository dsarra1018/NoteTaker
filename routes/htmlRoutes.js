let path = require("path");
let router = require("express").Router();

router.get("/notes", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/notes.html"))
});

router.get("*", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;