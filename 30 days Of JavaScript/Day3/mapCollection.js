countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const mapex = new Map(countries);

  console.log(mapex);

  mapex.set('tushar' , 'do coding')
  mapex.set('praks', 'do jwellaert')
  console.log(mapex);

  console.log(mapex.get('tushar'));

  console.log(mapex.has('praks'));

  for(const c of mapex){
    console.log(c[0] +" " + c[1]);
  }