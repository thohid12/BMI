function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.innerText = "Please enter valid height and weight.";
    result.style.color = "yellow";
    return;
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
    result.style.color = "lightblue";
  } else if (bmi < 24.9) {
    category = "Normal weight";
    result.style.color = "lightgreen";
  } else if (bmi < 29.9) {
    category = "Overweight";
    result.style.color = "orange";
  } else {
    category = "Obese";
    result.style.color = "red";
  }

  result.innerText = `Your BMI is ${bmi} (${category})`;
}
