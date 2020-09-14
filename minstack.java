//Java Solution

class MinStack {
    
    private Stack<Integer> array;
    private Stack<Integer> min;

    /** initialize your data structure here. */
    public MinStack() {
        array = new Stack<>();
        min = new Stack<>();
    }
    
    public void push(int x) {
        array.push(x);
        
        int minimum = min.size() > 0 ? Math.min(x, min.peek()) : x;
        min.push(minimum);
    }
    
    public void pop() {
        array.pop();
        min.pop();
    }
    
    public int top() {
        return array.peek();
    }
    
    public int getMin() {
        return min.peek();
    }
}
