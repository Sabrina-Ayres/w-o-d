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

let glutesGen = function (glute) {
    let html = "";
    html += '<li>' + selected + '</li>';
    return html;
}

let addGeneratedList = function (glutes) {
    let workout = document.getElementsByClassName('glutes');
    workout.innerHTML = glutesGen(glutes);
}

$('#btn').click(function() {
    $('#glutes').text(selected);
});

// console.log(glutesGen())
console.log(selected);


let tabata = [
    {id: 1, name: "squat jumps", target: "lower body"},
    {id: 2, name: "push-ups", target: "upper body"},
    {id: 3, name: "burpees", target: "cardio"},
    {id: 4, name: "wide sumo squat jumps", target: "lower body"},
    {id: 5, name: "cross-body crunch", target: "core"},
    {id: 6, name: "sit-ups", target: "core"},
    {id: 7, name: "squats", target: "lower body"},
    {id: 8, name: "mountain climbers", target: "cardio"},
    {id: 9, name: "lunges", target: "lower body"},
    {id: 10, name: "jumping jacks", target: "cardio"},
    {id: 11, name: "glute bridges", target: "lower body"},
    {id: 12, name: "back lunge to forward kick", target: "lower body"},
    {id: 13, name: "jog in place", target: "cardio"},
    {id: 14, name: "side-to-side shuffle", target: "lower body"},
    {id: 15, name: "side plank pulses", target: "core"},
    {id: 16, name: "pushbacks", target: "upper body"},
    {id: 17, name: "reverse crunch", target: "core"},
    {id: 18, name: "bird dog", target: "upper body"},
    {id: 19, name: "fire hydrants", target: "lower body"},
    {id: 20, name: "butt kicks", target: "cardio"},
    {id: 21, name: "plank", target: "core"},
    {id: 22, name: "triceps dips", target: "upper body"},
    {id: 23, name: "curtsey lunge", target: "lower body"},
    {id: 24, name: "low push up hold", target: "upper body"},
    {id: 25, name: "heel taps", target: "core"},
    {id: 26, name: "squat side kicks", target: "lower body"},
    {id: 27, name: "shoulder tap push-ups", target: "upper body"},
    {id: 28, name: "leg pull-in", target: "core"},
    {id: 29, name: "high knees", target: "lower body"},
    {id: 30, name: "marching plank", target: "upper body"},
    {id: 31, name: "lying leg lift", target: "core"},
    {id: 32, name: "scissor runs", target: "lower body"},
    {id: 33, name: "box jump", target: "cardio"},
    {id: 34, name: "shoulder press", target: "upper body"},
    {id: 35, name: "superman", target: "upper body"},
    {id: 36, name: "invisible jump rope", target: "cardio"},
    {id: 37, name: "squat pulse jumps", target: "lower body"},
    {id: 38, name: "back extensions", target: "upper body"},
    {id: 39, name: "windshield wiper", target: "core"},
    {id: 40, name: "single leg deadlift", target: "lower body"},
    {id: 41, name: "side plank", target: "core"},
]