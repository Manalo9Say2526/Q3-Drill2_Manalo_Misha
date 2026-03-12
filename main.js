function calculateArea() {

    let radius = Number(document.getElementById("one").value);
    let area = Math.PI * Math.pow(radius, 2);

    document.getElementById("two").value = area;
                

}