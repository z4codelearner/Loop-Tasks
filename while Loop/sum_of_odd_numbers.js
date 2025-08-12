/**
 * Subtask-1:

 * Display sum of all the odd numbers from 81 to 131.

 */

let oddNum = 81;
let totalOddNum = 0;

while (oddNum <= 131){
    if (oddNum % 2 !== 0){ // চেক করছি বিজোড় কিনা
        totalOddNum += oddNum; // totalOddNum = totalOddNum + oddNum
    }
    oddNum++
}
console.log('Sum of odd numbers from 81 to 131 is:', totalOddNum);

/**
 * কিভাবে কাজ করছে (বাংলা ব্যাখ্যা)
let num = 81; → লুপ শুরু হবে ৮১ থেকে।

let sum = 0; → যোগফল রাখার জন্য ভ্যারিয়েবল।

while (num <= 131) → যতক্ষণ ১৩১ বা তার কম, লুপ চলবে।

if (num % 2 !== 0) → ২ দিয়ে ভাগ করলে ভাগশেষ ০ না হলে সেটা বিজোড়।

sum += num; → বিজোড় হলে যোগফলে যোগ হবে।

শেষে console.log → মোট যোগফল প্রিন্ট হবে।
 */

/**
 * Subtask-2:

 * Display sum of all the even numbers from 206 to 311.

 */

let evenNum = 206;
let totalEvenNum = 0;

while ( evenNum <= 311){
    if (evenNum % 2 === 0){ // চেক করছি জোড় কিনা
        totalEvenNum += evenNum // totalEvenNum = totalEvenNum + evenNum
    }
    evenNum++
}
console.log('Sum of even numbers from 206 to 311 is:', totalEvenNum);

/**
 * কিভাবে কাজ করছে (বাংলা ব্যাখ্যা)
let num = 206; → লুপ শুরু হবে 206 থেকে।

let sum = 0; → যোগফল রাখার জন্য ভ্যারিয়েবল।

while (num <= 311) → যতক্ষণ ৩1১ বা তার কম, লুপ চলবে।

if (num % 2 === 0) → ২ দিয়ে ভাগ করলে ভাগশেষ ০ হলে সেটা জোড়।

sum += num; → জোড় হলে যোগফলে যোগ হবে।

শেষে console.log → মোট যোগফল প্রিন্ট হবে।
 */