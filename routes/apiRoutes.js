const router = require("express").Router();
const db = require("../db/db.json");
const store = require("../js/store");

router.get("/notes", function(request, response) {
    response.send(db);
})

router.post("/notes", function(request, response) {
    db.push(store(request.body));
    response.json(true);
})

router.delete("/notes/:id", function(request, response) {

})

// /api/notes/:id

module.exports = router;