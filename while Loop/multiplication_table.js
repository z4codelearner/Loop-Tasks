/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

let num = 5;
let m = 1;
while(m <= 10){
    console.log(`${num} x ${m} = ${num * m}`);
    m++;
}

/**
 * কিভাবে কাজ করছে (বাংলা ব্যাখ্যা)
let num = 5; → এখানে আমরা নামতার জন্য সংখ্যা ৫ সেট করেছি।

let i = 1; → লুপ শুরু হবে ১ থেকে।

while (i <= 10) → যতক্ষণ i ১০ বা তার কম, লুপ চলতে থাকবে।

console.log(`${num} x ${i} = ${num * i}`); → প্রতিবার ৫ গুণ i এর ফল দেখাবে।

i++; → প্রতি বার i ১ করে বাড়বে, যেন ৫×১, ৫×২, ৫×৩... এভাবে ৫×১০ পর্যন্ত চলে।
 */