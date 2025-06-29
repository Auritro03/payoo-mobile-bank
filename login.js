// console.log("Login button added")
document.getElementById("btn-login").addEventListener('click', function (e) {
    e.preventDefault
    console.log('Button clicked')
    const phone = document.getElementById("get-number").value
    const pin = document.getElementById("get-pin").value
    
    console.log(phone, pin)

    if (phone === "1234" && pin === "1111"){
        console.log("You are logged in")
        window.location.href = '/home.html';
    }
    else {
    alert ("Invalid Phone Number or Pin")}

})