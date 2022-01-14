const res = require("express/lib/response");

class HomeController {
    index(req, res) {
        return res.json({message: "Hello world!"});
    }

    getById(req, res) {
        return res.json({message: `Hello world from #${req.params.id}`});
    }
}

module.exports = { HomeController };
