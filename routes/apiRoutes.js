const router = require("express").Router();
const db = require("../db/db.json");
const store = require("../js/store");
const path = require("path");

router.get("/notes", function(request, response) {
    response.send(db);
})

router.post("/notes", function(request, response) {
    db.push(store(request.body));
    response.json(true);
})

router.delete("/notes/:id", function(request, response) {

})

router.get("*", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/index.html"));
})

// /api/notes/:id

module.exports = router;