        let listArray = [];
        listArray = [ "eat", "drink", "learn", "code", "sleep" ];
        let newItem = document.getElementById('newInput');			    // declearing inputField from html in JS to receive new items
        let listField = document.getElementById('listField');		    // listField is the field to output my complete list
	    
	      // the declerations below is about the last button added to the html file "Delete All"/"Undelete All" button!
	      let un_deleteButton = document.getElementById('selectAll');	// define "Delete All" button to JS file
	      let buttonValue = document.createElement('p');			        // create a <p> tag within the button to change the text later
	      un_deleteButton.appendChild(buttonValue);				            // that <p> tag will be a child of "Delete All" button
	      buttonValue.classList.add('buttonValue');				            // I need to add a css class to the <p> tag to receive its css properties
        buttonValue.textContent = "Delete All";				              // set the <p> tag to "Delete All", so user can see "Delete All" text on the button

        for(let i=0; i<listArray.length; i++){				
            let listItem = document.createElement('li');		        // create a <li> element to show the each item in the list
            listItem.textContent = listArray[i];			              // set the items content as of the array (in order)
            listField.appendChild(listItem);				                // define where to put (show) that item
            
            listItem.onclick = function(){		// create a function to cross/uncross the item if clicked
                if (listItem.style.textDecoration == "line-through"){	  // if it's already "line-through"
                    listItem.style.textDecoration = "";} 		            // reset the item (like not "line-through")
                else {listItem.style.textDecoration = "line-through";}	// if it's not yet set to "line-through", set it to "line-through"
            }
        }

        function addItem(){
            let listItem = document.createElement('li');      // declearing the newItem as a <li> element in html
            if(newItem.value !== ""){					                // it's necessary to prevent bugs in case of clicking "add" button without an entry
                listArray.push(newItem.value);				        // adds new item to todoList
                listField.appendChild(listItem);			        // the newItem will be created as a child of listELement
                listItem.textContent =newItem.value;	        // give feedback that the newItem succesfully added to the todoList
                listItem.style.textDecoration = "";
            }
            
            listItem.onclick = function(){    // create a function to cross/uncross the item if clicked
                if (listItem.style.textDecoration == "line-through"){	  // if it's already "line-through"
                    listItem.style.textDecoration = "";} 		            // reset the item (like not "line-through")
                 else {listItem.style.textDecoration = "line-through";}	// if it's not yet set to "line-through", set it to "line-through"
            }
            newItem.value = "";   // set the inputField to an empty string
        }

        // decide: if buttonValue is "Delete All" call function deleteAll(), otherwise call function undeleleAll()
        function selectAll(){ 
            (buttonValue.textContent == "Delete All")? deleteAll() : undeleteAll();
        }

        function deleteAll(){
            let items = listField.children;                     // receive all the children of listField (this is the complete list of my todos)
            for(let i=0; i<items.length; i++){
                items[i].style.textDecoration = "line-through"; // set the items' textDecoration to "line-through"
            }
            buttonValue.textContent = "Undelete All";           // change the text on the button to "Delete All"
        }

        function undeleteAll(){
            let items = listField.children;		           // receive all the children of listField (this is the complete list of my todos)
            for(let i=0; i<items.length; i++){
                items[i].style.textDecoration = "";     // reset the items' textDecoration
            }
            buttonValue.textContent = "Delete All";     // change the text on the button to "undelete All"
        }
