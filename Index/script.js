// Medicines (40+)
const medicines = [
  "Aspirin","Paracetamol","Ibuprofen","Amoxicillin","Metformin","Atorvastatin",
  "Omeprazole","Loratadine","Salbutamol","Prednisone","Cefixime","Diclofenac",
  "Ranitidine","Azithromycin","Levothyroxine","Clopidogrel","Warfarin","Insulin",
  "Simvastatin","Naproxen","Furosemide","Pantoprazole","Hydrochlorothiazide","Metoprolol",
  "Losartan","Amlodipine","Cetirizine","Fluoxetine","Tramadol","Gabapentin","Prednisolone",
  "Doxycycline","Captopril","Enalapril","Diazepam","Lorazepam","Clarithromycin","Amiodarone",
  "Nitrofurantoin","Citalopram"
];

// Interactions for medicines with foods
const interactions = {
  "Aspirin": {"Alcohol":"May increase bleeding risk.","Grapes":"No significant interaction.","Spinach":"May increase risk of bleeding due to Vitamin K."},
  "Paracetamol": {"Alcohol":"May increase risk of liver damage.","Milk":"No significant interaction."},
  "Ibuprofen": {"Alcohol":"May increase risk of stomach bleeding.","Coffee":"No significant interaction."},
  "Amoxicillin": {"Alcohol":"May reduce antibiotic effectiveness.","Dairy":"May reduce absorption if taken together."},
  "Metformin": {"Alcohol":"May increase risk of lactic acidosis."},
  "Atorvastatin": {"Grapefruit":"May increase risk of side effects.","Alcohol":"Avoid excessive consumption."},
  "Omeprazole": {"Alcohol":"No major interaction.","Coffee":"May reduce effectiveness slightly."},
  "Loratadine": {"Alcohol":"May increase drowsiness.","Coffee":"No significant interaction."},
  "Salbutamol": {"Alcohol":"No significant interaction.","Caffeine":"May increase tremors."},
  "Prednisone": {"Alcohol":"May increase risk of stomach irritation.","Milk":"No significant interaction."}
};

// All foods
const foods = ["Apple","Banana","Orange","Grapes","Strawberry","Blueberry","Mango","Pineapple","Tomato","Spinach",
"Broccoli","Carrot","Cucumber","Onion","Garlic","Potato","Rice","Oats","Wheat/Bread","Milk","Cheese","Yogurt",
"Eggs","Chicken","Fish","Mutton","Coffee","Tea","Alcohol","Nuts"];

// Create a map of risky foods for each medicine
const riskyFoods = {};
for (let med in interactions) {
  riskyFoods[med] = Object.keys(interactions[med]);
}

document.addEventListener("DOMContentLoaded", () => {
  const medSelect = document.getElementById("medicine");
  const foodSelect = document.getElementById("food");
  const resultDiv = document.getElementById("interactionResult");

  // Add medicines dynamically
  medicines.forEach(med => {
    if(![...medSelect.options].some(o=>o.value===med)){
      const option = document.createElement("option");
      option.value = med;
      option.textContent = med;
      medSelect.appendChild(option);
    }
  });

  // Add foods dynamically
  foods.forEach(food => {
    const option = document.createElement("option");
    option.value = food;
    option.textContent = food;
    foodSelect.appendChild(option);
  });

  // Form submit
  const form = document.getElementById("interactionForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const med = medSelect.value;
    const food = foodSelect.value;

    resultDiv.innerHTML = `<h2>Interaction Result</h2>`;

    if(interactions[med] && interactions[med][food]){
      resultDiv.innerHTML += `<p>⚠️ ${med} + ${food}: ${interactions[med][food]}</p>`;
    } else {
      // Show warning with specific risky foods for the medicine
      const riskyList = riskyFoods[med] ? riskyFoods[med].join(", ") : "None";
      resultDiv.innerHTML += `<p>✅ ${med} + ${food}: No known interaction. ⚠️ But beware of other foods like: ${riskyList}</p>`;
    }
  });
});
