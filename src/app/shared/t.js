  const g = 1000000
  const a = [1,2,3,4,5];
  const obj1 = "asdfghjj";
  const obj2 = "asdfghj";
  const g1 = ["long", "minh", "ng", "misadnh"];

  console.time('Sum by for case 1');
  for(var i = 1; i < g; i++)
  var x = 0;
  console.timeEnd('Sum by for case 1');

  console.time('Sum by for case 2');
  for(var i = 1; i < g; i++){
    let check=true;
    for(let j=0; j<obj1.length; j++)
      if(obj1[j] !== obj2[j] ?? "") {
        check = false;
        break;
      }
  }
  console.timeEnd('Sum by for case 2');

  console.time('Sum by for case 3');
  for(var i = 1; i < g; i++){
    if(obj1 === obj2) {}
  }
  console.timeEnd('Sum by for case 3');
