const backspaceCompare = (s, t) => {
  return console.log(compare(s, t));
};

function compare(a, b) {
  let aPointer = a.length - 1,
    bPointer = b.length - 1,
    aSkip = 0,
    bSkip = 0;

  while (aPointer >= 0 || bPointer >= 0) {
    while (aPointer >= 0) {
      if (a[aPointer] === "#") {
        aSkip++;
        aPointer--;
      } else if (aSkip > 0) {
        aSkip--;
        aPointer--;
      } else {
        break;
      }
    }
    while (bPointer >= 0) {
      if (b[bPointer] === "#") {
        bSkip++;
        bPointer--;
      } else if (bSkip > 0) {
        bSkip--;
        bPointer--;
      } else {
        break;
      }
    }

    if (a[aPointer] !== b[bPointer]) {
      return false;
    } else {
      aPointer--;
      bPointer--;
    }
    return true;
  }
}

backspaceCompare("ab#c", "ad#c");
backspaceCompare("ab##", "c#d#");
backspaceCompare("a##c", "#a#c");
backspaceCompare("a#c", "b");
