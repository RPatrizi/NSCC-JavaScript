// IIFE
(() => {
    //Get data for the TV Show "Friends"
    fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
        .then((response) => response.json())
        .then((json) => {

            function getGuntherCount(arr) {
                return arr._embedded.episodes
                    // filter in json._embedded.episodes.summary that includes passed string
                    .filter((check) => (check.summary.includes("Gunther")))
                    .map(episode => episode.id);
            }

            function getNoGuntherCount(arr) {
                return arr._embedded.episodes
                    // filter in json._embedded.episodes.summary that doesn't include passed string
                    .filter((check) => (!check.summary.includes("Gunther")))
                    .map(episode => episode.id);
            }

            // set variables
            const guntherCount = getGuntherCount(json);
            guntherCount.unshift("Gunther Ep.");

            const noGuntherCount = getNoGuntherCount(json);
            noGuntherCount.unshift("No-Gunther Ep.")

            console.log(guntherCount);
            console.log(noGuntherCount);

            // create chart
            let chart = bb.generate({
                bindTo: "#chartOne",
                data: {
                    type: "pie",
                    columns: [
                        guntherCount,
                        noGuntherCount
                    ]
                }
            })


        })

})();