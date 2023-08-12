//HOME

let homeCount = 0
let changeCount = document.getElementById("home--btn")

function plusOne() {
    homeCount = homeCount + 1
    changeCount.textContent = homeCount
}

function plusTwo() {
    homeCount = homeCount + 2
    changeCount.textContent = homeCount
}

function plusThree() {
    homeCount = homeCount + 3
    changeCount.textContent = homeCount
}


//GUEST
let guestCount = 0
let guestCountChange = document.getElementById("guest--btn")

function guestPlusOne(){
    guestCount = guestCount + 1
    guestCountChange.textContent = guestCount
}

function guestPlusTwo(){
    guestCount = guestCount + 2
    guestCountChange.textContent = guestCount
}

function guestPlusThree(){
    guestCount = guestCount + 3
    guestCountChange.textContent = guestCount
}

// SAVE
//let saveHomeCount 
//let saveGuestCount

let saveHome = document.getElementById("home--count")
let saveGuest = document.getElementById("guest--count")


function save(){
     let saveHome = homeCount + " - "
     saveHome.textConent += saveHome
     console.log(homeCount)
}

