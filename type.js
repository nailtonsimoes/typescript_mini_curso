var cardsuits;
(function (cardsuits) {
    cardsuits[cardsuits["Clubs"] = 0] = "Clubs";
    cardsuits[cardsuits["Hearts"] = 1] = "Hearts";
    cardsuits[cardsuits["Sandes"] = 2] = "Sandes";
    cardsuits[cardsuits["Diamonds"] = 3] = "Diamonds";
})(cardsuits || (cardsuits = {}));
function funcao() {
    var x = 1;
    if (x == cardsuits.Clubs) {
        alert('true');
    }
    else {
        alert('false');
    }
}
funcao();
