/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// for loop 

for (let n = 1; n <= 40; n++){
    if(n % 2 === 0){
        continue;
    }
    console.log(n);
}

/**
 * ব্যাখ্যা:

for (let n = 1; n <= 40; n++)
👉 লুপ n = 1 থেকে শুরু হবে, আর চলবে যতক্ষণ n <= 40।
প্রতিবার শেষে n++ (মানে 1 করে বাড়বে)।

if (n % 2 === 0)
👉 এখানে % হলো modulus operator → ভাগশেষ বের করে।

যদি n % 2 === 0 হয় → বুঝতে হবে n জোড় সংখ্যা (even)।

continue;
👉 যখন শর্ত মিলে যাবে (মানে n জোড় হলে), তখন continue এর কারণে
লুপের বাকি অংশ skip হয়ে যাবে এবং সাথে সাথে পরের iteration শুরু হবে।

console.log(n);
👉 এই লাইন শুধু তখনই চলবে, যখন n জোড় না হয়ে বিজোড় (odd) হবে।
 */

// while loop

let num = 1;

while (num <= 40){
    
    if ( num % 2 === 0){
        num++
        continue;
    }
    console.log(num);
    num++
}