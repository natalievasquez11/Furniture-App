var db = require("../models");

module.exports = function(app) {
    
    app.get("/", function(req, res) {
        db.Furniture.findAll({}).then(function(result) {
            console.log(result);
            res.render("index", {furniture: result});
        });
    });

    app.post('/api/furniture', function(req, res) {
        console.log('test');
        db.Furniture.create({
            furn_name: req.body.furn_name
        }).then(function(result) {
            res.json({ id: result.insertId });
        }).catch(function(err) {
            res.json(err);
        });
    });

    app.put('/api/furniture/:id', function(req, res) {
        db.Furniture.update({
            delivered: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(result) {
            res.end();
        }).catch(function(err) {
            res.json(err);
        });
    });
}