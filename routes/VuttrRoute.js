const express = require('express');
const router = express.Router();
const Vuttr = require('../models/Vuttr');

// GET /tools
router.get('/tools', (req, res) => {
    Vuttr.find((err, results) => {
        if(err) {
            res.status(400).send(`Erro: ${err}`);
        }
        else{
            results = results.map((elem) => {
                return { id : elem._id, 
                        title : elem.title, 
                        link: elem.link, 
                        description: elem.description, 
                        tags: elem.tags };
            });
            res.status(200).send(results);
        }
    });
});

// GET /toolstag=node
router.get('/tools\\$tag=:tag', (req, res) => {
    Vuttr.find({ tags: req.params.tag }, (err, results) => {
        if(err) {
            res.status(400).send(`Erro: ${err}`);
        }
        else{  
            results = results.map((elem) => {
                return { id : elem._id, 
                        title : elem.title, 
                        link: elem.link, 
                        description: elem.description, 
                        tags: elem.tags };
            });
            res.status(200).json(results);
        }
    });
});

// POST /tools
router.post('/tools', (req, res) => {
    const vuttr = new Vuttr(req.body);
    vuttr.save().then(vuttr => {
        let results = JSON.parse(JSON.stringify([vuttr])); 
        results = results.map((elem) => {
            return { title : elem.title, 
                     link: elem.link, 
                     description: elem.description, 
                     tags: elem.tags,
                     id : elem._id };
        });
        res.status(200).json(results);
    })
    .catch(err => { res.status(400).send(`Erro: ${err}`); });
});

// DELETE /tools/:id
router.delete('/tools/:id', (req, res) => {
    Vuttr.findByIdAndRemove({ _id: req.params.id }, (err, vuttr) => {
        if(err){
            res.status(400).send(`Erro: ${err}`);
        } 
        else{
            res.status(200).json({});
        } 
    });
});

module.exports = router;