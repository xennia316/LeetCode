/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let dummyHead = new ListNode(0)
    let current = dummyHead
    let carry = 0

    while(l1 !== null || l2 !== null || carry !== 0){

        let num1 = l1 ? l1.val : 0
        let num2 = l2 ? l2.val : 0

        let sum = num1 + num2 + carry

        carry = Math.floor(sum/10)

        current.next = new ListNode(sum % 10)
        current = current.next

        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }

return dummyHead.next
};