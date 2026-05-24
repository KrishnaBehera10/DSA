// ---------------->> sum of two integer
{
  let a = 10;
  let b = 20;
  // console.log(a + b);
}

// ------------------>>> swap two variable via 3 method

// extral variable

{
  let a = 10;
  let b = 20;
  let c = null;

  c = a;
  a = b;
  b = c;

  //   console.log(a, b);
}

// no extral variable

{
  let a = 10;
  let b = 20;

  a = a + b;
  b = a - b;
  a = a - b;

  //   console.log(a, b);
}

// 3th

{
  let a = 10;
  let b = 20;

  [a, b] = [b, a];

  //   console.log(a, b);
}

// Q operators and thier question
//  ---> arthmatic

//------------------>> unary opertor (pre,post)

{
  let a = 10;
  //   console.log(a++, a);

  let b = 20;
  //   console.log(b, ++b);
}

// {
//   let i = 11;

//   i = i++ + ++i;

//   console.log(i);
// }

{
  let i = 1,
    j = 2,
    k = 3;

  let m = i-- - j-- - k--;
  console.log(m);
}
