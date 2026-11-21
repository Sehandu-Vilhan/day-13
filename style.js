



function clickme() {
    let Customerid = "00" + document.getElementById("Customerid").value;
    let Customername = document.getElementById("Customername").value;
    let Customerage = document.getElementById("Customerage").value;
    let Customeraddress = document.getElementById("Customeraddress").value;




    const Customer = {
        cusid: Customerid,
        cusname: Customername,
        cusage: Customerage,
        cusaddress: Customeraddress
    };

    saveCustomertoarray(Customer);
}

function saveCustomertoarray(Customer) {
    if (localStorage.getItem("Customerlist")) {
        console.log(true);
        let arofCustomer = JSON.parse(localStorage.getItem("Customerlist"));
        arofCustomer.push(Customer);
        localStorage.setItem("Customerlist", JSON.stringify(arofCustomer));
    } else {
        console.log(false);
        const Customerlist = [];
        Customerlist.push(Customer);
        localStorage.setItem("Customerlist", JSON.stringify(Customerlist));
    }
}




function clickMe_H() {


    document.getElementById("hhh").innerHTML = "";

    for (let i = 0; i < His1.length; i++) {


        document.getElementById("hhh").innerHTML += His1[i];


    }




}





//  localStorage.clear();
