const removeFromArray = function(array,...args) {
    let removed = array.filter((x) =>{
        return !args.includes(x);
    });
    return removed;
};

// Do not edit below this line
module.exports = removeFromArray;
