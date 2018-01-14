var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittle"]

function addElementToBeginningOfArray(array,element) {
  var newarray = [element, ...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array = [element, ...array]
  return array
}

function addElementToEndOfArray(array,element) {
    var newarray = [...array, element]
  return newarray
}

function destructivelyAddElementToEndOfArray(array,element) {
  array = [...array, element]
  return array
}

function accessElementInArray(array,index) {
  return array[index]
  
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

function removeElementFromBeginningOfArray(array){
  return array.slice
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return   array.slice(0,array.length - 1)

}

