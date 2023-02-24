const lodash = require('lodash');

// create a const array with 8 elements (unsorted)
const unsorted_array = [
    5, 3, 1, 4, 
    2, 8, 7, 13, 
    9, 11, 12, 14, 
    15, 19, 17, 18];

// create an array with 4 random numbers
const ra1 = [11, 84, 17];
const ra2 = [12, 54, 13];


// merge function
function merge(arr1, arr2){
    let k = 0;
    let l = 0;
    let merged_array = [];

    while((k<arr1.length) || (l<arr2.length)){
        if((arr1[k] < arr2[l]) || (l >= arr2.length)){
            // console.log("A")
            // console.log(k)
            merged_array.push(arr1[k]);
            k++;
        }else{
            // console.log("B")
            // console.log(l)
            merged_array.push(arr2[l]);
            l++;
        }
    }

    return merged_array;
}

// atomize arrays
function atomize(arr){
    let newarray = [];
    arr.forEach(element => {
        newarray.push([element]);
    });   
    return newarray;
}

// main algorithm: Merge Sort
function mergeSort(atarray){
    const cycles = Math.log2(atarray.length)

    for(let i = 0; i < cycles; i++){
        let temparr = [];
        for(let j = 0; j < atarray.length; j+=2) {
            temparr.push(merge(atarray[j], atarray[j+1]));
        }
        atarray = temparr;
    }

    return atarray;
}

function main(){
    // augment array to afford n size arrays (no complexity added)
    let ceil = Math.ceil(Math.log2(unsorted_array.length)) // finding ceil

    let arr_max = Math.max(...unsorted_array) + 1000; // identifying max value
    let diference = Math.pow(2, ceil) - unsorted_array.length // diff between length and ceil

    let augmentation = lodash.range(arr_max, arr_max + diference) // creating augmentation array
    let augmented_array = [...unsorted_array, ...augmentation] // merging arrays
    
    let atarray = atomize(augmented_array); // atomize array

    // merge sort
    let resultarray = mergeSort(atarray);

    return resultarray[0].slice(0,unsorted_array.length);
}


// main call
console.log(main());