// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again 

// by continuously following the next pointer. Internally, pos is used to denote the index of the node 

// that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let middle1 = head;
    let middle2 = head;
    while(middle2 && middle2.next && middle2.next.next){
        middle1 = middle1.next;
        middle2 = middle2.next.next;
        if(middle1 === middle2){
            middle1 = head;
            while(middle1 !== middle2){
                middle1 = middle1.next;
                middle2 = middle2.next;
            }
            return middle1;
        }
    }
    return null;
}
