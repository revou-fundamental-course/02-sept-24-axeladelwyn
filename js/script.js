// Event listener for form submission
document.getElementById('areaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the form
    const shape = document.getElementById('choose').value;
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const calculate = document.getElementById('area_parameter').value;
    let area;
    let result;

    // Calculate the area based on the selected shape
    if (calculate === 'area') {
        if (shape === 'segitiga') {
            area = 0.5 * base * height; // Area of a triangle
        } else if (shape === 'jajargenjang') {
            area = base * height; // Area of a parallelogram
        }
        document.getElementById('result').textContent = `Luas dari ${shape} adalah ${area}`;
    } else if (calculate === 'parameter') {
        if (shape === 'segitiga') {
            result = 3 * base;
        } else if (shape === 'jajargenjang') {
            result = 2 * (base + height);
        }
        document.getElementById('result').textContent = `Keliling dari ${shape} adalah ${result}`;
    }
});

// Event listener for reset button
document.getElementById('reset').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default reset action

    // Manually clear all form fields
    document.getElementById('choose').value = 'jajargenjang'; // Resetting to default value
    document.getElementById('area_parameter').value = 'area'; // Resetting to default value
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';

    // Clear the result display
    document.getElementById('result').textContent = '';
});


const character1 = document.getElementById('character1');
const character2 = document.getElementById('character2');
const versusScene = document.getElementById('versus-scene');

function showVersusScene() {
    // Set up transition properties and fade out the characters
    [character1, character2].forEach(character => {
        character.style.transition = 'opacity 0.5s ease';
        character.style.opacity = '0';
    });

    // Use a timeout to wait for the fade-out to complete before hiding characters and showing the versus scene
    setTimeout(() => {
        // Hide the characters after the fade-out
        [character1, character2].forEach(character => {
            character.style.display = 'none';
        });

        // Show the versus scene with a fade-in effect
        versusScene.style.display = 'block';
        versusScene.style.opacity = '0'; // Ensure opacity starts from 0
        versusScene.style.transition = 'opacity 0.5s ease';
        versusScene.style.opacity = '1';
    }, 500); // The delay matches the transition duration
}

// Attach event listeners to both characters
[character1, character2].forEach(character => {
    character.addEventListener('click', showVersusScene);
});