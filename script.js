const menuContainer = document.querySelector(".menu_section");
const pastOrder = JSON.parse(localStorage.getItem("ordersArray"));
const orders = [];
const orderContainer = document.querySelector(".orders_container");
const dish = [
    (primesalmon = {
        img: "salmon.jpg",
        dish_name: "Prime Solmon",
        price: 4700,
        id: "primesalmon",
    }),
    (amala = {
        img: "salmon.jpg",
        dish_name: "Prime Solmon",
        price: 4700,
        id: "primesalmon",
    }),
    (matchpotatoes = {
        img: "salmon.jpg",
        dish_name: "Prime Solmon",
        price: 4700,
        id: "primesalmon",
    }),
];

const renderDish = function (menu) {
    menu.forEach((e) => {
        const html = `
    <div class="food_item">
                    <img src="${e.img}" alt="" />
                    <div data-dish="primesalmon" class="item_details">
                        <p class="item_name">${e.dish_name}</p>
                        <p class="item_price">Order For :${e.price}</p>
                        <button class="order_now">Order Now</button>
                    </div>
                </div>
                    `;

        if (!menuContainer) return;
        menuContainer.insertAdjacentHTML("beforeend", html);
    });
    const orderButtons = document.querySelectorAll(".order_now");
    orderButtons.forEach((e) => {
        e.addEventListener("click", function (e) {
            e.preventDefault();
            const newOrder = e.target.closest(".item_details").dataset.dish;
            placeOrder(newOrder);
        });
    });
};
renderDish(dish);

const placeOrder = function (nOrder) {
    orders.push(dish.find((e) => e.id === nOrder));
    localStorage.setItem("ordersArray", JSON.stringify(orders));
};
console.log("past ;", pastOrder);
const renderOrder = function (order) {
    order.forEach((e) => {
        console.log(e);
        const html = `<div class="ordered_item">
                        <img src="${e.img}" alt="" />
                        <div class="order_details">
                            <p class="order_name">${e.dish_name}</p>
                            <p class="order_price">Order For :${e.price}</p>
                        </div>
                    </div>`;
        orderContainer.insertAdjacentHTML("beforeEnd", html);
    });
};

renderOrder(pastOrder);
