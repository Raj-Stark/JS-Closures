// ! ---------------------------------------- Closures :

// ! Example 1 :

function m() {
  let a = "Raj";

  function y() {
    console.log(a);
  }

  a = "Anshu";

  return y;
}

var ans = m();

ans(); // Anshu

// ! Example 2 :

for (var i = 1; i <= 5; i++) {
  function z(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }

  z(i);
}

// ! Exmaple 3 :

function CreateCounter() {
    let count = 0;
  
   this.inc =  function () {
      count++;
      console.log(count);
    }
  
    this.dec = function () {
      count--;
      console.log(count);
    }
  
  }
  
  const counter = new  CreateCounter();
  
counter.inc();
counter.dec();
