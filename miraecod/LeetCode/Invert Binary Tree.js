// ? https://leetcode.com/problems/invert-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function (root) {
  const reverseNode = (node) => {
    if (node === null) return null;

    const left = reverseNode(node.left);
    const right = reverseNode(node.right);

    node.left = right;
    node.right = left;

    return node;
  };
  return reverseNode(root);
};
