const userName = document.querySelector("#user");
console.dir(userName);
const weight = document.querySelector("#weight");
console.dir(weight);
const height = document.querySelector("#height");
console.dir(height)
const birthDate = document.querySelector("#dob");
console.dir(birthDate);
const submit = document.querySelector("#button");
console.dir(submit)
const screen = document.querySelector("form");

const result = document.querySelector(".result");

const bmiCalculator = ()=>{
    let w = parseFloat(weight.value);
    let h = parseFloat(height.value);

    if (!w || !h || h === 0) return 0;

    return w / (h * h).toFixed(2);
}

const bmiValue = (bmi) => {
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi > 18.5 && bmi <= 24.9) {
        return "Healthy";
    } else if (bmi > 24.9 && bmi <= 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const bmi = bmiCalculator();

    if (bmi === 0) {
        result.style.display = "block";
        result.innerText = "Please enter valid height and weight.";
        return;
    }

    const category = bmiValue(bmi);

    result.style.display = "block";
    result.innerText = `${userName.value}, your BMI is ${bmi}% which means you are ${category}.`;
});




