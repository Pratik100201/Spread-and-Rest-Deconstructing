let add = document.getElementById("add")
let Arrays = []
add.addEventListener("click",()=>{
   
    let input = document.getElementById("input").value
    for(let i = 0 ; i< input.length ; i++){
        Arrays.push(input[i])
    }
  
})
let submit = document.getElementById("submit")
submit.addEventListener("click",()=>{
    let b = new Set(Arrays)
    console.log(b)
})
