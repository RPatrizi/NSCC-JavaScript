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

            // filter country different then United States
            function getCountryNotUS(arr) {
                const count = arr.states
                    .filter((check) => (check[2] !== "United States"))
                    // bring only the Country Name
                    .map(country => country[2])
                    // group by country, counting it
                    .reduce((tally, flight) => {
                        tally[flight] = (tally[flight] || 0) + 1;
                        return tally;
                    }, {})

                // .filter((flight) => (tally > 20));
                // Create an array of objects, where each object represents a season
                const tallyCountriesArray = Object.entries(count).map(([country, count]) => ({
                    Country: country,
                    Flights_count: count
                }))


                return tallyCountriesArray;
            }


            // set variables
            const tallyFlights = getCountryNotUS(json)
                .filter((flight) => (flight.Flights_count > 25));

            // console.log(tallyFlights);

            // create chart
            let chart = bb.generate({
                bindto: "#chartTwo",
                data: {
                    type: "bar",
                    json: tallyFlights,
                    keys: {
                        x: "Country", // Specify the x-axis
                        value: ["Flights_count"] // Specify the y-axis
                    },
                    labels: {
                        format: {
                            "Country": d => d // Label each bar
                        }
                    }
                },
                axis: {
                    x: {
                        type: "category" // set the x-axis with season number
                    }
                }
            });

        })

})();