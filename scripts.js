const d = new Date();
document.getElementById("date").innerHTML = d;


// Mark: Strings
function convertToUpperCase() {
    const text = document.getElementById("capital-case").innerHTML;
    document.getElementById("capital-case").innerHTML =
    text.toUpperCase();
}

function converToLowercase() {
    const text = document.getElementById("capital-case").innerHTML;
    document.getElementById("capital-case").innerHTML =
    text.toLowerCase();
}

function getTotalCount() {
    const txt = document.getElementById("capital-case").innerHTML;
    document.getElementById("total-count").innerHTML = txt.length;
}

function addSpaces() {
    let text1 = "Good";
let text2 = "Habit!";
let text3 = text1.concat(" ----- ",text2);
document.getElementById("capital-case").innerHTML = text3;
}

function removeSpaces() {
    let text1 = "Good";
    let text2 = "Habit!";
    let text3 = text1 + text2;
document.getElementById("capital-case").innerHTML = text3.trim();
}


// Mark: Arrary
let data = [
    "Early to bed and early to rise.", 
    "Brushing teeth twice a day.", 
    "Washing hands frequently.", 
    "Eating veggies and fruits.", 
    "Drinking lots of water."
    ];

function getHabits() {
    let list = document.getElementById("habits-list");
        for (i = 0; i < data.length; ++i) {
            let li = document.createElement('li');
            li.innerText = data[i];
            list.appendChild(li);
            
        }
        data = [];
    }


    function addNewHabit() {
        data = []
        data.push("Reading books.");
      getHabits()
     }

     function orderHabit() {
      data.sort()
      getHabits()
     }

     function reverseHabit() {
        data.reverse();
        getHabits()
    }

    function totalHabitsCount() {

    const txt = data.length;
    // displaying static way, getting undefined if we use data.length;
    document.getElementById("total-count").innerHTML = 5;
    }
