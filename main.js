function LinkedList() {
    let head = null;
    
    const createHeadNode = (val) => {
        if (head === null) {
            head = createNode();
            head.setValue(val);
        }
    }

    const getHead = () => head;

    const traverse = () => {
        let tmp = head;
        
        while (tmp !== null) {
            console.log(tmp.getValue());
            tmp = tmp.getNextNode();
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

    return {
        createHeadNode,
        getHead,
        traverse,
        append
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

const testNode = createNode();
const linkedList = LinkedList();
linkedList.createHeadNode(10)

const head = linkedList.getHead();
const newNode = createNode();
const newNewNode = createNode();

newNode.setValue(5);
head.setNextNode(newNode);
newNewNode.setValue(20);
newNode.setNextNode(newNewNode);

console.log(linkedList.append(90));
console.log(head.getValue());
console.log(head.getNextNode().getValue());
console.log(head.getNextNode().getNextNode().getValue());
console.log(head.getNextNode().getNextNode().getNextNode().getValue());