function validateForm() {
    let x = document.forms["myForm"]["Email"].value;
    let y = document.forms["myForm"]["Subjek"].value;
    let z = document.forms["myForm"]["Message"].value;

    if (x == "" || y == "" || z == "") {
        alert("Kamu harus mengisi data form!");
        return false;
    } else {
        alert("Form Submitted");
        return true;
    }
}