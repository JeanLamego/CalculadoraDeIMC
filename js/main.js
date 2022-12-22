//IMC DATA

const data = [
    {
      min: 0,
      max: 18.4,
      classification: "Menor que 18,5",
      info: "Magreza",
      obesity: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classification: "Entre 18,5 e 24,9",
      info: "Normal",
      obesity: "0",
    },
    {
      min: 25,
      max: 29.9,
      classification: "Entre 25,0 e 29,9",
      info: "Sobrepeso",
      obesity: "I",
    },
    {
      min: 30,
      max: 39.9,
      classification: "Entre 30,0 e 39,9",
      info: "Obesidade",
      obesity: "II",
    },
    {
      min: 40,
      max: 99,
      classification: "Maior que 40,0",
      info: "Obesidade grave",
      obesity: "III",
    },
  ];

  const imcTable = document.querySelector(".imc-table");

  const radioMale= document.querySelector("#male");
  const radioFemale= document.querySelector("#female");
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");

  const calcBtn = document.querySelector("#submit");
  const clearBtn = document.querySelector("#clear");
  const backBtn = document.querySelector("#backBtn");

  const imcNumber = document.querySelector(".imc-results span");
  const imcStatus = document.querySelector(".status span")
  const firstPage = document.querySelector("#info-container");
  const resultsPage = document.querySelector("#container-card-results");

  function createTable(data) {
    data.forEach((item) => {
        
        const div = document.createElement("div");
        div.classList.add("table-data");

        const classification = document.createElement("p");
        classification.innerText = item.classification;

        const info = document.createElement("p");
        info.innerText = item.info;

        const obesity = document.createElement("p");
        obesity.innerText = item.obesity;
        

        div.appendChild(classification)
        div.appendChild(info)
        div.appendChild(obesity)

        imcTable.appendChild(div)
    });
  }
  createTable(data);



  
function showOrHideResults(){
  firstPage.classList.toggle("hide");
  resultsPage.classList.toggle("hide");
}

function cleanInputs(){
  heightInput.value='';
  weightInput.value='';
  radioFemale.checked=false;
  radioMale.checked=false;
}
function calcImc(height,weight){
  const calcImc= (weight/ (height * height)).toFixed(2);
  return calcImc;
}

calcBtn.addEventListener('click', function(){
  const height = +heightInput.value.replace("," , ".");
  const weight = +weightInput.value.replace("," , ".");

  if(!weight || !height) return;

  var imc = calcImc(height,weight);

  var info;

  data.forEach((item)=>{
    if(imc>=item.min && imc<= item.max){
      info = item.info;
    }
  });
  if(!info) return;
  imcNumber.innerText = imc;
  imcStatus.innerText = info;
  showOrHideResults();
})

clearBtn.addEventListener('click', function(){
  cleanInputs();
})
  backBtn.addEventListener('click', function(){
    cleanInputs();
    showOrHideResults();

  } )