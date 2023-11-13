let pets = [
    {
        firstName: "Rubby",
        type: "Dog",
        breed: "Corgi",
        bestTrick: "Tug of war",
        image: "images/rubby.jpg"
    }, {
        firstName: "Howdy",
        type: "Dog",
        breed: "Mixed Breed",
        bestTrick: "Go find it!",
        image: "images/howdy.jpg"
    }, {
        firstName: "KitKit",
        type: "Cat",
        breed: "American Shorthair",
        bestTrick: "Commanding his owner to feed him",
        image: "images/kitkit.jpg"
    }, {
        name: "Lil' Miss",
        type: "Cat",
        breed: "Tabby",
        bestTrick: "Looking aloof",
        image: "images/lilmiss.jpg"
    }, {
        firstName: "Happy",
        type: "Dog",
        breed: "Golden Retriever",
        bestTrick: "Refusing to retrieve!",
        image: "images/happy.jpg"
    }, {
        firstName: "Piper",
        type: "Dog",
        breed: "Beagle",
        bestTrick: "Find it!  Dropped food edition!",
        image: "images/piper.jpg"
    }, {
        firstName: "Spooky",
        type: "Cat",
        breed: "Mixed",
        bestTrick: "Gymnastics!",
        image: "images/spooky.jpg"
    }
];

document.addEventListener("DOMContentLoaded", () => {

    const table = document.getElementById("petTable");


    pets.forEach(pet => {

        const row = table.insertRow(-1)
        const firstNameCell = row.insertCell(-1);
        firstNameCell.innerText = pet.firstName;
        const typeCell = row.insertCell(-1);
        typeCell.innerText = pet.type;
        const breedCell = row.insertCell(-1);
        breedCell.innerText = pet.breed;
        const bestTrickCell = row.insertCell(-1);
        bestTrickCell.innerText = pet.bestTrick;
        const imageCell = row.insertCell(-1);
        imageCell.innerText = pet.image;

    })




})