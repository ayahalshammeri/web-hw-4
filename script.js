// let q = document.getElementById("Quizes").value
// let m = document.getElementById("Midterm").value
// let f = document.getElementById("FinalTest").value
// let o = document.getElementById("Oral").value

// let total =Number( q) +Number( m) +Number (f) +Number (o);
// document.getElementById("total_grades").innerHTML= total

function gradecalc () {
    let q = document.getElementById("Quizes").value
    let m = document.getElementById("Midterm").value
    let f = document.getElementById("FinalTest").value
    let o = document.getElementById("Oral").value

    let total =Number( q) +Number( m) +Number (f) +Number (o);
document.getElementById("total_grades").innerHTML= total

    if (total >= 90) {
    document.getElementById( "final_grade").innerHTML= "A" }

    else if (total >= 80 && total > 90) {
    document.getElementById( "final_grade").innerHTML= "B"; }

    else if (total >= 70 && total > 80) {
    document.getElementById( "final_grade").innerHTML= "C"; }

    else if (total >= 60 && total > 70) {
    document.getElementById( "final_grade").innerHTML= "D"; }

    else {   
    document.getElementById( "final_grade").innerHTML= "F"; }
    }
   
    