
let count = 0;
let general= 0;
console.log(count);
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let genEl = document.getElementById("gen-el")
function increment (){
    count = count+1
      countEl.innerText = count
    console.log (count);
}
function save() {
    console.log(count)
}
function save() {
    let countStr = count + " - ";
    
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText

    saveEl.textContent += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    general += count
    let generalStr = general;
    genEl.textContent = general
    
    console.log(count)
     count = 0
     countEl.innerText = count
}