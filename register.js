/* */
var total = 0
var positions = []
var lastPos = -1
rest()
/**addToTotal */
// in: article sum
// out: total 
function addToTotal(sum) {
    lastPos++
    positions[lastPos] = sum
    total+=sum

    total+= sum
    return total
}

/**change */
// in: given
// out: change
function change(given) {
    var rest =  given - total
    return rest
}

/**reset for next customer */
function reset(){
var total = 0
var positions = []
var lastPos = -1
}