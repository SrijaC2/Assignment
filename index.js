
import fs from 'fs';

// Function to decode values from different bases
function decodeValue(base, value) {
    return parseInt(value, base);
}

// Function to extract (x, y) pairs from the JSON input
function extractPoints(data) {
    const points = [];
    for (let key in data) {
        if (key !== 'keys') {
            const x = parseInt(key);
            const y = decodeValue(parseInt(data[key].base), data[key].value);
            points.push([x, y]);
        }
    }
    return points;
}

// Function to perform Lagrange interpolation
function lagrangeInterpolation(points) {
    let constantTerm = 0;

    for (let i = 0; i < points.length; i++) {
        const [x_i, y_i] = points[i];

        // Calculate the Lagrange basis polynomial L_i(0) at x = 0
        let li = 1;
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                const [x_j] = points[j];
                li *= (0 - x_j) / (x_i - x_j); // Calculate L_i(0)
            }
        }

        // Add to the constant term (L_i(0) * y_i)
        constantTerm += li * y_i;
    }

    return constantTerm;
}



// Read and parse the JSON file
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Extract points from the JSON
    const points = extractPoints(jsonData);
    console.log(points)

    // Only take k points (minimum required to solve the polynomial)
    const k = jsonData.keys.k;
    const selectedPoints = points.slice(0, k);

    // Find the constant term 'c' using Lagrange interpolation
    const constantTerm = lagrangeInterpolation(selectedPoints);

    // Output the result
    console.log("Constant term (c) of the polynomial:", constantTerm);
});