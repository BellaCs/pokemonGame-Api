export function getPokemon(id, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'http://172.24.19.11:3000/pokemonForClient/' + id, false);
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.onload = function () {
       //pasem el retorn a la funció callback
       console.log(this.responseText);
       callback(this.responseText);
       
    };
    xmlHttp.onerror = function (error) {
      console.log("Hi ha hagut un error en la consulta a l'API");
      console.log(error);
    };
    xmlHttp.send();
 }


 export function getPokemonOponent(id, callback) {
   var xmlHttp = new XMLHttpRequest();
   xmlHttp.open('GET', 'http://172.24.19.11:3000/pokemonOponent/' + id, false);
   xmlHttp.setRequestHeader('Content-Type', 'application/json');
   xmlHttp.onload = function () {
      //pasem el retorn a la funció callback
      console.log(this.responseText);
      callback(this.responseText);
      
   };
   xmlHttp.onerror = function () {
      console.log("Hi ha hagut un error en la consulta a l'API"); 
   };
   xmlHttp.send();
}