// Problem: 02
// Write a program to find the sum of numbers from N to M.
// অনুবাদ: N থেকে M পর্যন্ত সংখ্যার যোগফল বের করার জন্য একটি প্রোগ্রাম লিখুন ।
function sum(m, n) {
  let result = 0;
  for (var i = m; i <= n; i++) {
    result += result[i];
  }
  return result;
}
console.log(sum(10, 50));
