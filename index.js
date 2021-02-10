// Your code here

function mapToNegativize(sourceArray) {
    let newArray = sourceArray.map(x => x * -1);
    return newArray
}

function mapToNoChange(sourceArray) {

    let newArray = sourceArray.map(x => x); 
    return newArray 

}

function mapToDouble(sourceArray) {
    let newArray = sourceArray.map(x => x * 2);
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = sourceArray.map(x => x * x);
    return newArray
}

function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for(let i=0; i < src.length; i++) {
        total = total + src[i] 
    }

    return total 
}

function reduceToAllTrue(src) {
    for(let i=0; i < src.length; i++){
        if(!src[i]) return false 
    }
    return true 
}

function reduceToAnyTrue(src) {
    for(let i=0; i < src.length; i++) {
        if (src[i]) return true
    }

    return false 
}