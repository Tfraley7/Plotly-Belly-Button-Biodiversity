const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receiveData => console.log(receiveData));

///Vandenberg bASE info
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));

///Full name of Vandenberg AFB
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

d3.json("samples.json").then(function(data){
    console.log("data");
});

//frequency of washing
d3.json("samples.json").then(function(data){
    console.log(data.metadata[0].wfreq);
});

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

//sort wfreq array in descending order

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b-a);
    console.log(wfreq);
});

//Delete null values from sorted wfreq array

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b-a);
    filteredWfreq = wfreq.filter(person => person != null);
    console.log(filteredWfreq);
});

researcher1={
    name: "Roza",
    age: 34,
    hobby: "Hiking"
});
console.log(Object.entries(reasearcher1));

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});