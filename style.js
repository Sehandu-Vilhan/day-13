
function clickme() {

    let id = document.getElementById("Customerid").value;
    let name = document.getElementById("Customername").value;
    let age = document.getElementById("Customerage").value;
    let address = document.getElementById("Customeraddress").value;

    let customers = JSON.parse(localStorage.getItem("customers")) || [];

        customers.push({
            id: id,
            name: name,
            age: age,
            address: address
        });





    localStorage.setItem("customers", JSON.stringify(customers));

    alert("Customer added successfully");

    document.getElementById("Customerid").value = "";
    document.getElementById("Customername").value = "";
    document.getElementById("Customerage").value = "";
    document.getElementById("Customeraddress").value = "";
}
















function clickview() {


    var customers = JSON.parse(localStorage.getItem("customers")) || [];
    var area = document.getElementById("customerTableArea");
 

        if (customers.length === 0) {
            area.innerHTML = "<center><p>No customers found</p></center>";
            return;
        }  


    let table = "<center><br>";
    table += "<table border='1' cellpadding='10' cellspacing='0'>";
    table += "<tr>";
    table += "<th>Customer ID</th>";
    table += "<th>Customer Name</th>";
    table += "<th>Customer Age</th>";
    table += "<th>Customer Address</th>";
    table += "</tr>";




    for (var i = 0; i < customers.length; i++) {
        table += "<tr>";
        table += "<td>" + customers[i].id + "</td>";
        table += "<td>" + customers[i].name + "</td>";
        table += "<td>" + customers[i].age + "</td>";
        table += "<td>" + customers[i].address + "</td>";
        table += "</tr>";
    }

    table += "</table></center>";

    area.innerHTML = table;
}


// localStorage.clear();


// function clickdelete() {

//     localStorage.clear();

// }



function clickdelete() {
    localStorage.removeItem("customers");

    var area = document.getElementById("customerTableArea");
    if (area) {
        area.innerHTML = "";
    }
}






gggggg    ggg       