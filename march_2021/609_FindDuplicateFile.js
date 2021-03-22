// give a string with filepath write a function that check all content is duplicate and return the duplicate contents file path.

// Is file name without content? - No worry about the case
// Is file is excited? - always file in the path.
// when return the order in not matter.

// create function findDuplicate

// function findDuplicate(arr) {
//   let fileMap = new Map();
//   // value will be path (path and join file name with /

//   for (let i = 0; i < arr.length; i++) {
//     let filePaths = arr[i].split(" ");
//     let rootPath = filePaths[0];
//     console.log("-----------------");
//     console.log(rootPath);
//     console.log("filePaths", filePaths);
//     console.log("-----------------");

//     let file = arr[i].split("");

//     console.log(file);
//     // Hashmap with key => content
//     let openParIdx = 0;
//     let closeParIdx = 0;

//     for (let j = 0; j < file.length; j++) {
//       const fileChar = file[j];
//       let tempKey = "";

//       if (fileChar === "(") {
//         openParIdx = j;
//       } else if (fileChar === ")") {
//         closeParIdx = j;
//         console.log("openParIdx", openParIdx);
//         console.log("closeParIdx", closeParIdx);

//         const tempKey = file.slice(openParIdx + 1, closeParIdx).join("");

//         let fileName = arr[i].split(" ").join("/").substr(0, openParIdx);
//         console.log(fileName);

//         fileMap.set(tempKey, fileName);
//         console.log("FM", fileMap);
//       }
//     }
//   }

// loop through arr and split with space to create root path and file name and content

// return value will be full path with file name by content
// }

// var findDuplicate = function (paths) {
//   let group = {};
//   for (let i = 0; i < paths.length; i++) {
//     let path = paths[i].split(" "); // split by space so we can use the information easily
//     for (let j = 1; j < path.length; j++) {
//       let temp = path[j].split("("); // split again and temp will always be [`the file name`, `the file content`]
//       if (group[temp[1]] == null) group[temp[1]] = [];
//       group[temp[1]].push(path[0] + "/" + temp[0]); // push the complete file path
//     }
//   }
//   return console.log([...Object.values(group)].filter((val) => val.length > 1)); // filter out groups with only 1 content in it.
// };

// const findDuplicate = (paths) => {
//   const map = new Map();
//   for (let text of paths) {
//     for (let i = 1, files = text.split(" "); i < files.length; i++) {
//       let paren = files[i].indexOf("(");
//       let content = files[i].substring(paren + 1, files[i].length - 1);
//       map[content] = map[content] || [];
//       map[content].push(files[0] + "/" + files[i].substr(0, paren));
//     }
//   }
//   return console.log(Object.values(map).filter((dups) => dups.length > 1));
// };

// give a string with filepath write a function that check all content is duplicate and return the duplicate contents file path.

// Is file name without content? - No worry about the case
// Is file name can be duplicate with same path?
// Is file always existing in the directory.
// when return the order in not matter.

// create function findDuplicate

const findDuplicate = (paths) => {
  //parse the paths
  //extract file name and contents
  //create out array
  const conentMap = new Map();
  let results = [];

  for (let path of paths) {
    const [dir, ...files] = path.split(" ");
    console.log("path", path);

    if (files.length > 0) {
      files.forEach((file) => {
        const conentStart = file.indexOf("(");

        //parse content
        const content = file.substring(conentStart + 1, file.length - 1);

        //parse filename
        const fileName = file.substring(0, conentStart);

        const fullPath = dir + "/" + fileName;

        if (conentMap.has(content)) {
          conentMap.set(content, [...conentMap.get(content), fullPath]);
        } else {
          conentMap.set(content, [fullPath]);
        }
      });
    }
  }

  for (let [key, val] of conentMap) {
    if (val.length > 1) {
      results.push(val);
    }
  }

  return console.log(results);
};

findDuplicate([
  "root/a 1.txt(abcd) 2.txt(efgh)",
  "root/c 3.txt(abcd)",
  "root/c/d 4.txt(efgh)",
  "root 4.txt(efgh)",
  "root/e ",
]);
