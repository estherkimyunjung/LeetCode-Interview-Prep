// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// const longestCommonPrefix = (strs) => {
//   if (strs.length == 0) return console.log("no exsit prefix");

//   var final = strs[0];
//   var min = strs[0].length;
//   for (var i = 0; i < strs.length; i++) {
//     if (strs[i].length < min) {
//       min = strs[i].length;
//       final = strs[i];
//     }
//   }

//   for (var i = final.length; i >= 0; i--) {
//     var flag = true;
//     var val = final.substring(0, i);
//     for (var j = 0; j < strs.length; j++) {
//       if (strs[j].substring(0, i) != val) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag == true) {
//       return console.log(val);
//       break;
//     }
//   }
// };

// const longestCommonPrefix = (str, prefix = "", j = 0) => {
//   if (!str.length) return "";

//   while (str[0][j] && str.every((_, i) => str[0][j] === str[i][j]))
//     prefix += str[0][j++];

//   return console.log(prefix);
// };

// class TrieNode {
//   constructor() {
//     this.children = new Array(26);
//     this.isEnd = false;
//   }

//   getLinks() {
//     let cur = this;
//     let count = 0;
//     for (let i = 0; i < cur.children.length; i++) {
//       if (cur.children[i]) {
//         count++;
//       }
//     }
//     return count;
//   }

//   getCurLetter() {
//     let cur = this;
//     let curLetter = "";
//     for (let i = 0; i < cur.children.length; i++) {
//       if (cur.children[i]) {
//         curLetter = String.fromCharCode(i + 97);
//       }
//     }
//     return curLetter;
//   }
// }
// let root;

// var buildTrie = function (word) {
//   let cur = root;
//   for (let i = 0; i < word.length; i++) {
//     let ch = word[i];
//     if (!cur.children[ch.charCodeAt(0) - "a".charCodeAt(0)]) {
//       cur.children[ch.charCodeAt(0) - "a".charCodeAt(0)] = new TrieNode();
//     }
//     cur = cur.children[ch.charCodeAt(0) - "a".charCodeAt(0)];
//   }
//   cur.isEnd = true;
// };
// var longestCommonPrefix = function (strs) {
//   root = new TrieNode();
//   let maxLength = 0;
//   let maxStr = "";
//   for (let str of strs) {
//     buildTrie(str);
//     if (str.length > maxLength) {
//       maxStr = str;
//       maxLength = str.length;
//     }
//   }

//   let result = "";
//   let i = 0;

//   while (root && i < maxLength && root.getLinks() === 1 && !root.isEnd) {
//     result += root.getCurLetter();
//     root = root.children[root.getCurLetter().charCodeAt(0) - "a".charCodeAt(0)];
//   }

//   return result;
// };

var longestCommonPrefix = function (strs) {
  return trieSolution(strs);
};

/*
T = O(S)
S = O(S)
*/
const trieSolution = (strs) => {
  const trie = new Trie();
  for (let str of strs) {
    // Edge case: In case of a string is an empty string, the prefix would be emptry string
    if (str === "") {
      return "";
    }
    trie.insert(str);
  }
  return trie.getPrefix();
};

function TrieNode() {
  this.isEnd = false;
  this.children = new Map();
}

function Trie() {
  this.root = new TrieNode();
}

Trie.prototype.insert = function insert(str) {
  let node = this.root;
  for (const char of str) {
    if (!node.children.has(char)) {
      node.children.set(char, new TrieNode());
    }
    node = node.children.get(char);
  }
  node.isEnd = true;
};

Trie.prototype.getPrefix = function getPrefix() {
  let prefix = "";
  const stack = [this.root];
  while (stack.length > 0) {
    const node = stack.pop();
    if (node.children.size !== 1 || node.isEnd) {
      return console.log(prefix);
    }
    node.children.forEach((childNode, childKey) => {
      prefix += childKey;
      stack.push(childNode);
    });
  }
  return console.log(prefix);
};

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);
