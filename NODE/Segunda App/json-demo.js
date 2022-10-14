const curso = require ('./practice.json');

let infoObject = {
    "tittle": "Learning",
    "numView": 67890,
    "numLikes": 12345,
    "themes": [
        "JS",
        "Node"
    ],
    "Public": true
}

let infoStringJSON = JSON.stringify(infoObject);
console.log(infoStringJSON); //Mostrara un string

let infoObjectJSON = JSON.parse(infoStringJSON);
console.log(infoObjectJSON); //Mostrara un objeto