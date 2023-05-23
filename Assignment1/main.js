/*
Author: Rodrigo Borges
Date: 2023-01-20
Description: Code to answer questions of Assingment 1, Client Side Programming course
*/

// Immediately-Invoked Function Expression (IIFE)
(function(){

    // code goes here, safe from global

    // Question 1: Write a function in JavaScript that will receive a string as a parameter and then perform the following:
    // If the first and last characters of the string are the same (ignoring case), the function will return the string in reverse order.
    // Otherwise, the function will return the string with the first and last letters removed.

    let question1 = "Rodrigo";
    const myArrayQ1 = question1.split("");
    let split = "";


    if (question1[0].toUpperCase() === question1[question1.length - 1].toUpperCase()) {
        for (let i = question1.length - 1; i >= 0; i--) {
            split += myArrayQ1[i]
        }
        console.log(split);
    }
    else {
        console.log(question1.slice(1, question1.length - 1));
    }


    // Question 2: Write a function in JavaScript that will return the sum of the longest streak of consecutive increasing numbers within an array

    const myArrayQ2 = [3, 2, 7, 5, 6, 7, 8, 9, 10, 23, 2, 1, 2, 3]
    let count = 1;
    let longestStreak = 0;
    let total = myArrayQ2[0];
    let largestSum = 0;
    let sumArray = [myArrayQ2[0]];
    let finalArray = [];
    let finalString = "";

    for (i = 1; i < myArrayQ2.length; i++) {
        if (myArrayQ2[i] - 1 === myArrayQ2[i - 1]) {
            if (count === 1) {
                sumArray = [myArrayQ2[i-1]];
            }
            count += 1;
            total += myArrayQ2[i];
            sumArray.push(myArrayQ2[i]);
        }
        else {
            if (longestStreak < count) {
                longestStreak = count;
                largestSum = total;
                finalArray = sumArray;
            }
            else if (longestStreak === count && largestSum < total) {
                largestSum = total;
                if (count === 1) {
                sumArray = [myArrayQ2[i-1]];
                }
                finalArray = sumArray;
            }
            count = 1;
            total = myArrayQ2[i];
        }
    }
    if (longestStreak < count) {
        longestStreak = count;
        largestSum = total;
        finalArray = sumArray;
    }
    else if (longestStreak === count && largestSum < total) {
        largestSum = total;
        if (count === 1) {
        sumArray = [myArrayQ2[i-1]];
        }
        finalArray = sumArray;
    }
    finalString += (finalArray[0])
    for (y = 1; y < finalArray.length; y++) {
        finalString += ("+" + finalArray[y])
    }
    console.log(largestSum + " (" + finalString + ")");


    // Question 3: Write a JavaScript program to calculate the number of weeks, days, hours, minutes and seconds left until midnight on your birthday
    // source: https://stackoverflow.com/questions/19700283/how-to-convert-time-in-milliseconds-to-hours-min-sec-format-in-javascript

    const myNextBirthday = new Date(2023,10,13,0,0,0);
    const now = new Date();

    let dateDiff = myNextBirthday - now;
    let seconds = Math.floor((dateDiff / 1000) % 60);
    let minutes = Math.floor((dateDiff / (1000 * 60) % 60));
    let hours = Math.floor((dateDiff / (1000 * 60 * 60) % 24));
    let days = Math.floor((dateDiff / (1000 * 60 * 60 * 24) % 7));
    let weeks = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 7)));

    console.log("There are " + weeks + " weeks, " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds until my next birthday!")


    // Question 4: Write a JavaScript program to iterate through an array of ten(10) positive randomly generated numbers. Each number will then be checked to see if it’s a prime number
    // source: https://www.programiz.com/javascript/examples/prime-number
    
    let randomNumArray = [];
    let answerString = "";
    let isPrime = true

    for (i = 0; i < 10; i ++) {
        randomNumArray[i] = Math.floor(Math.random() * 200);
    }
    for (y = 0; y < randomNumArray.length; y++) {
        if (randomNumArray[y] === 1) {
            answerString += (randomNumArray[y] + "-no");
        }
        else if (randomNumArray[y] === 2) {
            answerString += (randomNumArray[y] + "-yes")
        }
        else {
            for (z = 2; z < randomNumArray[y]; z++) {
                if (randomNumArray[y] % z === 0) {
                    isPrime = false;
                    break;
                }
                else {
                    isPrime = true;
                }
            }
            if (isPrime === true) {
                answerString += (randomNumArray[y] + "-yes")
            }
            else {
                answerString += (randomNumArray[y] + "-no")
            }
        }
        if (y !== randomNumArray.length - 1) {
            answerString += (", ")
        }
    }
    console.log(answerString);
})();