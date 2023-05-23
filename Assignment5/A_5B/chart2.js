// IIFE
(() => {
    //Get data for the TV Show "Friends"
    fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
        .then((response) => response.json())
        .then((json) => {


            function getEpisodeTallyBySeason(arr) {
                // create variable to count episodes
                const count = arr._embedded.episodes
                    // bring only the season number
                    .map(({ season: season }) => (season))
                    // group by season number, counting it
                    .reduce((tally, episode) => {
                        tally[episode] = (tally[episode] || 0) + 1;
                        return tally;
                    }, {})
                // Create an array of objects, where each object represents a season
                const tallyEpisodesArray = Object.entries(count).map(([season, count]) => ({
                    Season: season,
                    Episodes_count: count
                }));

                return tallyEpisodesArray;
            }

            // set variables
            const tallyEpisodes = getEpisodeTallyBySeason(json);

            // create chart
            let chart = bb.generate({
                bindto: "#chartTwo",
                data: {
                    type: "bar",
                    json: tallyEpisodes,
                    keys: {
                        x: "Season", // Specify the x-axis
                        value: ["Episodes_count"] // Specify the y-axis
                    },
                    labels: {
                        format: {
                            "Season": d => d // Label each bar
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