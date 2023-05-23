/* 
Author: Rodrigo Borges
Date: 2023-03-03
Description: Code created to answer Assingment 3C, PROG2700, IT Data Analytics program
*/

// IIFE
(() => {


	//Remember, you can chain together array function calls to attain your goals.
	// Ex: array.filter().map()

	//Get data for the TV Show "Friends"
	fetch('https://prog2700.onrender.com/hrmbuses')
    .then((response) => response.json())
    .then((json) => {
		function routes (route) {
			return route.entity
			
			.filter(route => parseInt(route.vehicle.trip.routeId) < 11)
		}
		
        
		console.log(routes(json));
    })


})();