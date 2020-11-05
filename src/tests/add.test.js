const add = (a,b) => a+b;
////yarn test -- watch
// unit tests
test("should add two numbers" , () => {
    const res = add(3,4);
    expect(res).toBe(7)
})
