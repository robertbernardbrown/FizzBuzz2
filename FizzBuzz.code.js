for (var i = 1; i <= 100; i += 1) {
 
 if (i % 3 === 0 && i % 5 !== 0)
  {console.log ('fizz')}
   if (i % 5 === 0 && i % 3 !== 0)
  {console.log ('buzz')}
    if (i % 3 === 0 && i % 5 === 0)
  {console.log ('fizzbuzz')}
    if (i % 3 !== 0 && i % 5 !== 0)
  {console.log (i)}
}


