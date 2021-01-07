"use strict";

var cardio = [""];

var abs = ["Crunches", "Side Plank Pulses", "Vertical Mountain Climbers",
            "Flutter Kicks", "V-Ups", "Leg Raises", "Toe Taps",
            ""];

var glutes = ["Squats", "Glute Bridges", "Donkey Kicks", "Curtsy Lunges",
                "Clamshells", "Fire Hydrant", "Single Leg Deadlift",
                "Reverse Lunges", "Side Lunges", "Hip Abduction"];

var legs = [""];

// Shuffle array
const shuffled = glutes.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, 5);

console.log(selected);

// var randomIndex = Math.floor(Math.random()*glutes.length);
// var randomElement = glutes[randomIndex]
// console.log(randomElement);
