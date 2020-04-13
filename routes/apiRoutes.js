const router = require("express").Router();
const db = require("../db/db.json");
const store = require("../js/store");
const path = require("path");


// Get notes
router.get("/notes", function(request, response) {
    response.send(db);
})

// Post notes where information
router.post("/notes", function(request, response) {
    db.push(store(request.body));
    response.json(true);
})

// Deleting notes
// /api/notes/:id
router.delete("note/:id", function(request, response) {
    db = db.filter(elem => elem.id != request.params.id);
    response.json(true);
})

module.exports = router;