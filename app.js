//push pop  shift unshift  splice slice

// var arr=["red","blue","green"]
// //remove last index
// // arr.pop()
// //add
// var color=prompt("enter color u want to add")
// arr.push(color)
// console.log(arr)

var array=["green","blue","yellow"]
document.write(array)


var user=prompt("Write add-start remove last add-start remove-start")

if(user=="add-last"){
var color=prompt("enter color u want to add")
 array.push(color)
}
else if(user=="remove-last"){
    array.pop()
}
else if(user=="add-start"){
    var color=prompt("enter color u want to add")
    array.unshift(color)
}
else if(user=="remove-start"){
    array.shift()
}

document.write(array)