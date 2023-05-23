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
            function getCountryUS(arr) {
                return arr.states
                    .filter((check) => (check[2] === "United States"))
                    .map(country => country[3]);
            }

            // filter country different then United States
            function getCountryNotUS(arr) {
                return arr.states
                    .filter((check) => (check[2] !== "United States"))
                    .map(country => country[3]);
            }

            // filter country iqual to United States
            function getCountryAU(arr) {
                return arr.states
                    .filter((check) => (check[2] === "Australia"))
                    .map(country => country[3]);
            }

            // filter country different then United States
            function getCountryCA(arr) {
                return arr.states
                    .filter((check) => (check[2] === "Canada"))
                    .map(country => country[3]);
            }

            // filter country different then United States
            function getCountryOther(arr) {
                return arr.states
                    .filter((check) => ((check[2] !== "United States") && (check[2] !== "Australia") && (check[2] !== "Canada")))
                    .map(country => country[3]);
            }

            // filter country iqual to United States
            function getCountryIN(arr) {
                return arr.states
                    .filter((check) => (check[2] === "India"))
                    .map(country => country[3]);
            }

            // filter country iqual to United States
            function getCountryCH(arr) {
                return arr.states
                    .filter((check) => (check[2] === "China"))
                    .map(country => country[3]);
            }

            // filter country iqual to United States
            function getCountryJA(arr) {
                return arr.states
                    .filter((check) => (check[2] === "Japan"))
                    .map(country => country[3]);
            }

            // filter country different then United States
            function getCountryOthers(arr) {
                return arr.states
                    .filter((check) => ((check[2] !== "United States") && (check[2] !== "Australia") && (check[2] !== "Canada") && (check[2] !== "India") && (check[2] !== "China") && (check[2] !== "Japan")))
                    .map(country => country[3]);
            }

            // set variables
            const usCount = getCountryUS(json);
            usCount.unshift("United States");

            const notUsCount = getCountryNotUS(json);
            notUsCount.unshift("Not United States")

            const auCount = getCountryAU(json);
            auCount.unshift("Australia");

            const caCount = getCountryCA(json);
            caCount.unshift("Canada")

            const otCount = getCountryOther(json);
            otCount.unshift("Different Countries");

            const inCount = getCountryIN(json);
            inCount.unshift("India")

            const chCount = getCountryCH(json);
            chCount.unshift("China");

            const jaCount = getCountryJA(json);
            jaCount.unshift("Japan")

            const otsCount = getCountryOthers(json);
            otsCount.unshift("Other Countries");

            // console.log(usCount);
            // console.log(notUsCount);
            // console.log(auCount);
            // console.log(caCount);
            // console.log(otCount);
            // console.log(inCount);
            // console.log(chCount);
            // console.log(jaCount);
            // console.log(otsCount);

            // create chart
            let chart = bb.generate({
                bindTo: "#chartOne",
                data: {
                    type: "pie",
                    columns: [
                        usCount,
                        notUsCount
                    ]
                }
            });

            setTimeout(function () {
                chart.unload({
                    columns: [
                        usCount,
                        notUsCount
                    ]
                });
                chart.load({
                    columns: [
                        usCount,
                        auCount,
                        caCount,
                        otCount
                    ]
                });
            }, 3000);

            setTimeout(function () {
                chart.unload({
                    columns: [
                        usCount,
                        auCount,
                        caCount,
                        otCount
                    ]
                });
                chart.load({
                    columns: [
                        usCount,
                        auCount,
                        caCount,
                        inCount,
                        chCount,
                        jaCount,
                        otsCount
                    ]
                });
            }, 6000);


        })
})();