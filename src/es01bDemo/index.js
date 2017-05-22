{
  const names = [
    { name: 'Joda', age: 300, contacts: { twitter: 'Joda' } },
    { name: 'Anakin', age: 30, contacts: { twitter: 'Anakin' } },
    { name: 'Leia', age: 1, contacts: { twitter: 'Leia' } },
    { name: 'Obiwan', age: 30, contacts: { twitter: 'Obiwan' } },
    { name: 'R2D2', age: 10, contacts: { twitter: 'R2D2' } },
  ];

  //////////////////////////////////////////// 1. map
  const result = [];
  for (let i = 0; i < names.length; i++) {
    result.push(names[i].name);
  }
  console.log(result);


  console.log(
    names.map(({ name }) => name)
  )


  ////////////////////////////////////////// 2. filter
  const result2 = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].age > 20) {
      result2.push(names[i].name);
    }
  }
  console.log(result2);

  // Další variable pro současnou položku
  // for (let i = 0; i < names.length; i++) {
  //   const {name, age} = names[i];
  //   if (age > 20) {
  //     result2.push(name);
  //   }
  // }

  console.log(
      names
        .filter(({ age }) => age > 20)
        .map(({ name }) => name)
  );


/*
  const gt = (y) => (x) => x > y;
  // const gt20 = gt(20);

  console.log(
      names
        .filter(({ age }) => gt(20)(age))
        // .filter(({ age }) => gt20(age))
        .map(({ name }) => name)
  );
*/


  //////////////////////////////////////////// 3. reduce
  let result3 = [];
  let sum = 0;

  for (let i = 0; i < names.length; i++) {
    const { age, name } = names[i];
    result3.push(name);
    sum += age;

  }
  const avg = sum / result3.length;
  console.log(avg)

    const avg2 = names
      .map(({ age }) => age)
      .reduce((acc, x) => acc + x, 0) / names.length;

      console.log(avg2)

/*
  const suma = (xs) => xs.reduce((acc, x) => acc + x, 0);
  const average = (xs) => suma(xs) / xs.length;

  console.log(
    average(
      names.map(({ age }) => age)
    )
  );
*/

}