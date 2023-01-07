// 
// Declare an empty array;
const arr = []

// Declare an array with more than 5 number of elements
const arr2 = [1, 2, 3, 4, 5]

// Find the length of your array
// console.log(arr2.length)

// Get the first item, the middle item and the last item of the array
// console.log(arr2[0], arr2.indexOf(3), arr2.length - 1)

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ["string", 1, [1, 2, 3], true, "mix", 4]
// console.log(mixedDataTypes.length)


// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Print the array using console.log()
// console.log(itCompanies);

// Print the number of companies in the array
// console.log(itCompanies.length);

// Print the first company, middle and last company
// console.log(itCompanies[0], itCompanies[3], itCompanies[6]);

// Print out each company
// itCompanies.forEach(company => console.log(company))

// Change each company name to uppercase one by one and print them out
// itCompanies.forEach(company => console.log(company.toUpperCase()))

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
itCompanies.pop()
// console.log(itCompanies.join(", ") + " and Amazon are big IT companies")

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function checkCompany(company) {
  return itCompanies.includes(company) 
  ? company 
  : "company is not found"
}
// console.log(checkCompany("HEB"))

// Filter out companies which have more than one 'o' without the filter method


// Sort the array using sort() method
itCompanies.sort()

// Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(3))

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(0,3))


// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(2, 4));

// Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

// Remove the middle IT company or companies from the array
itCompanies.splice(2, 2)
console.log(itCompanies);

// Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies);

// Remove all IT companies
itCompanies.splice(0,2)
console.log(itCompanies);
