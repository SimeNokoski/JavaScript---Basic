function myFun(firstNames, lastNames) {
	let indexFirstLastName = [];
	for (let i = 0; i < firstNames.length && i < lastNames.length; i++) {
		indexFirstLastName.push(` ${i + 1}.${firstNames[i]} ${lastNames[i]}`);

	}
	return indexFirstLastName;
}
console.log(myFun(["Sime", "Rozeta", "Danilo", "Ana", "Ivana"], ["Nokoski", "Markoska", "Danilovic", "Nakeska", "Ivanova"]))




 






