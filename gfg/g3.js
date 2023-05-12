//User function Template for javascript

/*
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
*/
console.log(1%5)
class Solution {
    
    duplicates(a, n)
    {
       let new_arr = []
        for (let i = 0; i < n; i++) {
            a[a[i] % n] += n
        }
        for (let i = 0; i < n; i++) {
            if (a[i] / n >= 2) new_arr.push(i)
        }
        return new_arr.length > 0 ? new_arr : [-1]
    }
}