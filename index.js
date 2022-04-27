// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Meowzy) {
    return cats.push(Meowzy)
}

function destructivelyPrependCat(Louie) {
    return cats.unshift(Louie);
}

function destructivelyRemoveLastCat(Meowzy) {
    return cats.pop(Meowzy);
}

function destructivelyRemoveFirstCat(Milo) {
    return cats.shift(Milo);
}

function appendCat(Ozzy) {
    return [...cats, Ozzy]
}

function prependCat(Jack) {
    return [Jack, ...cats]
}


function removeLastCat(Meowzy) {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat(Ozzy) {
    return cats.slice(1);
}