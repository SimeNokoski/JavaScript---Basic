function myFun(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] != 'string') {
            return "Error";
        }
    }
    return `This is ${array[0]}. ${array[0]} is a nice person. Today they are ${array[1]}. They are ${array[2]} all day. The end.`
}
console.log(myFun(["Name", "Mood", "Activity"]));