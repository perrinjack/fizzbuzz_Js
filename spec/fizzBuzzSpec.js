describe("fizzBuzz", function() {
  it("returns fizz when number is divisible by 3", function() {
    var subject = fizzBuzz(3);
    expect(subject).toEqual('fizz')
  });

  it("returns buzz when number is divisible by 5", function() {
    var subject = fizzBuzz(5);
    expect(subject).toEqual('buzz')
  });

  it("returns fizzbuzz when number is divisible by 3 and 5", function() {
    var subject = fizzBuzz(15);
    expect(subject).toEqual('fizzbuzz')
  });

  it("returns the given number when number is not divisible by 3 or 5", function() {
    var subject = fizzBuzz(4);
    expect(subject).toEqual(4)
  });
});

describe("numbersBetween", function() {
  it("returns the fizz buzz numbers between two values", function() {
    var subject = numbersBetween(1, 5);
    var result = [1, 2,"fizz", 4, "buzz"];
    expect(subject).toEqual(result)
  });
});