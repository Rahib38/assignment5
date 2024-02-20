let sum = 0;
function count(){
    // console.log('ha ha');
    const countScore =  document.getElementById ("count-seat");
    const countText = countScore.innerText;
    const sum = parseFloat(countText);
    const newCount = sum + 1;

    countScore.innerText = newCount;
    const buttonColor = document.getElementsByClassName("buttonC ");
    
    
 for(const btn of buttonColor){
    btn.addEventListener('click', function(e){
        e.target.style.backgroundColor = "#50d71e"
        // if(newCount < 4){
        //     // alert('compleate');
        //     // return;
        // }else{
        //     alert('sombob na');
        //     // return;
        // }
    })
 }
    // document.getElementById('Buy-Tickets').addEventListener('click', function(e){
    //     document.location = getElementById('button');
    // })
}


