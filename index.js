const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers,name){
    return drivers.filter(driver=> driver.toLowerCase() === name.toLowerCase()  )
        }
    console.log(findMatching(drivers, "Bobby"));
    console.log (findMatching(drivers, 'Susan'));
function fuzzyMatch(drivers,matchName){
    return drivers.filter(driver=> driver.toLowerCase().startsWith(matchName.toLowerCase()));
        }
         console.log(fuzzyMatch(drivers, "B"));
        
      const driversTown = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
function matchName(drivers,match) {
    // return drivers.filter(driver=> driver.name.toLowerCase() === match.toLowerCase());
return drivers.filter(driver => driver.name.toLowerCase() === match.toLowerCase());
}
        console.log(matchName(drivers, "Sally"));