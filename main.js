function LinkedList() {
    let head = null;
    
    const createHeadNode = (val) => {
        if (head === null) {
            head = createNode();
            head.setValue(val);
        }
    }

    const append = (val) => {
        const newNode = createNode();
        newNode.setValue(val);

        let tmp = head;
        while (tmp.getNextNode() !== null) {
            tmp = tmp.getNextNode();
        }
        tmp.setNextNode(newNode);
    }

    const prepend = (val) => {
        const newNode = createNode();

        newNode.setValue(val);
        newNode.setNextNode(head);
        head = newNode;
    }

    const size = () => {
        let tmp = head;
        let total = 0; 
        
        while (tmp !== null) {
            tmp = tmp.getNextNode();
            total++;
        }

        return total;
    }
    
    const getHead = () => head;
    
    const getTail = () => {
        let tmp = head;
        let tail = null; 
        
        while (tmp !== null) {
            tail = tmp;
            tmp = tmp.getNextNode();
        }

        return tail;
    }

    const at = (index) => {
        let count = 0;
        let tmp = head;
        let current = null;

        while (tmp !== null) {
            if (count === index) {
                current = tmp;
            }
            count++;
            tmp = tmp.getNextNode();
        }

        return current;
    }

    const pop = () => {
        let length = size();
        let current = head;
        let prev = null;

        if (length === 1) {
            head = null;
        }

        while (current !== null) {
            prev = current;
            prev.setNextNode(null);
            current = current.getNextNode();
        }
    }

    const contains = (value) => {
        let tmp = head;
        let result = null;

        while (tmp !== null) {
            
            if (tmp.getValue() === value) {
                result = true;
                break;
            } else {
                result = false;
            }

            tmp = tmp.getNextNode();
        }

        return result;
    }

    const find = (value) => {
        let tmp = head;
        let count = 0;

        while (tmp !== null) {
            
            if (tmp.getValue() === value) {
                return count;
            } else {
                count++
                tmp = tmp.getNextNode();
            }

        }

        return null;
    }

    const toString = () => {
        let tmp = head;
        let str = '';

        while (tmp !== null) {
            str += `( ${tmp.getValue()} )` + ' -> ';
            tmp = tmp.getNextNode();
        }
        str += null;

        return str;
    }

    return {
        createHeadNode,
        append,
        prepend,
        size,
        getHead,
        getTail,
        at,
        pop,
        contains,
        find,
        toString
    }
}

function createNode() {
    let value = null;
    let nextNode = null;

    const getValue = () => value;
    const getNextNode = () => nextNode;

    const setValue = (newVal) => {
        value = newVal;
    }
    
    const setNextNode = (newNext) => {
        nextNode = newNext;
    }

    return {
        getValue, 
        getNextNode,
        setValue,
        setNextNode
    }
}

const linkedList = LinkedList();

linkedList.createHeadNode(20);
linkedList.append(90);
linkedList.append(10);
linkedList.prepend(5);
linkedList.pop();

console.log(linkedList.at(1).getValue());
console.log(linkedList.contains(55));
console.log(linkedList.find(10));
console.log(linkedList.toString());