const areSentenceSimilar = (sentence1, sentence2, similarPairs) => {
  if (sentence1.length !== sentence2.length) return console.log(false);
  if (sentence1.join("") === sentence2.join("")) return console.log(true);
  let count = 0;

  for (let i = 0; i < sentence1.length; i++) {
    const w1 = sentence1[i];
    const w2 = sentence2[i];

    for (let j = 0; j < similarPairs.length; j++) {
      const pair = similarPairs[i];

      if (w1 === w2) {
        count++;
        break;
      }
      if (pair.includes(w1) && pair.includes(w2)) {
        count++;
        break;
      }
    }
  }

  if (count === sentence1.length) return console.log(true);
  else return console.log(false);
};

areSentenceSimilar(
  ["great", "acting", "skills"],
  ["fine", "drama", "talent"],
  [
    ["great", "fine"],
    ["drama", "acting"],
    ["skills", "talent"],
  ]
);

areSentenceSimilar(["great"], ["great"], []);
areSentenceSimilar(["great"], ["doubleplus", "good"], ["great", "doubleplus"]);
