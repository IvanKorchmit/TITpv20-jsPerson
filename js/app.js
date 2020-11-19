function printPerson() {
    let name = "Ivan Korchmit";
    let city = "Oru, Kohtla-Jarve";
    let country = "Estonia";
    let age = 17;
    let drivingLicense = false;
    let drivingstatus = "";
    if(age >= 18) {
        drivingLicense = true;
    }
    else {
        drivingLicense = false;
    }
    if(drivingLicense) {
        drivingstatus = "is able to drive a car and has a license for that.";
    }
    else {
        drivingstatus = "is not able to drive a car since he is too young for that."
    }
    console.log(`Name: ${name}. Location: ${city}, ${country}. Age: ${age}. Driving status: ${drivingstatus}`);
    
    const html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}, ${country}</li>
        <li>Driving status: ${drivingstatus}</li>
    
    </ul>
    `;
    document.body.innerHTML = html;


}
printPerson();