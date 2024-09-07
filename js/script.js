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

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('areaForm').reset();
    document.getElementById('result').textContent= '';
});

const character1 = document.getElementById('character1');
const character2 = document.getElementById('character2');
const versusScene = document.getElementById('versus-scene');

function showVersusScene() {
    // Hide the characters
    character1.style.display = 'none';
    character2.style.display = 'none';

    // Show the versus scene
    versusScene.style.display = 'block';
}

character1.addEventListener('click', showVersusScene);
character2.addEventListener('click', showVersusScene);

function showVersusScene() {
    // Optionally, add a fade-out effect for characters
    character1.style.transition = 'opacity 0.5s';
    character2.style.transition = 'opacity 0.5s';
    character1.style.opacity = '0';
    character2.style.opacity = '0';

    setTimeout(() => {
        // Hide the characters
        character1.style.display = 'none';
        character2.style.display = 'none';

        // Show the versus scene with a fade-in effect
        versusScene.style.display = 'block';
        versusScene.style.opacity = '0';
        versusScene.style.transition = 'opacity 0.5s';
        versusScene.style.opacity = '1';
    }, 500);
}
