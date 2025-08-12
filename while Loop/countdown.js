/***

Implement a countdown timer that counts down from 21 to 15.

 */

let count = 21;

while (count >= 15){
    console.log(count);
    count--; // প্রতি লুপে ১ করে কমানো হচ্ছে

}
console.log('Countdown finished!');


/**
 * কিভাবে কাজ করছে (বাংলা ব্যাখ্যা)
let count = 21; → কাউন্ট শুরু হবে ২১ থেকে।

while (count >= 15) → শর্ত অনুযায়ী যতক্ষণ count ১৫ বা তার বেশি, লুপ চলবে।

console.log(count); → বর্তমান সংখ্যা প্রিন্ট হবে।

count--; → প্রতিবার লুপের শেষে কাউন্ট ১ কমে যাবে।

শর্ত মিথ্যা হলে → লুপ বন্ধ হয়ে "Countdown finished!" প্রিন্ট হবে।
 */