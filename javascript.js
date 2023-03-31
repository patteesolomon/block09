const doc = document;

var inrr = doc.getElementById("intro");
var speed = 100;

let words = `My name is Pattee Solomon. Ive recently graduated from the PerScholas with a certificate in Software Engineering.  I'm currently looking for a job in the tech industry. I'm interested in software development,
data science, and web development. I'm also interested in the intersection of technology and machine learning.`

let i = 0;

function typeWriter() {
    if (i < words.length) {
      inrr.textContent += words.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

typeWriter();