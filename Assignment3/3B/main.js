/* 
Author: Rodrigo Borges
Date: 2023-03-03
Description: Code created to answer Assingment 3B, PROG2700, IT Data Analytics program
*/


// IIFE
(() => {

	//Choose an array method to implement for each of the incomplete functions.
	//FOR/WHILE LOOPS OF ANY KIND ARE FORBIDDEN! You must use the available array functions to accomplish your goal.

	//Remember, you can chain together array function calls to attain your goals.
	// Ex: array.filter().map()

	//Get data for the TV Show "Friends"
	fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
    .then((response) => response.json())
    .then((json) => {

        //DO NOT MODIFY THE CODE IN HERE...check the console for your functions' output

        //1 - Create a function called getGuntherCount() which returns the total number of episodes 
        // where the character Gunther is mentioned in the episode summary.
        console.log('--------------------------------');
        console.log(`Gunther Count: ${getGuntherCount(json)}`);

        //2 - Create a function called getTotalRuntimeMinutes() that totals all runtime minutes for all episodes
        console.log('--------------------------------');
        console.log(`Total Runtime Minutes: ${getTotalRuntimeMinutes(json)}`);

        //3 - Create a function called getDateRangeEpisodeCount() that returns the number of episodes that aired in the year 2000
        console.log('--------------------------------');
        console.log(`Total episodes airing in year 2000: ${getTotalEpisodesInYear(json, "2000")}`);

        //4 - Create a function called getFemaleCastMembers() that returns an array of the names of the female cast members.
        console.log('--------------------------------');
        console.log(`Female Cast Members:`);
        console.log(getFemaleCastMembers(json));

        //5 - Create a function called getEpisodeTitles() which returns a list of episode
        //    where the argument string is found in the episode summary.
        console.log('--------------------------------');
        console.log(`Episodes that mention Ursula:`);
        console.log(getEpisodeTitles(json, 'Ursula'));

        //6 - Create a function called getCastMembersOver55() which returns a list of cast members
        //    who are currently older than 55 years of age.
        console.log('--------------------------------');
        console.log(`Cast Members over 55:`);
        console.log(getCastMembersOver55(json));

        //7 - Create a function called getTotalRuntimeMinutesExcludingSeasonSix that gets the total 
        //    runtime minutes for all episodes excluding episodes in season 6
        console.log('--------------------------------');
        console.log(`Total runtime in minutes excluding Season 6: ${getTotalRuntimeMinutesExcludingSeasonSix(json)}`);
    
        //8 - Create a function called getFirstFourSeasons that gets the episodes for the first four seasons 
        //    but only return an array of JSON objects containing the season number and episode name
        console.log('--------------------------------');
        console.log(`Episode JSON for first four seasons:`)
        console.log(getFirstFourSeasons(json));

        //9 - Create a function called getEpisodeTallyBySeason that returns an object containing the season name and the total episodes as key:value pairs for each season
        console.log('--------------------------------');
        console.log(`Tally of episodes by season:`);
        console.log(getEpisodeTallyBySeason(json));

        //10 - Create a funtion called capitalizeTheFriends that transforms the episode JSON data by capitalizing the words Joey, Chandler, Monica, Rachel, Phoebe, and Ross in both 
        //the name and summary of the episodes.
        console.log('--------------------------------');
        console.log('Capitalized Friends');
        console.log(capitalizeTheFriends(json));

    })

	// COMPLETE THE FOLLOWING FUNCTIONS BY IMPLEMENTING MAP, REDUCE, OR FILTER 
	// (or a combination) ON THE PROVIDED JSON DATA

	// Define the required ten functions below this line...

    // Function Q1
    function getGuntherCount (arr) {
        return arr._embedded.episodes
        // filter in json._embedded.episodes.summary that includes passed string
        .filter((check) => (check.summary.includes("Gunther"))).length;
    }

    // Function Q2
    function getTotalRuntimeMinutes (arr) {
        return arr._embedded.episodes
        // sum the json._embedded.episodes.runtime starting with 0
        .reduce((acumulator, check) => (acumulator + check.runtime), 0);
    }

    // Function Q3
    function getTotalEpisodesInYear (arr, year) {
        return arr._embedded.episodes
        // filter in json._embedded.episodes.airdate a specific year passed as parameter
        .filter((check) => (check.airdate.includes(year))).length;
    }

    // Function Q4
    function getFemaleCastMembers (arr) {
        return arr._embedded.cast
        // filter in json._embedded.cast.person.gender a specific gender passed as parameter and map bringing only the name of that person
        .filter((check) => (check.person.gender.includes("Female")))
        .map(actrice => actrice.person.name);
    }

    // Function Q5
    function getEpisodeTitles (arr, character) {
        return arr._embedded.episodes
        // filter in json._embedded.episodes.summary a specific string passed as parameter and map bringing only the name of that episode
        .filter((check) => (check.summary.includes(character)))
        .map(episode => episode.name);
    }

    // Function Q6
    // create variable and get today's date
    const today = new Date();
    // console.log(today);

    function getCastMembersOver55 (arr) {
        // create variable to bring all actors over 55 years old (including 55)
        const over55 = arr._embedded.cast
        .filter(age => {
            // IF statement to see if the person already had their birthday in current year
            // Compare actual month and birthday month
            if(((today.getMonth() - new Date(age.person.birthday).getMonth()) < 0) ||
            (((today.getMonth() - new Date(age.person.birthday).getMonth()) === 0) && 
            // compare actual day and birthday day
            ((today.getDate() - new Date(age.person.birthday).getDate()) < 0)))
            // IF the birthday in current year didn't happen yet, add 1 to 55. As an example, if born on July.
            { return (today.getFullYear() - new Date(age.person.birthday).getFullYear()) >= 56}
            // IF the birthday in current year already happen, compare to 55
            else { return (today.getFullYear() - new Date(age.person.birthday).getFullYear()) >= 55}})
            // bring only person name
        .map(cast => cast.person.name);
            return over55;

        // return arr._embedded.cast
        // .filter(age => (today.getFullYear() - new Date(age.person.birthday).getFullYear()) > 55)
        // .map(cast => cast.person.name);

    }

    //source: https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
    //source: https://stackoverflow.com/questions/28567549/how-to-use-if-within-a-map-return

    // Function Q7
    function getTotalRuntimeMinutesExcludingSeasonSix (arr) {
        return arr._embedded.episodes
        // filter different of season 6
        .filter((check) => (check.season !== 6))
        // sum the json._embedded.episodes.runtime, starting with 0
        .reduce((acumulator, minutes) => (acumulator + minutes.runtime), 0);
    }

    // Function Q8
    function getFirstFourSeasons (arr) {
        return arr._embedded.episodes
        // filter only seasons 1 to 4
        .filter((check) => (check.season === 1 || check.season === 2 || check.season === 3 || check.season === 4))
        // bring only season number and episode name
        .map(({season: season, name: name}) => ({season, name}));
    }

    // Function Q9
    function getEpisodeTallyBySeason (arr) {
        // create variable to count episodes
        const count = arr._embedded.episodes
        // bring only the season number
        .map(({season: season}) => (season))
        // group by season number, counting it
        .reduce((tally, episode) => {
            tally[episode] = (tally[episode] || 0) + 1 ;
            return tally;} , {});
            return count;
    }

    //source: https://www.freecodecamp.org/news/reduce-f47a7da511a9

    // Function Q10
    function capitalizeTheFriends (arr) {
        // create variable to each character name
        const friendsName = arr._embedded.cast
        // bring each character name, lowercase it, split first and last name and concat in only one array
        .map(({character: person}) => person.name.split(/\W/))
        .reduce((fName, lName) => fName.concat(lName))

        console.log(friendsName);

        // map to bring only episode.name and episode.summary and lowerCase it to compare with friendsName
        const textLowerCase = arr._embedded.episodes
        .map((text) => {
            const newText = {
                name: text.name,
                summary: text.summary,
            }; return newText;
        })

        // compare friendsName and textLowerCase
        .map((textt) => {
            const newNewText = {
                name: friendsName.reduce((accumulator, word) => {
                    return accumulator.replace(new RegExp(word, "i"), word.toUpperCase());
                  }, textt.name),
                  summary: friendsName.reduce((accumulator, word) => {
                    return accumulator.replace(new RegExp(word, "i"), word.toUpperCase());
                  }, textt.summary)
            };
            return newNewText;
        });

        return textLowerCase;
    }

    //sources: https://www.w3schools.com/js/js_regexp.asp#gsc.tab=0&gsc.q=new%20RegExp()%20javascript, https://www.w3schools.com/jsref/jsref_obj_regexp.asp, 
    // https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression

})();