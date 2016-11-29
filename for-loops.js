for (var i = 5; i < 120; i += 10){
  console.log("The current value is " + i);
}


for (var i = 4096; i >= 1; i /= 2) {
  console.log("The current value is " + i);
}

var presidents = [
                    "George Washington",
                    "John Adams",
                    "Thomas Jefferson",
                    "James Madison",
                    "James Monroe",
                    "John Quincy Adams",
                    "Andrew Jackson",
                    "Martin Van Buren",
                    "William Henry Harrison",
                    "John Tyler",
                    "James K. Polk",
                    "Zachary Taylor",
                    "Millard Fillmore",
                    "Franklin Pierce",
                    "James Buchanan",
                    "Abraham Lincoln",
                    ]

for(var i = 0; i < presidents.length; i++) {
  console.log("President #" + (i + 1) + " was " + presidents[i]);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var property in antSpecies) {
  console.log(property);
}