function LinkedList() {
    const node = Node();
    
    const headNode = (val, next) => {
        node.setValue(val);
        node.setNextNode(next);

        const valueHead = node.getValue();
        const nextHead = node.getNextNode();

        return {
            valueHead, nextHead
        }
    }

    const headPointer = () => headNode;

    const append = () => {

    }

    // initialNode(va);

    return {
        headNode,
        headPointer
    }
}

function Node(initialVal = null, initialNext = null) {
    let value = initialVal;
    let nextNode = initialNext;

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

const testNode = Node();
// console.log(testNode.getValue());
// console.log(testNode.getNextNode());
// console.log(testNode.setValue(20));
// console.log(testNode.getValue());
// console.log(testNode.setNextNode({val: 2, next: null}));
// console.log(testNode.getNextNode());

const linkedList = LinkedList();
console.log(linkedList.headNode(10, {val: 2, next: null}));
console.log(linkedList.headPointer());