/***

Generate a multiplication table for number 9

 */

let num = 9;

for (let m = 1; m <= 10; m++){
    console.log(`${num} x ${m} = ${num * m}`);
}


/**
 * কিভাবে কাজ করছে (বাংলা ব্যাখ্যা)
const num = 5; → নামতার জন্য সংখ্যা ৫ সেট করেছি।

for (let i = 1; i <= 10; i++) → ১ থেকে ১০ পর্যন্ত লুপ চালাচ্ছে।

console.log(`${num} x ${i} = ${num * i}`); → প্রতি ধাপে ৫ গুণ i এর ফল দেখাচ্ছে।
 */