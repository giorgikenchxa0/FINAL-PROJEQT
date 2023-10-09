  // if else /
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}




 // slide and function.
slider = document.querySelector(".slider");
    let next = document.querySelector("#next");
    let prev = document.querySelector("#prev");
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function GetProducts(callback) {
      fetch("https://jsonlint.com/?url=https://jsonlint.com/datasets/programming-languages.json")
        .then((response) => response.json())
        .then((data) => callback(data));
    }
    
    function drawProducts(products) {
      slides.forEach((slide, slideindex) => {
        if (products[slideindex] && products[slideindex].image) {
          let img = document.createElement("img");
          img.src = products[slideindex].image;
          slide.appendChild(img);
        }
      });
    }
    














    next.addEventListener("click", function () {
      index++;
      changeSlide();
    });

    prev.addEventListener("click", function () {
      index--;
      changeSlide();
    });



    function changeSlide() {
      if (index < 0) {
        index = slides.length - 1;
      }

      if (index > slides.length - 1) {
        index = 0;
      }

      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }

      slides[index].classList.add("active");
    }

   setInterval(function () {
     index++;
      changeSlide();
    }, 3000);

   


   


// regex!!

    let gg = document.getElementById('userform').addEventListener('submit', function(event) {
      event.preventDefault();
  
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var password = document.getElementById('password').value;
  
      
      var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(email)) {
          alert('hello ,' + email  + ',_come in !' );
      }
  
      
      var phoneRegex = /^(\(\d{3}\) |\d{3}-)\d{3}-\d{4}$/;
      if (!phoneRegex.test(phone)) {
           alert('hello,'+  phone   +  ",_ saved - come in");
      }
  
      
      var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
      if (!passwordRegex.test(password)) {
          alert('you should not have done that :) :) :)');
      }
  }); 



 

  //array methods david
const brands = ["louis vitton", "red wing shoes", "acer", "gumpert",];
let  = brands.length;

let= brands.push("Adidas");
console.log(brands.length);
console.log(brands);


// closures
for(let i = 1; i <= 10; i++)
console.log(i*i)

// clasebi

class Account { 
  constructor(existingbalance) {
      this.balance = existingbalance || 0;
       

}

deposit (amout){
  this.balance  += amout;
console.log(`deposit ${amout}. new balance: ${this.balance}`);

}


takeout (amout){

  if(amout > this.balance){
      console.log(`not giving enough`)
      return;
  }

  this.balance -= amout;
console.log(`takeout   ${amout}. new balance: ${this.balance}`);

}
 
TopupBalanse(){
  console.log(`current balance: ${this.balance}`);
}

};

const giorgiAccount = new Account(1000);
giorgiAccount.deposit (1000);
giorgiAccount.takeout (0.00);
giorgiAccount.TopupBalanse(1000);
console.log(giorgiAccount.Account) 







// oop !
function students(name, age, gpg){
  return {
      name: name,
      age: age,
      gpg: gpg,
      sayHi: function(){
          console.log(`Hi, my name is   ${this.name} and i'm  ${this.age} years old   and my gpg is ${this.gpg}  `)
      }

  }
}

let Giorgi = new students("Giorgi",   20 , 10 );
let Salome = new students("Salome",  24,  9  );
Giorgi.sayHi();
Salome.sayHi();




//arrow function

let arrow = (a, b)  => a * b;
let a = 5
let b = 4

console.log(a * b * 5);// 100






// loops
function sum(a){
  let sum = 0;
  for(let i = 1; i< a; i++){
    sum += 2  
  }
  console.log(sum)
}
sum(5)


// promise .

let myPromise = new Promise (function(resolve, reject) {  // 1.
     
  let i = 4;
  setTimeout(function() {
      
  
  if(i == 4){
      resolve("good.");
     
 } else {
      reject("not good.");
    }
  },2000)
});


myPromise.then(
  function(resolve) {
      console.log(resolve);
  },
    
    function(reject){
        console.log(reject);
    }
);

// bind
let grup1 = {
  peopele:["giorgi","salome"],
  
};

let grup2 = {
  peopele:["ana","luka"],
};

let grup3 = {
  peopele:["saba","nini"],
};


let printpeopele = function(){
  return this.peopele[0]
}

let printpeopelefromgrup1 = printpeopele.bind(grup1);
console.log(printpeopelefromgrup1());




//cookie delete

document.cookie = 'username = giorgi kenchxadze'
document.cookie = 'product = banana'
document.cookie = 'product = pear'

console.log(new Date().toUTCString())
document.cookie = `product=;   expires= ${new Date().toUTCString()};, path=/;`;
document.cookie = `username=; max-age=0`
document.cookie = `csrftoken=;max-age=0`
console.log(document.cookie)

// cookie splite

document.cookie =  'username = giorgi kenchxadze'
document.cookie = 'product = banana'
document.cookie = 'product = pear'
document.cookie = 'userage = 18'
document.cookie = 'status = students'

console.log(document.cookie.split(' ; '));



// map.
let fruits = new Map();

  
console.log(fruits.set("apples", 400));
console.log(fruits.set("bananas", 300));
console.log(fruits.set("oranges", 200));









//async await and fetch

async function getusers(){
  let users = fetch("https://jsonlint.com/?url=https://jsonlint.com/datasets/programming-languages.json")
  let result = await users;
 let data = await result.json();
 console.log(data);
};













