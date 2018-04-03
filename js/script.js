function getTriangleArea(a, h) {
	if ( a <= 0 || h <= 0) {
		return "wrong input data";
	}
	else { 
		return a * h / 2;
	}
}
console.log(' trojkat przykladowy = ' + getTriangleArea(10, 6))

var triangleArea = getTriangleArea(10, 15);
console.log(' pierwszy trojkat = ' + getTriangleArea(10, 15));
var triangleArea = getTriangleArea(5, -2);
console.log(' drugi trojkat = ' + getTriangleArea (5, -2));
var triangleArea = getTriangleArea(2, 2);
console.log(' trzeci trojkat = ' + getTriangleArea (2, 2));
