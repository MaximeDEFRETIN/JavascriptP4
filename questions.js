/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
//replace("","") remplace une valeur par une autre
var remplaceECar = function (texte) {
      return texte.replace("e"," ");
}
//texte1.concat(texte2) -> concatène 2 variables
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
//charAt() -> retourne le caractère
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
//texte.substr(0,9) -> retourne les caractères de l'indice 0 à 9
var afficher9Car = function (texte) {
    return texte.substr(0,9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
//trim() supprime les espaces avant et après la variable
var SupprEspaceString = function (texte) {
    return texte.trim();
}
//isNaN() détermine si la variable passée en paramètre est nombre ou pas
var IsString = function (texte) {
  var text = isNaN(texte);
    return text;
}
var AfficherExtensionString = function (texte) {
    return;
}
var NombreEspaceString = function (texte) {
    return;
}
var InverseString = function (texte) {
var text = texte.reverse()
    return text;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
//Math.abs() retourne l'entier positif
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
var array = array.slice(0);
var absolue = Math.abs(array);
return alert(absolue);
}
//Math.round retourne l'arrondi d'un nombre
var sufaceCercle = function (rayon) {
    var cercle = Math.pow(rayon, 2) * Math.PI;
var result = Math.round(cercle);
    return result;
}
var hypothenuse = function (ab, ac) {
var ab = Math.pow(ab, 2);
var ac = Math.pow(ac, 2);

var result = Math.sqrt(ac + ab);
    return result;
}
var calculIMC = function (poids, taille) {
/*var result = poids / Math.pow(taille, 2);
    return parseInt(poids, 2)*/;
}
