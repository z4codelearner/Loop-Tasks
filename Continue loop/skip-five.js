/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

// while loop

let num = 55;

while (num <= 85){
    if (num % 2 === 0 || num % 5 === 0){
        num++;
        continue;
    }
    console.log(num);
    num++;
}

/***
 * ব্যাখ্যা:

num % 2 === 0 → যদি সংখ্যা জোড় হয়।

num % 5 === 0 → যদি সংখ্যা 5 দিয়ে বিভাজ্য হয়।

উপরের কোনো শর্ত মিলে গেলে → num++ দিয়ে পরের সংখ্যায় চলে যাবে এবং continue দিয়ে লুপের বাকি অংশ skip করবে।

অন্যথায় → বিজোড় সংখ্যা প্রিন্ট হবে এবং num++ হবে।
 */


// for Loop

for (let z = 55; z <= 85; z++){
    if (z % 2 === 0 || z % 5 === 0){
        continue;
    }
    console.log(z);
}
/**
 * ব্যাখ্যা:

num % 2 === 0 → জোড় সংখ্যা

num % 5 === 0 → 5 দিয়ে বিভাজ্য সংখ্যা

যদি উপরের কোনো শর্ত মিলে, continue চলে যাবে → লুপের বাকি অংশ skip।

অন্যথায় সংখ্যা প্রিন্ট হবে।
 */