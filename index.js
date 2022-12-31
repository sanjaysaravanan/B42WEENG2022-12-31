var resume = {
  name: 'Sanjay',
  age: '35',
  role: 'Engineer',
}


// use for in for iteration
for(var key in resume) {
  console.log(`${key}: ${resume[key]}`);
}


Object.keys(resume).forEach((key) => {
  console.log(`${key}: ${resume[key]}`);
});

// copy by value --> function scope modification does not reflect on the global value 
function sample(a) {
  a = 100;
  console.log('Inside Function', a);
}


var a = 9999;
console.log('Before fucntion call', a);

sample(a);

console.log('after fucntion call', a);


// copy by reference
function sampleObj(obj) {
  obj.a = 100;
  console.log('Inside Function', obj.a);
}


var outObj = { a: 9999 };
console.log('Before fucntion call', outObj.a);

sampleObj(outObj);

console.log('after fucntion call', outObj.a);


///
var nestedObj = {
  name: 'Sanjay',
  hobbies: ['Singing', 'Dancing'],
  bio: {
    height: '188cm',
    weight: '90kg',
    bloodGrp: 'B+ve',
    info: {
      experience: '10yrs',
      industry: 'Information Technology'
    }
  }
};


// destructure value of name
var { name, bio: { height, bloodGrp, info: { experience } }  } = nestedObj;

// var { } = nestedObj;

console.log(name, height, experience);
