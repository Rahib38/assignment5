let sum = 0;
let setCount = 1;
const array = [];
const container = document.getElementById("container");
const countScore = document.getElementById("count-seat");
// console.log(container)
// function conta() {
//     const containerText = document.createElement('div');
//     const containerElement = document.createElement('h2');
//     const containerEle = document.createElement('h2');
//     const containerElemen = document.createElement('h2');
//     containerText.classList.add('font-semibold', 'flex', 'justify-between');
//     containerElement.innerText = "A1"
//     containerEle.innerText = "Economy";
//     containerElemen.innerText = "550";

//     containerText.appendChild(containerElement, containerEle, containerElemen);
//     return containerText;

// }

function count() {
    
}

function click() {
    countScore.innerText = array.length;
}
const buttonColor = document.getElementsByClassName("buttonC");
for (const btn of buttonColor) {
    btn.addEventListener('click', function (e) {
        // console.log(e.target.outerText)
        const vari = e.target.outerText;
        e.target.style.backgroundColor = "#50d71e";
        // Your sit add
        // array.push();
        if (array.includes(vari)) {
            alert('already selected');
            return
        }else{
            array.push(vari);
        }
        if (array.length > 4) {
            // alert('compleate');
            e.target.setAttribute('disabled', true);
            alert('enough');
            e.target.style.backgroundColor = "#F7F7F8";
            return;

        } 

        const h2 = document.createElement("h2");
        const h3 = document.createElement("h2");
        const h4 = document.createElement("h2");
        h2.innerText = setCount + ". " + btn.innerText;
        const seat = document.getElementById("seat");
        seat.appendChild(h2);
        h3.innerText = ['Economy'];
        const title = document.getElementById('title');
        title.appendChild(h3);
        h4.innerText = ['BDT 550'];
        const price = document.getElementById('price');
        price.appendChild(h4);
        setCount++;
// total price
        const taka = sum + 550;        
        const taka2 = document.getElementById('Taka');
        taka2.innerText = taka;
        sum += taka;

        click();

    });

}

