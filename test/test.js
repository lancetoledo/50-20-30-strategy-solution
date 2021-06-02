const expect = chai.expect,
  testincome = 13450;
describe('Days In A Month', () => {
  it('Calculate how many days there are in a month', () => {
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
