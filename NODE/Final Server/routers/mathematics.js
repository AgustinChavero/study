const express = require ('express');

const {mathematics} = require('../info/courses.js').infoCourses; //Con esto omitimos el infoCourses.programation y pasamos directamente a programation

const routerMathematics = express.Router();

routerMathematics.get('/', (req, res) => {
    res.send(JSON.stringify(mathematics));
});

routerMathematics.get('/:lenguage', (req, res) => {
    const lenguage = req.params.lenguage; 
    const result = mathematics.filter(course => course.lenguage === lenguage); 
    if (result.length === 0) {
        return res.status(404).send(`${lenguage} not found`); 
    }

    if (req.query.order === 'views') {
        return res.send(JSON.stringify(result.sort((a, b) => b.views - a.views)));
    }

    res.send(JSON.stringify(result));
})

routerMathematics.get('/:lenguage/:level', (req, res) => {
    const lenguage = req.params.lenguage;
    const level = req.params.level;

    const result = mathematics.filter(course => course.lenguage === lenguage && course.level === level);
    if (result.length === 0) {
        return res.status(404).send(`${lenguage} ${level} not found`);
    }

    res.send(JSON.stringify(result));
})

module.exports = routerMathematics;