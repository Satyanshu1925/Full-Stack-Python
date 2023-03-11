var headOne = document.querySelector("#one")
var headTwo = document.querySelector("#two")
var headThree = document.querySelector("#three")

var raw_headOne = headOne.textContent
var color_headOne = headOne.style.color

console.log(color_headOne)
console.log(document.getElementById("#one"))

headOne.addEventListener('mouseover',function(){
    headOne.textContent = "Mouse Currently Over";
    headOne.style.color = 'red';
})
headOne.addEventListener('mouseout',function(){
    headOne.textContent = raw_headOne;
    headOne.style.color = String(color_headOne);
})
headTwo.addEventListener('click',function(){
    headTwo.textContent = "Clicked On";
    headTwo.style.color = String(color_headOne);

})

headThree.addEventListener('dblclick',function(){
    headThree.textContent = "I was double clicked"
    headThree.style.color = String(color_headOne)
})