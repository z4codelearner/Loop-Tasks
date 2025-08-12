/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

for (let oddnum = 61; oddnum <= 100; oddnum++){
    if (oddnum % 2 !== 0){ // চেক করছি বিজোড় কিনা
        console.log(oddnum);
    }
}
/**
 * কিভাবে কাজ করছে (বাংলা ব্যাখ্যা)
for (let num = 61; num <= 100; num++) → লুপ ৬১ থেকে শুরু হয়ে ১০০ পর্যন্ত চলবে।

if (num % 2 !== 0) → ২ দিয়ে ভাগ করলে ভাগশেষ ০ না হলে সেটা বিজোড় সংখ্যা।

console.log(num); → শর্ত সত্য হলে সংখ্যাটি প্রিন্ট করবে।

num++ → প্রতিবার লুপ শেষে ১ করে বাড়বে।
 */




/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

for (let evenNum = 78; evenNum <= 98; evenNum++){
    if (evenNum % 2 === 0){ // চেক করছি জোড় কিনা
        console.log(evenNum);
    }
}

/**
 * কিভাবে কাজ করছে (বাংলা ব্যাখ্যা)
for (let num = 78; num <= 98; num++) → লুপ 78 থেকে শুরু হয়ে ১০০ পর্যন্ত চলবে।

if (num % 2 === 0) → ২ দিয়ে ভাগ করলে ভাগশেষ ০ না হলে সেটা জোড় সংখ্যা।

console.log(num); → শর্ত সত্য হলে সংখ্যাটি প্রিন্ট করবে।

num++ → প্রতিবার লুপ শেষে 0 করে বাড়বে।
 */