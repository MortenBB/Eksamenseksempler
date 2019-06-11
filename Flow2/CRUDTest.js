router.get('/random', function (req, res, next) {
    res.json({ joke: jokes.getRandomJoke() });
});

router.get('/jokes', function (req, res, next) {
    res.json({ joke: jokes.getAllJokes() });
});

router.get('/add', function (req, res, next) {
    res.render("./addJoke")
});

router.post("/storejoke", (req, res, next) => {
    jokes.addJoke(req.body.joke);
    res.render("addjoke", {
        title: "add joke",
        jokes: jokes.getAllJokes(),
        rbody: req.body.joke,
    });
});