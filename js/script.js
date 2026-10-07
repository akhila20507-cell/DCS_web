document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".filter");
    const cards = document.querySelectorAll(".product-card");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const selected = button.getAttribute("data-filter");

            cards.forEach(function (card) {

                if (selected === "new") {
                    card.style.display = "block";
                }
                else if (card.getAttribute("data-category") === selected) {
                    card.style.display = "block";
                }
                else {
                    card.style.display = "none";
                }

            });

        });

    });

});
const searchBtn = document.getElementById("searchBtn");
const accountBtn = document.getElementById("accountBtn");
const cartBtn = document.getElementById("cartBtn");

searchBtn.addEventListener("click", function () {
    alert("Search feature coming soon!");
});

accountBtn.addEventListener("click", function () {
    alert("Account feature coming soon!");
});

cartBtn.addEventListener("click", function () {
    alert("Your cart currently has 2 items.");
});