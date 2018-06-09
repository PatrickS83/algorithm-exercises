// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr, arrZeros = []) {
  const arrCopy = [...arr];
  const arrZerosCopy = [...arrZeros];
  const index = arrCopy.indexOf(0);
  if (index !== -1) {
    arrCopy.splice(index, 1);
    arrZerosCopy.push(0);
  }
  return index === -1 ? [...arrCopy, ...arrZerosCopy] : moveZeros(arrCopy, arrZerosCopy);
}