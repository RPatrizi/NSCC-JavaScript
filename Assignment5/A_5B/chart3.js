// IIFE
(() => {
    //Get data for the TV Show "Friends"
    fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
        .then((response) => response.json())
        .then((json) => {

            function getEpisodeTitles(arr, character) {
                const count = arr._embedded.episodes
                    // filter in json._embedded.episodes.summary a specific string passed as parameter
                    .filter((check) => (check.summary.includes(character)))
                    // bring only the season number
                    .map(({ season: season }) => (season))
                    // group by season number, counting it
                    .reduce((tally, episode) => {
                        tally[episode] = (tally[episode] || 0) + 1;
                        return tally;
                    }, {})
                // Create an array of objects, where each object represents a season
                const tallyEpisodesArray = Object.entries(count).map(([season, count]) => (
                    season,
                    count
                ));
                return tallyEpisodesArray;
            }

            function season(arr) {
                const count = arr._embedded.episodes
                    // bring only the season number
                    .map(({ season: season }) => (season))
                    // group by season number, counting it
                    .reduce((tally, episode) => {
                        tally[episode] = (tally[episode] || 0) + 1;
                        return tally;
                    }, {})
                // Create an array of objects, bringing only the season number
                const season = Object.entries(count).map(([season]) => (
                    season
                ));
                return season;
            }


            // set variables
            const rachel = getEpisodeTitles(json, "Rachel");
            rachel.unshift("Rachel");

            const monica = getEpisodeTitles(json, "Monica");
            monica.unshift("Monica");

            const phoebe = getEpisodeTitles(json, "Phoebe");
            phoebe.unshift("Phoebe");

            const joey = getEpisodeTitles(json, "Joey");
            joey.unshift("Joey");

            const chandler = getEpisodeTitles(json, "Chandler");
            chandler.unshift("Chandler");

            const ross = getEpisodeTitles(json, "Ross");
            ross.unshift("Ross");

            const seasonNum = season(json);

            // create chart
            let chart = bb.generate({
                bindto: "#chartThree",
                data: {
                    type: "line",
                    columns: [
                        rachel
                    ]
                },
                axis: {
                    x: {
                        type: "category",
                        categories: (seasonNum)
                    }
                }
            });

            // set time series, one for each additional character
            setTimeout(function () {
                chart.load({
                    columns: [
                        monica
                    ]
                });
            }, 2000);

            setTimeout(function () {
                chart.load({
                    columns: [
                        phoebe
                    ]
                });
            }, 4000);

            setTimeout(function () {
                chart.load({
                    columns: [
                        joey
                    ]
                });
            }, 6000);

            setTimeout(function () {
                chart.load({
                    columns: [
                        chandler
                    ]
                });
            }, 8000);

            setTimeout(function () {
                chart.load({
                    columns: [
                        ross
                    ]
                });
            }, 10000);

        })

})();