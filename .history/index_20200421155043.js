function wakeDog(dogName, dogBreed) {
    return (`Wake ${dogName} the ${dogBreed}`);
    return message;
}

function leashDog(dogName, dogBreed) {
    return (`Leash ${dogName} the ${dogBreed}`);
    return message;
}

function walkToPark(dogName, dogBreed) {
    return (`Walk to the park with ${dogName} the ${dogBreed}`);
    return message;
}

function throwFrisbee(dogName, dogBreed) {
    return (`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return message;
}

function walkHome(dogName, dogBreed) {
    return (`Walk home with ${dogName} the ${dogBreed}`);
    return message;
}

function unleashDog(dogName, dogBreed) {
    return (`Unleash ${dogName} the ${dogBreed}`);
    return message;
}

const routine = ["wakeDog", "leashDog", "walkToPark", "throwFrisbee", "walkHome", "unleashDog"]

function exerciseDog(dogName, dogBreed) {
    routine.forEach(element => element(dogName, dogBreed)) 


}