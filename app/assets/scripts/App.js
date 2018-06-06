function Person(fullName,favColor) {
	this.name = fullName;
	this.favoriteColor = favColor;

	this.greet = function(){
		console.log("hello my name is "+this.name+" and my fav color is "+this.favoriteColor);
	}
}

var john = new Person("John Doe", "blue");
john.greet();