//You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
//The first kangaroo starts at location kangaroo1  and moves at a rate of jumpRateForKangaroo1 meters per jump.
//The second kangaroo starts at location kangaroo2 and moves at a rate of jumpRateForKangaroo2 meters per jump.
//You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.



function kangaroo(kangaroo1, jumpRateForKangaroo1, kangaroo2, jumpRateForKangroo2) {
  //solving it with alzebra 
  //to return a yes -
  //n is the number of jumps multiplied by the addition of initial postion x and jumping length v
  // n * x1 + v1= n * x2 + v2
  if(jumpRateForKangaroo1<jumpRateForKangroo2||(kangaroo2-kangaroo1)%(jumpRateForKangroo2-jumpRateForKangaroo1)!==0){
      return "NO"
  } else {
      return "YES"
  }
 
}
