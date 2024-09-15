const findTheOldest = function(people) {
  const oldestYear = people
    .map((person) => {
      if (!person.hasOwnProperty('yearOfDeath')) { // if yearOfDeath is missing,
        const date = new Date()
        let year = date.getFullYear()

        person['yearOfDeath'] = year
      }
      return person.yearOfDeath - person.yearOfBirth
    })
    .reduce((leftNum, rightNum) => {
      if (rightNum > leftNum) { // Checks for max number, returns the max number
        return rightNum 
      }
      return leftNum
    }, 0)

  return people.find((person) => { // DONT FORGET return 
    return (person.yearOfDeath - person.yearOfBirth)===oldestYear
  })
};


// Do not edit below this line
module.exports = findTheOldest;
