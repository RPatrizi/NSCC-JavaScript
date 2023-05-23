/*
Author: Rodrigo Borges
Date: 2023-02-03
Description: Assignment 2B - Client Side Programming
Source: https://github.com/toddmotto/public-apis#games--comics
API source: https://disneyapi.dev/
*/

// IIFE
(function(){
    fetch('https://api.disneyapi.dev/characters')
        .then(function(disneyData) {
            return disneyData.json()
        })
        .then(function(characters){
            document.write(`<h1>The Data from the Disney API will show here!</h1><pre>${JSON.stringify(characters, null, 2)}</pre>`);
        });

    async function fetchPostsJSON() {
        const response = await fetch('https://api.disneyapi.dev/characters');
        const disneyData = await response.json();
        return disneyData;
    }

    fetchPostsJSON().then(function(characters){
        document.write(`<h1>The Data from the Disney API will show here!</h1><pre>${JSON.stringify(characters, null, 2)}</pre>`);
    });
})();