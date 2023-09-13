let value1;

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

text1.addEventListener("input", function () {
  let c = this.value;
 
  let f = c*(9/5)+32;
  if(!Number.isInteger(f)){
    f=f.toFixed(4)
  }
  text2.value=f;
  
});

text2.addEventListener("input", function () {
    let f = this.value;
    let c = (f-32)*(5/9);
    if(!Number.isInteger(c)){
        c=c.toFixed(4)
      }
    text1.value=c;
    
  });

  
