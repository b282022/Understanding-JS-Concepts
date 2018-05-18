let pokemonName = "Vegeta";
function catchPokemon(pokemonName) {
	if (pokemonName === "Magikarp") {
		throw new Error("No one likes Magikarp");
	}
	if (pokemonName === "Ditto") {
		throw new Error("Wait... What pokemon is this exactly?");
	}
	if (pokemonName === "Vegeta") {
		throw new Error("So you think prince of all saiyans will become your pet?");	
	}
	console.log("Caught the : " + pokemonName);
}

try {
	console.log("There's a " + pokemonName + " nearby!");
	catchPokemon(pokemonName);
} catch (error) {
	if (error.name === "ReferenceError")
		console.error("You can't catch a pokemon if it is not there");
	else
		console.error(error.stack);
} finally {
	console.log("The encounter with the pokemon ended");
}