// Add event listener for the form submission
document.getElementById("calculatorForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var acres = parseFloat(document.getElementById("acres").value);
  var interval = parseFloat(document.getElementById("interval").value);
  var corners = parseFloat(document.getElementById("corners").value);
  var barbedWire = parseFloat(document.getElementById("barbedWire").value);
  var transportDistance = parseFloat(document.getElementById("transportDistance").value);
  var postWeight = parseFloat(document.getElementById("postWeight").value);
  var peopleOffload = parseFloat(document.getElementById("peopleOffload").value);
  var postCost = parseFloat(document.getElementById("postCost").value);
  var barbedWireCost = parseFloat(document.getElementById("barbedWireCost").value);
  var uNailsCost = parseFloat(document.getElementById("uNailsCost").value);
  var straightNailsCost = parseFloat(document.getElementById("straightNailsCost").value);

  // Perform calculations for the number of items needed
  var totalArea = acres * 4046.86; // Convert acres to square meters
  var sideLength = Math.sqrt(totalArea); // Assuming a square-shaped land
  var perimeter = sideLength * 4;
  var cornerBrace = corners;
  var intermediateBrace = (perimeter / interval) - 1;
  var uprightPosts = Math.ceil(cornerBrace / 2); // Assuming half the number of corner braces
  var totalPosts = uprightPosts + cornerBrace + intermediateBrace;
  var barbedWireEstimate = perimeter * barbedWire;
  var chainLink = perimeter;
  var uNails = Math.ceil(cornerBrace * 1.5); // Assuming 1.5 U-nails for each corner brace post
  var straightNails = cornerBrace * 2; // Assuming 2 nails for each corner brace post

  // Perform calculations for the total cost
  var totalCostPosts = uprightPosts * postCost;
  var totalCostBarbedWire = barbedWireEstimate * barbedWireCost;
  var totalCostUNails = uNails * uNailsCost;
  var totalCostStraightNails = straightNails * straightNailsCost;

  var totalAmount = totalCostPosts + totalCostBarbedWire + totalCostUNails + totalCostStraightNails;

  // Update the calculator's output for the calculations
  document.getElementById("totalArea").textContent = totalArea.toFixed(2);
  document.getElementById("sideLength").textContent = sideLength.toFixed(2);
  document.getElementById("perimeter").textContent = perimeter.toFixed(2);
  document.getElementById("uprightPosts").textContent = uprightPosts;
  document.getElementById("intermediateBrace").textContent = intermediateBrace.toFixed(2);
  document.getElementById("cornerBrace").textContent = cornerBrace;
  document.getElementById("totalPosts").textContent = totalPosts;
  document.getElementById("barbedWireEstimate").textContent = barbedWireEstimate.toFixed(2);
  document.getElementById("chainLink").textContent = chainLink;
  document.getElementById("uNails").textContent = uNails;
  document.getElementById("straightNails").textContent = straightNails.toFixed(2);

  // Update the calculator's output for the costs
  document.getElementById("totalCostPosts").textContent = totalCostPosts.toFixed(2);
  document.getElementById("totalCostBarbedWire").textContent = totalCostBarbedWire.toFixed(2);
  document.getElementById("totalCostUNails").textContent = totalCostUNails.toFixed(2);
  document.getElementById("totalCostStraightNails").textContent = totalCostStraightNails.toFixed(2);

  // Update the total amount of money to be spent
  document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
});

// Add event listener for the "Order Now" button
document.getElementById("orderButton").addEventListener("click", function() {
  // Perform the action when the "Order Now" button is clicked
  alert("Thank you for placing your order!");
});

  
