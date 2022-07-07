// Problem: 01
// Write a program to print all even numbers from 1 to N.
// অনুবাদ: 1 থেকে N পর্যন্ত সমস্ত জোড় সংখ্যা প্রিন্ট করার জন্য একটি প্রোগ্রাম লিখুন।
function even(n) {
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
even(99);
