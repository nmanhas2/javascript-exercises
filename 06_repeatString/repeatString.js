const repeatString = function(string, repeat) {
    if (repeat < 0) return "ERROR";
    let str = "";
    for(let i = 0; i < repeat; i++){
        str += string;
    }

    return str;
};

// Do not edit below this line
module.exports = repeatString;
