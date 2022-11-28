const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(name) {
    cats.push(name)
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
    return cats;
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
    return cats;
}

function appendCat(name_1) {
    var name_1 = [...cats, "Broom"]
    return name_1
}

function prependCat(name_2) {
    var name_2 = ["Arnold", ...cats]
    return name_2
}

function removeLastCat(name) {
    var caats = cats.slice(0, cats.length -1)
    return caats
}

function removeFirstCat(name) {
    var catts = cats.slice(1)
    return catts
}