//Define Node for linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//create a linked list
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}
//Reverse a linked list
function reverseList(head) {
  let curr = head;
  let prev = null;
  while (curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

//convert linked list to arry for easy display
function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current != null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}
//Print linked list
function printList(head) {
  if (head === null) {
    console.log("null");
    return;
  }
  const arr = linkedListToArray(head);
  console.log(arr.join("->"));
}
console.log("Test Case 1: [1,2,3,4,5]");
let head1 = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original:");
printList(head1);
let reversed1 = reverseList(head1);
console.log("Reversed:");
printList(reversed1);
console.log();

console.log("Test Case 2: [1,2]");
let head2 = createLinkedList([1, 2]);
console.log("Original:");
printList(head2);
let reversed2 = reverseList(head2);
console.log("Reversed:");
printList(reversed2);
console.log();

console.log("Test Case 3: []");
let head3 = createLinkedList([]);
console.log("Original:");
printList(head3);
let reversed3 = reverseList(head3);
console.log("Reversed:");
printList(reversed3);
console.log();

console.log("Test Case 4: [1] (Single node)");
let head4 = createLinkedList([1]);
console.log("Original:");
printList(head4);
let reversed4 = reverseList(head4);
console.log("Reversed:");
printList(reversed4);
