// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
// var familyTree = {
//   'firstName': 'Beth',
//   'lastName': 'Johnson',
//   'location': 'San Francisco',
//   'children': [
//     {
//       'firstName': 'Beth Jr.',
//       'lastName': 'Johnson',
//       'location': 'Berkeley',
//       'children': [
//         {
//           'firstName': 'Smitty',
//           'lastName': 'Won',
//           'location': 'Beijing',
//           'children': []
//         }
//       ]
//     },
//     {
//       'firstName': 'Joshie',
//       'lastName': 'Wyattson',
//       'location': 'Berkeley',
//       'children': []
//     }
//   ]
// };
//
// var livesInBerkeley = function (familyMember) {
//   return familyMember.location === 'Berkeley';
// }
//
// filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];



var filterFamilyMembers = function (familyTree, truthTest, result, index) {
	// All your code in this function body
	
	var result = result || []; //the container for the results
	var index = index || 0; //index onf the child in the children array

	if (truthTest(familyTree)) { 
		result.push((familyTree).firstName + ' ' + familyTree.lastName) //if he\she passes the test the full nale is pushed into the result array
	}

	if (familyTree.children.length !== 0) {
		filterFamilyMembers(familyTree.children[index],truthTest,result,0) // if he\she has children we should go deeper into the family tree but with no return bc it will break the function
	}

	if (familyTree.children.length > index) {
		return filterFamilyMembers(familyTree.children[index],truthTest,result,index++) // if there are still children in the array we should apply the test to them to there's a return here bc w must return the final result 
	}

	return result;
};