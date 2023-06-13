function minmax(arr){
    return{
        max: Math.max(...arr),
        min: Math.min(...arr),
    }
}
let arrays = [ 1,2,3,5,6,7,8,9,4,5,2,5,1,5,1]
console.log(minmax(arrays))