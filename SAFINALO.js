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
 
     // fetch and promis!
      function getusers(callback){
        fetch("https://dummyjson.com/products/5")
        .then(Response => Response.json())
        .then((data) => callback(data))
      }


      function drawusers(users){
        let ul = document.querySelector("ul");
        users.forEach(users => {
            let html = `<li>a href="https://dummyjson.com/products/5">${users}</a></li>`;
            ul.insertAdjacentHTML("beforeend", html);
            
        });
     }

     getusers().then(data => drawusers(data));



     setInterval(
      function () {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#"+randomColor;
      },1000);
      
      document.querySelector('userform').onsubmit = function() {
          if (!document.querySelector('Email,number,password input').value) {
              alert('You must provide your full name!');
              return false;
          }
      
          return true;
      }


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