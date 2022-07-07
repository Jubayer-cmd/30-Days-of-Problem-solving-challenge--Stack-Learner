// Problem: 04
// Write a function that takes a word and returns the new word without including the first two characters.
// অনুবাদ: একটি ফাংশন লিখুন যা একটি শব্দ(স্ট্রিং ) নেয় এবং প্রথম দুটি অক্ষর অন্তর্ভুক্ত না করে নতুন শব্দটি(স্ট্রিং) রিটার্ন করে।

function newWord(text) {
  let str = [];
  for (i = 2; i < text.length; i++) {
    str += text[i];
  }
  return str;
}
console.log(newWord("google"));
