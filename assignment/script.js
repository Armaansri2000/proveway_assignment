document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".option");
  const radios = document.querySelectorAll('input[name="units"]');
  const totalPriceEl = document.getElementById("totalPrice");

  const prices = {
    1: "$10.00 USD",
    2: "$18.00 USD",
    3: "$24.00 USD"
  };

  function updateUI(selectedValue) {
    options.forEach(option => {
      const unit = option.getAttribute("data-units");
      if (unit === selectedValue) {
        option.classList.add("active");
      } else {
        option.classList.remove("active");
      }
    });

    totalPriceEl.textContent = prices[selectedValue];
  }

  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      updateUI(radio.value);
    });
  });

  // Set default to unit 2 on load
  updateUI("2");

  document.getElementById("addToCart").addEventListener("click", () => {
    alert("Item added to cart!");
  });
});
