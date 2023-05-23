/* 
Author: Rodrigo Borges
Date: 2023-04-19
Description: Code created to answer Assingment 5C, PROG2700, IT Data Analytics program
*/

// IIFE
(() => {

    //Get data
    fetch('https://prog2700.onrender.com/opensky')
        .then((response) => response.json())
        .then((json) => {
            // console.log(json);

            // filter country iqual to United States
            function getLowBarometricAltitude(arr) {
                return arr.states
                    .filter((check) => (check[7] < 1000))
                    .map(country => country[3]);
            }

            function getMidBarometricAltitude(arr) {
                return arr.states
                    .filter((check) => ((check[7] > 999) && (check[7] < 4000)))
                    .map(country => country[3]);
            }

            function getHighBarometricAltitude(arr) {
                return arr.states
                    .filter((check) => ((check[7] > 3999) && (check[7] < 8000)))
                    .map(country => country[3]);
            }

            function getVeryHighBarometricAltitude(arr) {
                return arr.states
                    .filter((check) => (check[7] > 7999))
                    .map(country => country[3]);
            }

            // set variables
            const low = getLowBarometricAltitude(json);
            low.unshift("< 1000");

            const mid = getMidBarometricAltitude(json);
            mid.unshift("999 < x < 4000")

            const high = getHighBarometricAltitude(json);
            high.unshift("3999 < x < 8000");

            const veryHigh = getVeryHighBarometricAltitude(json);
            veryHigh.unshift("> 7999")

            // console.log(low);
            // console.log(mid);
            // console.log(high);
            // console.log(veryHigh);

            // create chart
            let chart = bb.generate({
                bindTo: "#chartThree",
                data: {
                    type: "pie",
                    columns: [
                        low,
                        mid,
                        high,
                        veryHigh
                    ]
                }
            })
        })
})();