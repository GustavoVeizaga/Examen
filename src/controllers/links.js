const Link = require("../model/Link")

async function getLinks(req, res) {
    const links = await Link.find()
    res.json(links)
}

async function createLink(req, res) {
    const link = req.body // informacion que llega desde el cliente
    const temp =  await Link.create(link);
    res.json(temp)
}



module.exports = {
    getLinks,
    createLink,

}