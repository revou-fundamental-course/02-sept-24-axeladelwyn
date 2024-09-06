document.getElementById('areaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the form
    const shape = document.getElementById('choose').value;
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const calculate = document.getElementById('area_parameter').value;
    let area;

    // Calculate the area based on the selected shape
    if (calculate === 'area') {
        if (shape === 'segitiga') {
            area = 0.5 * base * height; // Area of a triangle
        } else if (shape === 'jajargenjang') {
            area = base * height; // Area of a parallelogram
        }
        document.getElementById('result').textContent = `The area of the ${shape} is ${area}`;
    
    // Display the result
    } else if (calculate === 'parameter') {
        if (shape === 'segitiga') {
            result = 3 * base;
        } else if (shape === 'jajargenjang') {
            result = 2 * (base+height);
        }

    }
    document.getElementById('result').textContent = `The perimeter of the ${shape}$ is ${result}`;

    
    // Display the result

});
