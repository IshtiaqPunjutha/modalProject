//access all id's/classes of elements

var buttonOpen = document.getElementById("modal-btn");
var modalMain = document.getElementById("modalMain");
var ovFlow = document.getElementById("ovFlow");

//display Modal
function openModel() {
    modalMain.style.display = "block";

    //adding Class using JavaScipt

    //ovFlow.classList.add('ovFlowHidden');

    //Adding Clcass using Jquery

    $(ovFlow).click(function() {
        $(this).addClass('ovFlowHidden');
    });

}


//Hide Modal

function closeModal() {
    modalMain.style.display = "none";

    //removing class using javascript

    // ovFlow.classList.remove('ovFlowHidden');

    //removing class using Jquery
    $(ovFlow).click(function() {
        $(this).removeClass('ovFlowHidden');
    });
}