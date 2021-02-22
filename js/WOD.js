"use strict";

let cardio = [""];

let abs = ["Crunches", "Side Plank Pulses", "Vertical Mountain Climbers",
            "Flutter Kicks", "V-Ups", "Leg Raises", "Toe Taps",
            ""];

let glutes = ["Squats", "Glute Bridges", "Donkey Kicks", "Curtsy Lunges",
                "Clamshells", "Fire Hydrant", "Single Leg Deadlift",
                "Reverse Lunges", "Side Lunges", "Hip Abduction"];

let legs = [""];

// Shuffle array
const shuffled = glutes.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, 5);

// let glutesGen = function (glute) {
//     let html = "";
//     html += '<li>' + selected + '</li>';
//     return html;
// }
//
// let addGeneratedList = function (glutes) {
//     let workout = document.getElementsByClassName('glutes');
//     workout.innerHTML = glutesGen(glutes);
// }

$('#btn').click(function() {
    $('#glutes').text(selected);
});

// console.log(glutesGen())
console.log(selected);


