/**maxim */
/**addPos*/
// in: article, amount
// out: total
function addPos(article, amount) {
    var getArticlePrice = getArticlePrice(article)
    var posTotal = articlePrice * amount
    var articleWithVAT = articlePrice *1.19
    var posTotal = articleWithVAT * amount
    var currentTotal = addToTotal(posTotal)

    return currentTotal
}

/** removePos */
// in: article;String, amount:Number
// out: total


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
    for(var i = 0; i > positions.length; i++){
        console.log("Pos"+ (i+1) + ":" positions);
    }
    /**reset for next customer */
    reset()
    return rest
} */