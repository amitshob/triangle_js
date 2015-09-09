describe('triangleTracker', function(){

  it("it is true is its a triangle", function(){
  expect(triangleTracker(3,4,5)).to.equal("scalene");
  });

  it("it is equilateral if all sides are equal", function(){
  expect(triangleTracker(3,3,3)).to.equal("equilateral");
  });

  it("it is isoceles if any two sides are equal", function(){
  expect(triangleTracker(3,3,5)).to.equal("isoceles");
  });

  it("it is scalene if none of the sides are equal", function(){
  expect(triangleTracker(2,4,5)).to.equal("scalene");
  });

  it("it is not a triangle if the sum of any two sides is smaller the the third side", function(){
  expect(triangleTracker(6,12,5)).to.equal("this is not a triangle!");
  });

});
