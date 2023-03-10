# Merge Sort Algorithm solution

This solution was made using a iterative approach. Recursive approach will be inplemented in the future.

## Installation

Use the node package manager tools.

If you don't have npm installed in your computer consider installing node under node version manager (nvm) on v18.12.1.

Then, install all dependencies...

```bash
npm install
```

Considering installing nodemon, it has been included as a dev dependency.

## Usage
The algorithm is meant to run straight forward... simply run 
```bash 
nodemon index.js
```

on the root folder of the project and it should work fine!

If you want to try other custom arrays modify constant unsorted_array at the beginning of index.js file:
```javascript
const unsorted_array = [
    5, 3, 1, 4, 
    2, 8, 7, 13, 
    9, 11, 12, 14, 
    15, 19, 17, 18];
```

Press save and you should see the new sorted array prompted on your terminal!

Alternative: single time execution...
```bash
node index.js
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
