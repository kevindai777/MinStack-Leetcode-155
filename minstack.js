//Objective is to design a min stack w/ a 'push', 'pop', 'top', and 'getMin' function.
//The 'push' function should push a value onto the min stack and return null. 
//The 'pop' function should pop a value out of the min stack and return null.
//The 'top' function should return the top value of the min stack. If empty, return null.
//The 'getMin' function should return the min value of the min stack. If empty, return null.
//All methods should have a O(1) runtime.


//Design of a min stack using two stacks.

class MinStack {
    constructor() {
        this.arr = []
        this.min = []
    }

    push(val) {
        this.arr.push(val)

        if (this.min.length == 0) {
            this.min.push(val)
        } else {
            this.min.push(Math.min(this.min[this.min.length - 1], val))
        }
    }

    pop() {
        this.arr.pop()
        this.min.pop()
        return null
    }

    top() {
        if (this.arr.length !== 0) {
            return this.arr[this.arr.length - 1]
        }
        return null
    }

    getMin() {
        if (this.min.length !== 0) {
            return this.min[this.min.length - 1]
        }
        return null
    }
}

let stack = new MinStack()
stack.push(5)
stack.push(8)
stack.push(6)
stack.top()
stack.pop()
stack.top()
stack.getMin()