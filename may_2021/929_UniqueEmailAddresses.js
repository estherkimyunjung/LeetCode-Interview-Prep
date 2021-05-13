// ignor . in local email side
// ignor + after words in local email side
// all email is unique.

// local name + domain name(after @)

// const numUniqueEmails1 = (emails) => {
//   console.log(emails);
//   const output = new Set();

//   for (const email of emails) {
//     const domain = email.slice(email.indexOf("@"));
//     const local = email
//       .slice(0, email.indexOf("@" + 1))
//       .slice(0, email.indexOf("+"))
//       .replace(/[.]/g, "");
//     output.add(local + domain);
//   }
//   return console.log(output, output.size);
// };

// numUniqueEmails1([
//   "test.email+alex@leetcode.com",
//   "test.e.mail+bob.cathy@leetcode.com",
//   "testemail+david@lee.tcode.com",
// ]);
// numUniqueEmails1(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]);

const numUniqueEmails2 = (emails) => {
  const output = new Set();

  for (const email of emails) {
    let [local, domain] = email.split("@");

    local = local.split("+")[0].replace(/[.]/g, "");

    console.log(local);
    console.log(domain);

    output.add(local + "@" + domain);
  }
  return console.log(output, output.size);
};

numUniqueEmails2([
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
]);
numUniqueEmails2(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]);
