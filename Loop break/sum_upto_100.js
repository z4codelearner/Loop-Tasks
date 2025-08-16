/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
// use while loop

// let num = 1;
// let sum = 0;
//  while (sum <= 100 ){
//     sum = sum + num;
//     console.log('Number:', num, 'Sum:', sum);
/**
 * এখানে প্রথমে num কে sum এর সাথে যোগ করা হচ্ছে।

তারপর কনসোলে দেখাচ্ছে —

Number: → এইবার যোগ হওয়া সংখ্যা

Sum: → বর্তমান মোট যোগফল
 */


    // if (sum >= 100){
    //     break;
    // }
     //এখানে চেক করছে যদি sum 100 বা তার বেশি হয়ে যায়, তাহলে break দিয়ে লুপ বন্ধ করে দাও।

    // num++
    //প্রতিবার লুপের শেষে num এর মান 1 করে বাড়ানো হচ্ছে, যাতে পরের বার বড় সংখ্যা যোগ হয়।
//  }


// for loop
//  for (let num = 1, sum = 0; sum <= 100; num++){
//     console.log('Number:', num, 'Sum:', sum+=num);
//  }

 /**
  * ব্যাখ্যা:

let num = 1, sum = 0; → লুপ শুরু করার আগে দুইটা ভ্যারিয়েবল একসাথে ডিফাইন করা হয়েছে।

sum <= 100 → যতক্ষণ sum 100 বা তার কম, লুপ চলবে।

num++ → প্রতিবার num 1 করে বাড়বে।

sum += num → num কে sum এর সাথে যোগ করে sum আপডেট করা হচ্ছে, আর একই লাইনে প্রিন্টও হচ্ছে।
  */




for (let num = 1, sum = 0; ; num++) {
    sum += num;
    console.log("Number:", num, "Sum:", sum);

    if (sum >= 100) {
        break;
    }
}

/**
 * 
 * এই কোডে কী হচ্ছে?

let num = 1, sum = 0

শুরুতে num = 1 আর sum = 0 সেট হচ্ছে।

condition ফাঁকা

আমরা মাঝখানে condition লিখিনি (; ;)

মানে লুপ থামবে না যতক্ষণ না আমরা ভেতরে break দিই।

num++

প্রতিবার লুপ শেষে num এর মান ১ করে বাড়বে।

sum += num;

প্রতিবার বর্তমান num যোগ হচ্ছে sum এর সাথে।

if (sum >= 100) break;

যখনই যোগফল 100 বা তার বেশি হবে, সাথে সাথে লুপ থেমে যাবে।
 */