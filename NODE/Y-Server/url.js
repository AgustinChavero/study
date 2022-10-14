const myURL = new URL ('https://www.localhost.org/cursos/programation?order=views&level=1');

console.log(myURL.hostname); //www.localhost.org
console.log(myURL.pathname); //  /cursos/programation
console.log(myURL.searchParams); // {'order' => 'views', 'level' => '1'}

console.log(myURL.searchParams.get('order')); // views
console.log(myURL.searchParams.get('level')); // 1
