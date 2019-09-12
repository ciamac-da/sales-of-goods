function myFunction(Artikel, Artikel1) {

    var price = ("Dein Artikel kostet " + Artikel)

    return (price, Artikel1)

}

var x = myFunction(2, 3);

console.log("your result" + x)


/**maxim */
/**addPos*/
// in: article, amount
// out: total
function addPos(article, amount) {
    var getArticlePrice = getArticlePrice(article)
    var posTotal = articlePrice * amount
    var currentTotal = addToTotal(posTotal)

    return currentTotal
}
/**getArticlePrice */
// in: article:String
// price: Number
function getArticlePrice(articleName){
    var price = 0
    if(articleName == "Socks"){
        price = 7
    } else if (articleName == "Snickers") {
        price = .99
    }
    return price
}

/**pay */
// in: given
// out: change
function pay(given){
    var rest = change(given)
    return rest
} */