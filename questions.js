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
    return isNaN(texte);
}
//texte.substr(indice pour le démarrage, longueur) -> renvoie une partie de la chaine de caractère ciblée
//texte.lastIndexOf() -> renvoie l'indice de la dernière occurence trouvé
var AfficherExtensionString = function (texte) {
    //on donne, substring() lindice équivalent à la dernière occurence "." auquel on a ajouté la valeur 1
    return texte.substring(texte.lastIndexOf('.')+1);
}
//texte.split(séparateur) -> permet de séparer une chaine en plusieurs éléments
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}
//.reverse() -> permet de renverser l'ordre des éléments
//.join(séparateur) -> reunit dse éléments en une chaine de caractère, le séparateu indique ce qui sépare les éléments de la chaine
var InverseString = function (texte) {
   return texte.split('').reverse().join('');
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
return array.map(Math.abs);
}
//Math.round retourne l'arrondi d'un nombre
var sufaceCercle = function (rayon) {
    var cercle = Math.pow(rayon, 2) * Math.PI;
    return Math.round(cercle);
}
//Math.pow(x, y) -> x puissance y
//Math.sqrt(ab + ac) -> permet de calculer la racine carré d'une valeur
var hypothenuse = function (ab, ac) {
var ab = Math.pow(ab, 2);
var ac = Math.pow(ac, 2);

    return Math.sqrt(ac + ab);
}
//cal.toFixed() -> permet de déterminer le nombre de chifrre après la virgule
//parseFloat() -> permet de transformer une chaine de caractère en nombre flottant
var calculIMC = function (poids, taille) {
var cal = poids / (taille * taille);
var cal = cal.toFixed(2);
//Après avoir fait le calcule, en indiquant le nombre de chiffre après la virgule, on transforme le resultat (sous forme de chaine de caractère) en nombre
    return parseFloat(cal);
}
