const animals = [{ id: 1, animal: 'Alligator', sound: 'Snap!', icon: '🐊' }, { id: 2, animal: 'Lion', sound: 'Roaar!', icon: '🦁' }, { id: 3, animal: 'Cat', sound: 'Meaow!', icon: '🐱' }]

let maxId = 4;
export function insertAnimal(animal) {
    animal.id = maxId++;
    animals.push(animal);
}
export function deleteAnimal(id) {
    const idx = animals.findIndex((animal, index, array) => id === animal.id)
    if (idx) {
        animals.splice(idx, 1);
    }
}
export function getAnimals(id) {
    if (id) {
        const idx = animals.findIndex((animal, index, array) => id === animal.id)
        return animals[idx];
    }
    else
        return animals;
}


