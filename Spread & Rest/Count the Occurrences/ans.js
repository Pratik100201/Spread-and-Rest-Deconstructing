let strings = " Hellos and Byes are the same ! Some may look into it as greetings but it is not !"
function Count(str){
    let words = str.split(" ")
    let map = new Map()
    for(let word of words){
        if(map.has(word)){
            map.set(word,map.get(word)+1)
        }
        else{
            map.set(word,1)
        }
    }
    return map
}
Count(strings)
