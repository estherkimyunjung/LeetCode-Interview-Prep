// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
  if (strs.length == 0) return console.log("no exsit prefix");

  var final = strs[0];
  var min = strs[0].length;
  for (var i = 0; i < strs.length; i++) {
    if (strs[i].length < min) {
      min = strs[i].length;
      final = strs[i];
    }
  }

  for (var i = final.length; i >= 0; i--) {
    var flag = true;
    var val = final.substring(0, i);
    for (var j = 0; j < strs.length; j++) {
      if (strs[j].substring(0, i) != val) {
        flag = false;
        break;
      }
    }
    if (flag == true) {
      return console.log(val);
      break;
    }
  }
};

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);
