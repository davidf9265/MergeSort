// create a const array with 8 elements (unsorted)
const unsorted_array = [5, 3, 1, 4, 2, 8, 6, 7, 13, 10, 9, 11, 12, 14, 15, 16];

// create an array with 4 random numbers
const ra1 = [11, 84, 17];
const ra2 = [12, 54, 13];


function merge(arr1, arr2){
    let k = 0;
    let l = 0;
    let merged_array = [];

    while((k<arr1.length) || (l<arr2.length)){
        if((arr1[k] < arr2[l]) || (l >= arr2.length)){
            console.log("A")
            console.log(k)
            merged_array.push(arr1[k]);
            k++;
        }else{
            console.log("B")
            console.log(l)
            merged_array.push(arr2[l]);
            l++;
        }
    }

    return merged_array;
}

function atomize(arr){
    let newarray = [];
    arr.forEach(element => {
        newarray.push([element]);
    });   
    return newarray;
}

function main(){
    console.log(merge(ra1, ra2));
    
    let atarray = atomize(unsorted_array);

    const cycles = Math.log2(atarray.length)

    for(let i = 0; i < cycles; i++){
        let temparr = [];
        for(let j = 0; j < atarray.length; j+=2) {
            temparr.push(merge(atarray[j], atarray[j+1]));
        }
        atarray = temparr;
    }

    console.log(atarray[0]);
    console.log(atarray[0].length);

    return atarray[0];
}

main();