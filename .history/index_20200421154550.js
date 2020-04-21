function wakeDog(dogName, dogBreed) {
    message = console.log(`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed) {
    message = console.log(`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName, dogBreed) {
    message = console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed) {
    message = console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

function walkHome(dogName, dogBreed) {
    message = console.log(`Walk home with ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName, dogBreed) {
    message = console.log(`Unleash ${dogName} the ${dogBreed}`);
}

const routine = ["wakeDog", "leashDog", "walkToPark", "throwFrisbee", "walkHome", "unleashDog"]

function exerciseDog(dogName, dogBreed) {
    routine.forEach(element => element(dogName, dogBreed)) 


}