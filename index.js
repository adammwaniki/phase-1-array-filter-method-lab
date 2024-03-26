// Code your solution here
//filter and make a function to return drivers with the same name
//returns matching drivers even if the case doesn't match
//returns an empty array if no match
//Step 1 we will use the filter() to filter array content based on search criteria
//we will create a query (a query is the search criteria used to filter the array) as a parameter of the findmatching() function and represents the string that the code is trying to match within the elements of the array
//we will call the function using two arguments. first us the array, second is the  search criteria aka query
//our criteria is that the drivers have the same names regardless of case so we can make a callback function that takes all of the array elements, converts them to lower case and then filters them if they match. if they dont match then there will be nothing to return and we will get an empty array.
//so, basically, within the arrow function it will check whether the lowercase version of the current element includes the lowercase version of the search query i.e. if driverElement.toLowerCase inludes the lowercase version of the search query i.e. sameName.toLowerCase and thus determines if the element should be included in the filtered result
function findMatching(drivers,sameName) {
    return drivers.filter((driverElement) => driverElement.toLowerCase().includes(sameName.toLowerCase()));
}

//does a case insensitive check to see if the names match based on the criteria of letters at the start of the name
function fuzzyMatch(drivers,letterMatch) {
    return drivers.filter((driverElement) => driverElement.toLowerCase().startsWith(letterMatch.toLowerCase()));
}

//accesses the object inside the array by looking for the name and then checks to see if it matches another in the array
function matchName(drivers,nameMatch) {
    return drivers.filter((driverElement) => driverElement.name.includes(nameMatch));
}
