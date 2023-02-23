const farePerKm = 0.21;
// document.getElementById("ticketFare").innerHTML = farePerKm;

const underageDiscount = 20 / 100;
const seniorDiscount = 40 / 100;

const userName = document.querySelector('#userName');
const userAge = document.querySelector('#userAge');
const userDistance = document.querySelector('#userDistance');

// submit button
const submit = document.querySelector('#submit');
submit.addEventListener ('click',
    function (){
        let age = userAge.value;
        // userAge validity test
        if ( age != "") {
            let distance = userDistance.value;
            // userDistance validity test
            if (!(isNaN(distance))) {

                let price = distance * farePerKm;

                const ticketDiscount = document.getElementById("ticketDiscount");

                // discount check
                if (age == "underage") {
                    // 20% discount to underage
                    price -= price * underageDiscount;
                    // ticketDiscount.innerHTML = (`Underage ${underageDiscount * 100}% discount applied.`);
                    console.log(`Underage ${underageDiscount * 100}% discount applied.`)
                } else if (age == "senior") {
                    // 40% discount to seniors
                    price -= price * seniorDiscount;
                    // ticketDiscount.innerHTML = (`Senior ${seniorDiscount * 100}% discount applied.`);
                    console.log(`Senior ${seniorDiscount * 100}% discount applied.`)
                }

                // fixing price to 2 digits after decimal point
                price = price.toFixed(2);

                // document.getElementById("ticketPrice").innerHTML = `Final ticket price: ${price} &euro;`;
                console.log(`Final ticket price: ${price} &euro;`)
            
            } else {
                // userDistance validity test error
                alert ("Please, enter a valid distance.");
            }
        } else {
            // userAge validity test error
            alert ("Please, select your age.");
        }
    }
);

// reset button
const reset = document.querySelector('#reset');
reset.addEventListener ('click', 
    function(){
        userAge.value = "";
        userDistance.value = "";
        userName.value = "";
    }
)