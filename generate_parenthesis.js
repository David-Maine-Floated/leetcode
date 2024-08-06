class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        this.backtrack(n, 0, 0 , [], res)
        return res;
    }


    backtrack(n, openN, closedN, stack, res) {
        if(openN === closedN && openN === n) {
            res.push(stack.join(''))
            return;
        }
        
        if(openN < n) {
            stack.push('(')
            this.backtrack(n, openN + 1, closedN, stack, res);
            stack.pop()
        }
        if(closedN < openN) {
            stack.push(')')
            this.backtrack(n, openN, closedN + 1, stack, res);
            stack.pop()
        }
    }
}