const createBluegrassArtist = (name, age) => {
    return {
        "name": name,
        "age": age,
        genre: "Bluegrass"
    }
}

const createCountryArtist = (name, age) => {
    return {
        "name": name,
        "age": age,
        genre: "Country"
    }
}

const createRapArtist = (name, age) => {
    return {
        "name": name,
        "age": age,
        genre: "rap"
    }
}
const createFunkArtist = (name, age) => {
    return {
        "name": name,
        "age": age,
        genre: "funk"
    }
}
const createPopArtist = (name, age) => {
    return {
        "name": name,
        "age": age,
        genre: "pop"
    }
}


const jumpStopRecords = [createFunkArtist("Dre Funkz", 25), createRapArtist("Dusta Grimes", 21), createRapArtist("Loyonce Branis", 27)];
const chattenRecords = [createCountryArtist("Bruce Atikins", 23), createBluegrassArtist("Bartholomew Danielson", 23), createCountryArtist("Avilee Dallas", 19)];
const polarRecords = [createPopArtist("Austin Kinkaid"), createPopArtist("Jensen Brown", 20)];

console.table(jumpStopRecords);
console.table(chattenRecords);
console.table(polarRecords);

/*Practice: Music Row
Your job is to sign each of these promising young music stars to the appropriate label.

JumpStop Records works with Funk and Rap artists.
Chatten Records works with Country and Bluegrass artists.
Polar Records works with Pop artists.
Create an array for each of these record labels.

Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

Bruce Atikins is a Country artist and is 23 years old
Jensen Brown is a Pop artist and is 20 years old
Dre Funkz is a Funk artist and is 25 years old
Dusta Grimes is a Rap artist and is 21 years old
Bartholomew Danielson is a Bluegrass artist and is 23 years old
Avilee Dallas is a Country artist and is 19 years old
Austin Kinkaid is a Pop artist and is 22 years old
Loyoncé Branis is a Rap artist and is 27 years old
*/


// const makeArtistObject = (name, genre, age) => {
//     return {
//         name: name,
//         genre: genre,
//         age: age
//     }
// };

// const bruceAtikins = makeArtistObject("Bruce Atikins", "country", 23)
// const jensenBrown = makeArtistObject("Jensen Brown", "pop", 20)
// const dreFunkz = makeArtistObject("Dre Funkz", "funk", 25)
// const dustaGrimes = makeArtistObject("Dusta Grimes", "rap",


