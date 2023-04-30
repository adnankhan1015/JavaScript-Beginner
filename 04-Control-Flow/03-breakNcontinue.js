/*
  ! Break and Continue
  * These two keywords that can change how the loop behaves. Apply on all kindsof loops.
*/

// let i = 0;
// while (i <= 10) {
//   if(i ===  5) break;
//   console.log(i);
//   i++
// }


let j = 0;
while (j <= 10) {
  if(j % 2 ===  0) {
    j++;
    continue;
  }
  console.log(j)
  j++
}