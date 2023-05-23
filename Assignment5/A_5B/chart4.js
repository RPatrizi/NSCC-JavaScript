// IIFE
(() => {
    //Get data for the TV Show "Friends"
    fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
        .then((response) => response.json())
        .then((json) => {

            // get rating of each episode
            function getEpisodeRating(arr, seasonNum) {
                const firstVar = arr._embedded.episodes
                    .filter((check) => (check.season === seasonNum))
                    .map(text => text.rating.average);
                return firstVar;
            }

            // get the episodes from season 3 (season with most episodes)
            function getEpisodes(arr) {
                const episode = arr._embedded.episodes
                    .filter((check) => (check.season === 3))
                    .map(text => text.number);
                return episode;
            }

            // create variables
            const seasonOne = getEpisodeRating(json, 1)
            seasonOne.unshift("Season One")
            const seasonTwo = getEpisodeRating(json, 2)
            seasonTwo.unshift("Season Two")
            const seasonThree = getEpisodeRating(json, 3)
            seasonThree.unshift("Season Three")
            const seasonFour = getEpisodeRating(json, 4)
            seasonFour.unshift("Season Four")
            const seasonFive = getEpisodeRating(json, 5)
            seasonFive.unshift("Season Five")

            const numOfEpisodes = getEpisodes(json)

            console.log(seasonOne)
            console.log(seasonTwo)
            console.log(seasonThree)
            console.log(seasonFour)
            console.log(seasonFive)
            console.log(numOfEpisodes)

            // create chart
            let chart = bb.generate({
                bindto: "#chartFour",
                data: {
                    type: "spline",
                    columns: [
                        seasonOne,
                        seasonTwo,
                        seasonThree,
                        seasonFour,
                        seasonFive
                    ]
                },
                axis: {
                    x: {
                        type: "category",
                        categories: (numOfEpisodes)
                    }
                }
            });
        })
})();