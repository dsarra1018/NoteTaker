const router = require("express").Router();
const db = require("../db/db.json");
const store = require("../js/store");
const path = require("path");
const fs = require("fs"); 

// Get notes
router.get("/notes", function(request, response) {
    response.send(db);
});

// Post notes where information
router.post("/notes", function(request, response) {
    db.push(store(request.body));
    writeToDatabase();
    response.json(true);
});

// Deleting notes
// /api/notes/:id
router.delete("/notes/:id", function(request, response) {
    db = db.filter(elem => elem.id !== request.params.id);
    writeToDatabase();
    response.json(true);
});

// Write into database
function writeToDatabase() {
    let note = JSON.stringify(db);
    fs.writeFile(path.join(__dirname, "../db/db.json"), note, err => {
        if (err) throw err;
    });
};

module.exports = router;