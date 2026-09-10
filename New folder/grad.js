function calculateGrade(score) {
    if (isNaN(score)) {
        console.log("Please enter a valid number.");
    } else if (score >= 80) {
        console.log("Grade: A");
    } else if (score >= 75) {
        console.log("Grade: B+");
    } else if (score >= 70) {
        console.log("Grade: B");
    } else if (score >= 65) {
        console.log("Grade: C+");
    } else if (score >= 60) {
        console.log("Grade: C");
    } else if (score >= 55) {
        console.log("Grade: D+");
    } else if (score >= 50) {
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }

    console.log("Score: " + score);
    return score;
}

function printName() {
    let name = "Gun";
    console.log("Name: " , name);
    document.write("<br> Your Name: " , name);
}

function printNames(name) {
    console.log("Name: " , name);
    document.write("<br> Your Name: " , name);
}

function totalPrize(prizes,quantity) {
    let totalPrice = prizes*quantity;
    console.log("Total Prize: " , totalPrice);
    return totalPrice;
}

function totalPrizeWithTax(prizes,quantity,tax) {  
    let total = totalPrize(prizes,quantity);
    let totalWithTax = total + (total * tax);
    console.log("Total Prize with Tax: " , totalWithTax);
    return totalWithTax;
}

