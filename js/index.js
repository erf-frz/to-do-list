
// add the item to the UI
function addItem(){ 

    //get the input data
        let getInput = function(){
            let input = document.querySelector('#user-input').value;
            
            return input;
        };

    //add data to the UI

    const inputData = getInput();

    if(inputData !== ''){
        const markup = `
        <div class="item">
        <div class="description">${inputData}</div>
        <a href="#" class="cross"><ion-icon name="close-outline"></ion-icon></a>
    </div>
        `;

        document.querySelector('.items-holder').insertAdjacentHTML('beforeend', markup); 
        cleanInput();

    }else{
        alert('please enter the item description!');
    }
            
};

  
 // clear the input field  
 function cleanInput(){
   document.querySelector('#user-input').value = '';
    };





 ////////////////////////////////event handlers//////////////////////////////////////////    
document.querySelector('#enter').addEventListener('click',addItem);

 document.addEventListener('keypress', function(event){
    if(event.keyCode ===13 ||event.which===13){
        addItem();
    }
 });



let itemHolder = document.querySelector('.items-holder');
itemHolder.addEventListener('click', event => {
    
    
    if(event.target.matches('.cross ,.cross *')){
        //delete the item from the list
        let cross = event.target;
        itemHolder.removeChild(cross.parentElement.parentElement);
       

    } else if (event.target.matches('.item')){
        //mark the item as accomplised
        let item = event.target;
       item.classList.toggle('green'); 
    } else if (event.target.matches('.description')){
        let item = event.target;
        item.parentElement.classList.toggle('green');
    }
 
});


////////////////////////////////////

document.addEventListener('DOMContentLoaded',() =>{
       //getting the saved items from the local storage
       
       //showing the items to the UI
});
















/*
internet method:

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field


	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
*/







