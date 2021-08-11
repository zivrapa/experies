var isClicked = false;

function createElemnt(name, head, imgSrc, weight, wing, legs) {
  var newAnimal = document.createElement("div");
  newAnimal.id = head;
  name.appendChild(newAnimal);

  if (name == amphibia) {
    newAnimal.style.border = "5px solid deeppink";
  } else {
    newAnimal.style.border = "5px solid gold";
  }

  newAnimal.className = "col-md-12";
  newAnimal.style.marginTop = "10px";
  var newH3 = document.createElement("h3");
  newH3.innerText = head;
  newAnimal.appendChild(newH3);
  newH3.className = "display-4 col-12";
  var newImg = document.createElement("img");
  newImg.src = imgSrc;
  newAnimal.appendChild(newImg);
  newImg.className = "col-md-12";
  var newP1 = document.createElement("p");
  newP1.innerText = "Wehigt in kg: "+ weight;
  newAnimal.appendChild(newP1);
  var newP2 = document.createElement("button");
  newP2.innerText = "what I'm eat?";
  newP2.id = 'btn'+head;
  newP2.className = 'btn';
  newAnimal.appendChild(newP2);
  var newP3 = document.createElement("p");
  newP3.innerText = "Wings?: "+ wing;
  newAnimal.appendChild(newP3);
  var newP4 = document.createElement("p");
  newP4.innerText = "No. of legs: "+ legs;
  newAnimal.appendChild(newP4);
  var newP5 = document.createElement("p");
  newP5.innerText = 'What is my sound?';
  newAnimal.appendChild(newP5);
  var newP6 = document.createElement("audio");
  newP6.src = head +'.mp3';
  newP6.controls = true;
  newP6.className = "col-md-12";
  newAnimal.appendChild(newP6);
}




var mamelsArr = ["whale", "monkey", "elephant", "lion"];
var reptaialsArr = ["green-mamba", "crocodail", "snake", "Chameleon"];
var amphibiaArr = ["frog", "salamandra", "duck", "toad"];
var mamelsImg = ["whale.jpg", "monkey.jpg", "elephant.jpg", "lion.jpg"];
var reptailImg = [
  "Green_Mamba.jpg",
  "Saltwater_crocodile.jpg",
  "waterSnake.jpg",
  "Chameleon.jpg"
];

var animalsNameArrConect = [mamelsArr, reptaialsArr, amphibiaArr]
var animalWehigtArrConect = [mamelsWeight, reptailsWeight, amphibiaWeight]




var amphibiaImg = ["frog.jpg", "salamandra.jpg", "duck.jpg", "toad.jpg"];
var mamelsWeight = [30000, 20, 7500, 600];
var reptailsWeight = [0.5, 800, 0.5, 2];
var amphibiaWeight = [0.3, 0.5, 3, 0.4];
var mamelsWing = ["No", "No","No", "No"];
var reptailsWing = ["No", "No","No", "No"];
var amphibiaWing = ["No","No", "Yes", "No"];
var mamelsLegs = ["0", "2","4","4"];
var reptailsLegs = ["0","4","0","4"];
var amphibiaLegs = ["4","4","2","4"];
var mamels = document.getElementById("mamels");
var reptails = document.getElementById("reptails");
var amphibia = document.getElementById("amphibia");




var i = 0
while (i < 3) {
  
        createElemnt(mamels, mamelsArr[i], mamelsImg[i], mamelsWeight[i], mamelsWing[i], mamelsLegs[i]);
     
        createElemnt(reptails, reptaialsArr[i], reptailImg[i], reptailsWeight[i], reptailsWing[i], reptailsLegs[i]);
    
        createElemnt(amphibia, amphibiaArr[i], amphibiaImg[i], amphibiaWeight[i], amphibiaWing[i], amphibiaLegs[i]);
      
  i++;
}
// function createAddBtn() {
//   var addAnimalBtn = document.createElement('button');
//   addAnimalBtn.innerText = 'Add another animals';
//   addAnimalBtn.className = 'addBtn';
//   var cont = document.getElementById('container');
//   cont.appendChild(addAnimalBtn);
// }
// createAddBtn();

var greenMamba = document.getElementById("green-mamba");
var frog = document.getElementById("frog");
var croc = document.getElementById("crocodail");
var salamn = document.getElementById("salamandra");
var whale = document.getElementById("whale");
var monkey = document.getElementById("monkey");
var greenMambaBtn = document.getElementById("btngreen-mamba");
var crocBtn = document.getElementById("btncrocodail");
var snakeBtn = document.getElementById("btnsnake");
var myFormEl = document.getElementById('my_form');

var myFormEl = document.getElementById('my_form');
    

var modal = document.getElementById("myModal");
var modalBtn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];





    var j = 3;
    var k = 3;
    var l = 3;
    var randNum;
  function highlightElement(highlightedElement) {
  
    highlightedElement.style.border = "5px dashed silver";
    
    highlightedElement.style.background = "white";
  }
  
  function backElementToNormal(highlightedElement) {
    if (highlightedElement.parentElement == amphibia) {
      highlightedElement.style.border = "5px solid deeppink";
    
      highlightedElement.style.background = "lawngreen";
    }
    else if (highlightedElement.parentElement == mamels)
    {
      highlightElement.style.border = "gold 5px solid";
      highlightedElement.style.background = "fuchsia";

    }
    else{
      highlightedElement.style.border = "gold 5px solid";
      highlightedElement.style.background = "darkturquoise";
    }
  }

  
  greenMambaBtn.onclick = function () {
    if (isClicked === false)
    {highlightElement(frog);
    isClicked = true;
  }
    else
    {
      {backElementToNormal(frog);
        isClicked = false;
    }
  
    
  };
  crocBtn.onclick = function () {
    if (isClicked === false){
      highlightElement(frog);
      highlightElement(salamn);
      highlightElement(duck);
      isClicked = true;
    }
    else{
      backElementToNormal(frog);
      backElementToNormal(salamn);
      backElementToNormal(duck);
      isClicked = false;
    }
    
  };
  snakeBtn.onclick = function() {
    if (isClicked === false){
      highlightElement(frog);
      highlightElement(salamn);
      highlightElement(duck);
      isClicked = true;
    }
    else{
      backElementToNormal(frog);
      backElementToNormal(salamn);
      backElementToNormal(duck);
      isClicked = false;
    }
  };
}
    myFormEl.onsubmit = function (event){
      event.preventDefault();
        var animalType = document.getElementById("animalType").value;
        var animalName = document.getElementById("animalName").value;
        if (animalType == "mamels") {
          mamelsArr.push(animalName);
        }
        else if (animalType == "retaials"){
          reptaialsArr.push(animalName);
        }
        else if (animalType == "amphibia"){
          amphibiaArr.push(animalName);
        }
        else
        alert("Wrong animal type!");

        var animalImg = document.getElementById("animalImg").value;
        var animalWeight = parseInt(document.getElementById("animalWehigt").value);
        if (animalType == "mamels") {
          mamelsWeight.push(animalWeight);
        }
        else if (animalType == "Reptiles"){
          reptailsWeight.push(animalWeight);
        }
        else if (animalType == "amphibia"){
          amphibiaWeight.push(animalWeight);
        }
        var animalWings = document.querySelectorAll('input[name="wings"]');
        var selectedValue;
        for (var rb of animalWings) {
            if (rb.checked) {
                selectedValue = rb.value;
                break;
            }
      }
      var animalLegs = document.getElementById("legs").value;
      if (animalType =="mamels")
      {
        createElemnt(mamels,animalName,animalImg,animalWeight,selectedValue,animalLegs);
      }
      else if (animalType =="reptails") {
        createElemnt(reptails,animalName,animalImg,animalWeight,selectedValue,animalLegs); 
      }
      else
      {
        createElemnt(amphibia,animalName,animalImg,animalWeight,selectedValue,animalLegs); 
      }
    }
    
    function modalSort() {
      
      var sortedMamelsObj = Object.assign({},mamelsArr,mamelsWeight);
      
      var sortedMamelsArr = []
      for (var anm in sortedMamelsObj) {
        sortedMamelsArr.push([anm, sortedMamelsObj[anm]]);
        
    }
    sortedMamelsArr.sort(function(a, b) {
      return a[1] - b[1];
  });

  var sortedreptObj = Object.assign({},reptaialsArr,reptailsWeight);
      
  var sortedreptArr = []
  for (var anm in sortedreptObj) {
    sortedreptArr.push([anm, sortedreptObj[anm]]);
    
}
sortedreptArr.sort(function(a, b) {
  return a[1] - b[1];
});
var sortedAmphibiaObj = Object.assign({},amphibiaArr,amphibiaWeight);
      
  var sortedAmphibiaArr = []
  for (var anm in sortedAmphibiaObj) {
    sortedAmphibiaArr.push([anm, sortedAmphibiaObj[anm]]);
    
}
sortedAmphibiaArr.sort(function(a, b) {
  return a[1] - b[1];
});




  console.log(sortedMamelsArr);
      var modalContent = document.getElementById("modalContent");
      var mamelsHead = document.createElement('h3');
      mamelsHead.innerText = 'Mamels Sorted';
      modalContent.appendChild(mamelsHead);
      for (var y = 0; y < mamelsArr.length; y++) {
        var modalAnimals = document.createElement('p');
        modalAnimals.innerText = `${mamelsArr[sortedMamelsArr[y][0]]}  ${sortedMamelsArr[y][1]} kg`;
        modalContent.appendChild(modalAnimals);
      }
      var reptHead = document.createElement('h3');
      reptHead.innerText = 'reptiles Sorted';
      modalContent.appendChild(reptHead);
      for (var y = 0; y < reptaialsArr.length; y++) {
        var modalAnimals = document.createElement('p');
        modalAnimals.innerText = `${reptaialsArr[sortedreptArr[y][0]]}  ${sortedreptArr[y][1]} kg`;
        modalContent.appendChild(modalAnimals);
      }
      var amphiHead = document.createElement('h3');
      amphiHead.innerText = 'Amphibia Sorted';
      modalContent.appendChild(amphiHead);
      for (var y = 0; y < amphibiaArr.length; y++) {
        var modalAnimals = document.createElement('p');
        modalAnimals.innerText = `${amphibiaArr[sortedAmphibiaArr[y][0]]}  ${sortedAmphibiaArr[y][1]} kg`;
        modalContent.appendChild(modalAnimals);
      }
     
      
    }
    myBtn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    modalSort();
    
  // addAnimals.onclick = function() {
    
  //     while (j < 4 || k < 4 || l < 4) {
  //       randNum = Math.floor(Math.random() * 3 + 1);
  //       switch (randNum) {
  //         case 1:
  //           if (j < 4) {
  //             createElemnt(mamels, mamelsArr[j], mamelsImg[j], mamelsWeight[j], mamelsWing[j], mamelsLegs[j]);
  //             j++;
  //           } else continue;
  //         case 2:
  //           if (k < 4) {
  //             createElemnt(reptails, reptaialsArr[k], reptailImg[k], reptailsWeight[k], reptailsWing[k], reptailsLegs[k]);
  //             k++;
  //           } else continue;
  //         case 3:
  //           if (l < 4) {
  //             createElemnt(amphibia, amphibiaArr[l], amphibiaImg[l], amphibiaWeight[l], amphibiaWing[l], amphibiaLegs[l]);
  //             l++;
  //           } else continue;
  //       }
  //     }
  //   }
 




