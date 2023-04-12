/_ so jasmin and moca are for node _/

/_ jab hum is tarike se test file create karte hai. toh kuch v import karne
kar jarurat nai hota hi. _/

/\* agar koi cli tool locally installed hota hai to hum usko
Node_modules/.bin/clitool
lekin agar hum us tool ko script me dal de

"tool":"clitool"

toh humko bin se pick karne ka jarurat nai hota hai. so aisa generic tasks
hai jisko solve karne ke liye editor khud se help deta hai.

start and test and some other scripts are special because they have built in alias

\*/

<!-- so if we use npm test --watch so we are using npm in watch mode not test in
watch mode to bypass this humare pass ek trick hai ki first double dash is for
npm then we leave it empty then next double dash will be for the other cli tool
,and this is cli formula -->


lets change something here