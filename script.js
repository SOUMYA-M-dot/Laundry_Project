let total = 0;

function scrollToServices() {
    document.getElementById("services")
        .scrollIntoView({ behavior: "smooth" });
}

function addItem(name, price) {

    let li = document.createElement("li");
    li.innerText = name + " - ₹" + price;

    document.getElementById("cartItems")
        .appendChild(li);

    total += price;
    document.getElementById("total").innerText = total;
}

function bookNow() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("Please fill details");
        return;
    }

    document.getElementById("msg").innerText =
        "Thank you for booking the service. We will get back to you soon!";

}
