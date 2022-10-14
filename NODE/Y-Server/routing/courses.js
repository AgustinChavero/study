//database es cursos.js en el tutorial

let infoCourses = {
    'programation' : [
        {
            id: 1,
            tittle: 'Learning JavaScript',
            lenguage: 'JavaScript',
            views: '15000',
            level: 'basic'
        },
        {
            id: 2,
            tittle: 'Learning Python',
            lenguage: 'Python',
            views: '1200',
            level: 'medium'
        },
        {
            id: 3,
            tittle: 'Learning Node',
            lenguage: 'Node',
            views: '1623',
            level: 'hard'
        }
    ],
    'maths' : [
        {
            id:'1',
            tittle: 'Learning Calculation',
            lenguage: 'Calculation',
            views: '5000',
            level: 'basic',
        },
        {
            id:'2',
            tittle: 'Learning Algebra',
            lenguage: 'Algebra',
            views: '1000',
            level: 'hard',
        }
    ]
}

module.exports.infoCourses = infoCourses;