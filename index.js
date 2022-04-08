const findMatching = (arr, searchTerm) => {
    const result = arr.filter(
        name => name.toUpperCase() === searchTerm.toUpperCase()
    )
    return result
}

const arr = ['Alex', 'Bob', 'Carl'];

const fuzzyMatch = (arr, searchTerm) => {
    const result = arr.filter(
          driverName => driverName.slice(0, searchTerm.length) === searchTerm
    )
    return result
}

const matchName = (drivers, string) => {
    const result = drivers.filter(
        object => object.name == string
    )
    return result;
}


const sampleDrivers = [
    {'name': 'Jason', 'hometown': 'Wonderland'},
    {'name': 'Jessica', 'hometown': 'Tennessee'}
]

//Each driver object has two properties: name and hometown.
//The function should return each element whose name property
//matches the provided string argument.