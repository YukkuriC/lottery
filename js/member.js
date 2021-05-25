var N = localStorage.getItem('_TOTAL') - 0
if (isNaN(N) || N <= 0) N = 160
var member = []
for (var i = 1; i <= N; i++) {
  member.push({ name: i })
}