describe("expect test", () => {
  it("37 to equal 37", () => {
    const received = 37;
    const expected = 37;
    expect(received).toBe(expected);
  });

  // it.skip('{age: 37} to equal {age: 37}', () => {
  //     const received ={
  //         age: 37,
  //     };
  //     const expected = {
  //         age: 37,
  //     };
  //     expect(received).toBe(expected);
  // })

  it("{age: 37} to equal {age: 37}", () => {
    const received = {
      age: 37
    };
    const expected = {
      age: 37
    };
    expect(received).toEqual(expected);
  });
});
