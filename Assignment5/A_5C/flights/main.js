/* 
Author: Rodrigo Borges
Date: 2023-04-19
Description: Code created to answer Assingment 5C, PROG2700, IT Data Analytics program
*/

// IIFE
(() => {

    //create variables



    //Get data from Halifax Transit (function created to refresh all markers)
    fetch('https://prog2700.onrender.com/opensky')
        .then((response) => response.json())
        .then((json) => {
            // console.log(json);


        })
})();