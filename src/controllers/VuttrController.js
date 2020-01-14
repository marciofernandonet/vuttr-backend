const Vuttr = require('../models/Vuttr');

module.exports = {
    async list(req, res){
        const filter = req.query.tag; 
        const findTags = filter ? { tags: filter } : {};
        
        const vuttrs = await Vuttr.find(findTags);
        return res.json(vuttrs);
    },
    async store(req, res){
         const vuttr = await Vuttr.create(req.body);
         return res.status(201).json(vuttr)
    },
    async destroy(req, res){
        await Vuttr.deleteOne({ '_id': req.params.id });
        return res.status(204).send();
    }
}