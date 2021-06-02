const expect = chai.expect,
  testincome = 13450;
describe('50-30-20 Strategy', () => {
  it('Create a function that returns an object with the 50-30-20 Strategy', () => {
    expect(fiftyThirtyTwenty(testincome)).to.eql(
      {
        Needs: 6725,
        Wants: 4035,
        Savings: 2690
      },
      'Please check your function!'
    );
  });
});
