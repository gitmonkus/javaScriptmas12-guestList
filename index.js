// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?

const input = document.getElementById("input")
const btn = document.getElementById("btn")
const rmBtn = document.getElementById("rm-btn")
let guestList = document.getElementById("guest-list")

let guests = ["Me", "Cat", "Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]



// Play jingle
const audio = new Audio('audio/xmas.mp3')
document.getElementById('play-btn').addEventListener('click', function() {
    audio.volume = .3
    audio.play()
})

// Starting function -- populates list
function render() {
    for (let guest of guests) {
         guestList.innerHTML += `<li>${guest}</li>`
    }
}

// Adds guest to array and prints to list
btn.addEventListener('click', addGuest)

function addGuest() {
    let newGuest = input.value  
    if (input.value) {
        guests.push(input.value)
        guestList.innerHTML += `<li>${newGuest}</li>`
        input.value = ''
    } 
}

// Remove guest from array or last item from array 
rmBtn.addEventListener('click', removeGuest)

function removeGuest() {
    if (input.value) {
        for (let guest of guests) {
        if (input.value.toLowerCase() === guest.toLowerCase()) {
            let index = guests.indexOf(guest)
            input.value = ''
            guests.splice(index, 1)
            guestList.textContent = ''
            render()  
        } 
    } 
    } else {
        if (guestList.textContent && !input.value) {
        guests.pop()
        guestList.textContent = ''
        render()
        } 
    }
    
}

// Start
render()
