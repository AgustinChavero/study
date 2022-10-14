function Hello (name) {
    return `Hello ${name}`;
}
function HelloWord () {
    return `Hello, Word`;
}
//  module.exports.Hello = Hello;
//  module.exports.HelloWord = HelloWord;

//Una variable para exportar varios al mismo tiempo es la siguiente:
module.exports = {
    Hello: Hello,
    HelloWord: HelloWord
};
