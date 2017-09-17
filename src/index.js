module.exports = function multiply(first, second) {
    //our  numbers
    if (Number(first) >= Number(second)) {
        var fir = first;
        var sec = second;
    } else {
        var fir = second;
        var sec = first;
    }
    // array for multiplication
    var numberOne = [];
    // variables for operations
    var res;
    var decades;
    var num = 0;
    var iter = 0;
    var backValue;

    for (var i = sec.length - 1; i >= 0; i--) {
        decades = 0;
        //present array how  0XXXXXXX
        //                  +XXXXXXX
        //makes work easier
        if (i != sec.length - 1) {
            numberOne.unshift(0);
        }
        for (var j = fir.length - 1; j >= 0; j--) {
            //create the first model of our result
            if (i == sec.length - 1) {
                res = fir[j] * sec[i] + decades;
                numberOne.unshift(res % 10);
                decades = Math.floor(res / 10);
                // add decates to the beginning
                if (decades != 0 && j == 0) {
                    numberOne.unshift(decades);
                }
            } else {
                backValue = numberOne[num];
                res = fir[j] * sec[i] + decades + backValue;
                numberOne[num] = res % 10;
                decades = Math.floor(res / 10);
                num--;
                // add decates to the beginning
                if (decades != 0 && j == 0) {
                    if (num < 0) { numberOne.unshift(decades); } else {
                        numberOne[num] = decades;
                    }
                }
            }
        }
        // select the element that we will change 
        iter++;
        num = numberOne.length - iter;
    }
    //if the first number is '0' ... will delete it
    if (numberOne[0] == 0) {
        numberOne.splice(0, 1);
    }
    return numberOne.join('');
}