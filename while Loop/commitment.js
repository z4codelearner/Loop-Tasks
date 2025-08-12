 let num = 1;
 while (num <= 60){
    console.log('I will invest at least 6 hours daily for the next 60 days!', num);
    num++;
 }

 /**
  * কিভাবে কাজ করছে (বাংলা ব্যাখ্যা)
let num = 1; → লুপ শুরু হবে ১ থেকে।

while (num <= 60) → যতক্ষণ num ৬০ বা তার কম, লুপ চলতে থাকবে।

console.log(...) → প্রতি বার স্ক্রিনে "I will invest at least 6 hours daily for the next 60 days!" মেসেজ আর সাথে num এর মান দেখাবে।

num++; → প্রতিবার লুপ শেষে num এর মান ১ করে বাড়বে।

যখন num ৬১ হবে, শর্ত মিথ্যা হবে এবং লুপ থামবে।
  */