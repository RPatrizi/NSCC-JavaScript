// IIFE
(() => {
    //Get data for the TV Show "Friends"
    fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
        .then((response) => response.json())
        .then((json) => {

            // get episode ratings and multiple 10
            function getEpisodeRating(arr, episodeNum) {
                const firstVar = arr._embedded.episodes
                    .filter((check) => (check.season === 10))
                    .filter((check) => (check.number === episodeNum))
                    .map(text => text.rating.average * 10);
                return firstVar;
            }

            // set variables
            const epOne = getEpisodeRating(json, 1)
            epOne.unshift("Season 10 episodes rating")
            const epTwo = getEpisodeRating(json, 2)
            epTwo.unshift("Season 10 episodes rating")
            const epThree = getEpisodeRating(json, 3)
            epThree.unshift("Season 10 episodes rating")
            const epFour = getEpisodeRating(json, 4)
            epFour.unshift("Season 10 episodes rating")
            const epFive = getEpisodeRating(json, 5)
            epFive.unshift("Season 10 episodes rating")
            const epSix = getEpisodeRating(json, 6)
            epSix.unshift("Season 10 episodes rating")
            const epSeven = getEpisodeRating(json, 7)
            epSeven.unshift("Season 10 episodes rating")
            const epEight = getEpisodeRating(json, 8)
            epEight.unshift("Season 10 episodes rating")
            const epNine = getEpisodeRating(json, 9)
            epNine.unshift("Season 10 episodes rating")
            const epTen = getEpisodeRating(json, 10)
            epTen.unshift("Season 10 episodes rating")
            const epEleven = getEpisodeRating(json, 11)
            epEleven.unshift("Season 10 episodes rating")
            const epTwelve = getEpisodeRating(json, 12)
            epTwelve.unshift("Season 10 episodes rating")
            const epThirteen = getEpisodeRating(json, 13)
            epThirteen.unshift("Season 10 episodes rating")
            const epFourteen = getEpisodeRating(json, 14)
            epFourteen.unshift("Season 10 episodes rating")
            const epFifteen = getEpisodeRating(json, 15)
            epFifteen.unshift("Season 10 episodes rating")
            const epSixteen = getEpisodeRating(json, 16)
            epSixteen.unshift("Season 10 episodes rating")
            const epSeventeen = getEpisodeRating(json, 17)
            epSeventeen.unshift("Season 10 episodes rating")
            const epEightteen = getEpisodeRating(json, 18)
            epEightteen.unshift("Season 10 episodes rating")

            console.log(epOne)
            console.log(epTwo)
            console.log(epThree)
            console.log(epFour)
            console.log(epFive)
            console.log(epSix)
            console.log(epSeven)
            console.log(epEight)
            console.log(epNine)
            console.log(epTen)
            console.log(epEleven)
            console.log(epTwelve)
            console.log(epThirteen)
            console.log(epFourteen)
            console.log(epFifteen)
            console.log(epSixteen)
            console.log(epSeventeen)
            console.log(epEightteen)

            // create chart
            var chart = bb.generate({
                bindto: "#chartFive",
                data: {
                    type: "gauge",
                    columns: [
                        epOne
                    ]
                }
            });

            // 
            setTimeout(function () {
                chart.load({
                    columns: [epTwo]
                });
            }, 2000);

            setTimeout(function () {
                chart.load({
                    columns: [epThree]
                });
            }, 4000);

            setTimeout(function () {
                chart.load({
                    columns: [epFour]
                });
            }, 6000);

            setTimeout(function () {
                chart.load({
                    columns: [epFive]
                });
            }, 8000);

            setTimeout(function () {
                chart.load({
                    columns: [epSix]
                });
            }, 10000);

            setTimeout(function () {
                chart.load({
                    columns: [epSeven]
                });
            }, 12000);

            setTimeout(function () {
                chart.load({
                    columns: [epEight]
                });
            }, 14000);

            setTimeout(function () {
                chart.load({
                    columns: [epNine]
                });
            }, 16000);

            setTimeout(function () {
                chart.load({
                    columns: [epTen]
                });
            }, 18000);

            setTimeout(function () {
                chart.load({
                    columns: [epEleven]
                });
            }, 20000);

            setTimeout(function () {
                chart.load({
                    columns: [epTwelve]
                });
            }, 22000);

            setTimeout(function () {
                chart.load({
                    columns: [epThirteen]
                });
            }, 24000);

            setTimeout(function () {
                chart.load({
                    columns: [epFourteen]
                });
            }, 26000);

            setTimeout(function () {
                chart.load({
                    columns: [epFifteen]
                });
            }, 28000);

            setTimeout(function () {
                chart.load({
                    columns: [epSixteen]
                });
            }, 30000);

            setTimeout(function () {
                chart.load({
                    columns: [epSeventeen]
                });
            }, 32000);

            setTimeout(function () {
                chart.load({
                    columns: [epEightteen]
                });
            }, 34000);
        })
})();