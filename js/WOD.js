"use strict";

// An Array of workout objects
let tabatas = [
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
];


// Shuffle array
// const shuffled = tabatas.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
// let selected = shuffled.slice(0, 10);


function renderTabata(selected) {
    let html = '<div class="col d-inline-flex align-items-baseline mb-3 mt-1">';
    html += '<h2>' + selected.name + '</h2>';
    html += '<p class="ml-2">' + selected.target + '</p>';
    html += '</div>';
    html += '<hr>';

    return html;
}


function renderTheTabatas() {
    let shuffled = tabatas.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 10);
    console.log(shuffled);
    console.log(selected);
    let html = '';
    for (let i = 0; i < 10; i++) {
        html += renderTabata(selected[i]);
    }

    return html;
}



$('#btn-gen').on('click', function() {
    $('#tabatas').html(renderTheTabatas());
});

$('#regen').on('click', function() {
    $('#tabatas').html(renderTheTabatas());
});

