/**
 * Subtask-1:
 */


// Find all the odd numbers from 61 to 100.

let numOdd = 61;
while (numOdd <= 100){
    if (numOdd % 2 !==0){ // চেক করছি বিজোড় কিনা
        console.log(numOdd);
    }
    numOdd++
}
/**
 * কিভাবে কাজ করছে (বাংলা ব্যাখ্যা)
let num = 61; → কাউন্ট শুরু হচ্ছে ৬১ থেকে।

while (num <= 100) → যতক্ষণ সংখ্যা ১০০ বা তার কম, লুপ চলবে।

if (num % 2 !== 0) → num কে ২ দিয়ে ভাগ করলে ভাগশেষ ০ না হলে সেটা বিজোড়।

console.log(num); → বিজোড় হলে কনসোলে দেখাবে।

num++; → প্রতিবার ১ করে বাড়াবে।
 */




/**
 * Subtask-2:
 */

// Find all the even numbers from 78 to 98.

let numEven = 78;
while (numEven <= 98){
    if (numEven % 2 === 0){ // চেক করছি জোড় কিনা
        console.log(numEven);
    }
    numEven++
}
/**
 * 
 * কিভাবে কাজ করছে (বাংলা ব্যাখ্যা)
let num = 78; → কাউন্ট শুরু হচ্ছে ৭৮ থেকে।

while (num <= 98) → যতক্ষণ সংখ্যা ৯৮ বা তার কম, লুপ চলবে।

if (num % 2 === 0) → ২ দিয়ে ভাগ করলে ভাগশেষ ০ হলে সেটা জোড় সংখ্যা।

console.log(num); → জোড় হলে কনসোলে দেখাবে।

num++; → প্রতিবার ১ করে বাড়বে।
 */