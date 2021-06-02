// The 50-30-20 strategy is a simple way to budget
// which involves spending 50% of after-tax income on needs,
// 30% after tax income on wants,
// 20% after-tax income on savings or paying off debt.

// Create a function that takes an income amount and return an OBJECT with what they have for needs, wants, and     // savings

// Example 1:
// Input: fiftyThirtyTwenty(10000)
// Output: { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

// Example 2:
// Input: fiftyThirtyTwenty(50000)
// Output: { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

// Example 3:
// Input: fiftyThirtyTwenty(13450)
// { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

function fiftyThirtyTwenty(income) {
  // Write code here
  return {
    Needs: 0.5 * income,
    Wants: 0.3 * income,
    Savings: 0.2 * income
  };
}

console.log(fiftyThirtyTwenty(13450));
