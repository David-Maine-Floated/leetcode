class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
      let start = 0
      let end = numbers.length - 1


      while(start < end) {
        console.log('start', numbers[start])
        console.log('end', numbers[end])
        console.log(numbers)
        let result = numbers[start] + numbers[end];
        console.log('result', result)
        console.log('target', target)
        if(result == target) return [start + 1, end + 1]
        if(result > target) end--
        if(result < target) start++
      }

    }
}