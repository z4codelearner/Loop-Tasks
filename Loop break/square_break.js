/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

// while loop

let num = 24;

while (num <= 100){
    if(Number.isInteger(Math.sqrt(num))){
        console.log('First Square Number Found:', num);
        break;
    }
    num++
}

/**
 * 
 * 🔎 ব্যাখ্যা:

num = 1 থেকে শুরু করে 100 পর্যন্ত লুপ চলবে।

Math.sqrt(num) দিয়ে square root বের করছি।

যদি সেটা পূর্ণসংখ্যা হয় → তাহলে num একটা square number।

সেগুলো কনসোলে প্রিন্ট হবে।

প্রথম square number পেলেই break হবে।
 */


// For Loop

for (let num = 31; num <= 100; num++){
    if (Number.isInteger(Math.sqrt(num))){
        console.log('Square Number:', num);
        break;
    }
}