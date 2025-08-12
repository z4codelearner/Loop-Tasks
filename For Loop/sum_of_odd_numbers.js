/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */

let totalOdd = 0;
 for (let oddnum = 91; oddnum <= 129; oddnum++ ){
    if (oddnum % 2 !==0){
        totalOdd = totalOdd + oddnum; // totalOdd += oddnum 
    }
 }
 console.log("Sum of odd numbers from 91 to 129 is:", totalOdd);

/**
 * কিভাবে কাজ করছে (বাংলা ব্যাখ্যা)
let sum = 0; → যোগফল রাখার জন্য একটি ভেরিয়েবল।

for (let num = 91; num <= 129; num++) → ৯১ থেকে ১২৯ পর্যন্ত লুপ।

if (num % 2 !== 0) → সংখ্যাটি বিজোড় কিনা চেক করা হচ্ছে।

sum += num; → যদি বিজোড় হয়, তাহলে যোগফলে যোগ করা হচ্ছে।

লুপ শেষে console.log দিয়ে মোট যোগফল দেখানো হচ্ছে।
 */






/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

let totalEven = 0;

for(let evenNum = 52; evenNum <= 86; evenNum=evenNum+2){
    if(evenNum % 2 === 0){
        totalEven = totalEven + evenNum;
    }
}console.log('Sum of even numbers from 52 to 85 is:', totalEven);

/**
 * কিভাবে কাজ করছে (বাংলা ব্যাখ্যা)
let sum = 0; → যোগফল রাখার জন্য একটি ভেরিয়েবল।

for (let num = 52; num <= 86; num++) → ৫2 থেকে ৮6 পর্যন্ত লুপ।

if (num % 2 === 0) → সংখ্যাটি জোড় কিনা চেক করা হচ্ছে।

sum += num; → যদি জোড় হয়, তাহলে যোগফলে যোগ করা হচ্ছে।

লুপ শেষে console.log দিয়ে মোট যোগফল দেখানো হচ্ছে।
 */