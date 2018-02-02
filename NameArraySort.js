let paul = new Object;
paul.first_name = "Paul";
paul.last_name = "McCartney";

let john = new Object;
john.first_name = "John";
john.last_name = "Lennon";

let george = new Object;
george.first_name = "George";
george.last_name = "Harrison";

let ringo = new Object;
ringo.first_name = "Ringo";
ringo.last_name = "Starr";

let beatles = [paul, john, ringo, george];

console.log(
  beatles.sort(function(a, b){
    if (a.last_name > b.last_name) {
      return a.last_name > b.last_name;
    };
    if ( a.last_name == b.last_name ) {
      return a.first_name > b.first_name;
    }
  })
);
