const express = require('express')

const { HomeController } = require('../controllers/home.controller');

module.exports = (middlewares) => {
    const controller = new HomeController();
    const router = express.Router();

    router.get('/', controller.index.bind(controller));
    router.post('/:id', controller.getById.bind(controller));

    return router;
}