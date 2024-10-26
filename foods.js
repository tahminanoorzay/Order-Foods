const foodImages = {
  pizza: "images/pizza.jpg",
  kebab: "images/kebab.jpg",
  soup: "images/soup.jpg",
  pasta: "images/pasta.jpg",
  salad: "images/salad.jpg",
  sandwich: "images/sandwich.jpg",
  burger: "images/burger.jpg",
  rice: "images/rice.jpg",
};

function showFoods() {
  let nums = document.getElementById("nums").value;
  let selectedFood = document.getElementById("selectFood").value;
  let currentDate = new Date().toLocaleDateString();
  let foodId = Math.floor(Math.random() * 100 + 1);

  document.getElementById("name").innerHTML = `Selected Food : ${selectedFood}`;
  document.getElementById("number").innerHTML = `Number of Foods : ${nums}`;
  document.getElementById("showDate").innerHTML = `Date : ${currentDate}`;
  document.getElementById("foodId").innerHTML = `Food ID : ${foodId}`;

  const foodImage = document.getElementById("foodImage");
  foodImage.src = foodImages[selectedFood];
  foodImage.style.display = "block";
}

function deleteBtn() {
  document.getElementById("name").innerHTML = "Name";
  document.getElementById("number").innerHTML = "Numbers";
  document.getElementById("showDate").innerHTML = "Date";
  document.getElementById("foodId").innerHTML = "ID";

  const foodImage = document.getElementById("foodImage");
  foodImage.style.display = "none";
  foodImage.src = "";
}
