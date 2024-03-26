document.addEventListener('mousemove', function(e) {
    let crosshair = document.querySelector('.crosshair');
    let xLine = crosshair.querySelector('.x');
    let yLine = crosshair.querySelector('.y');
    
    // Adjust position of lines to center around cursor
    xLine.style.top = e.clientY + window.scrollY + 'px';
    yLine.style.left = e.clientX + window.scrollX + 'px';
});

 // Function to create a single div with the specified coordinates text
function createCoordinateDiv(coordinateText) {
    const div = document.createElement('div');
    div.textContent = coordinateText;
    return div;
}

// Function to generate the coordinates
function generateCoordinates() {
    const coordinatesTop = document.querySelector('.coordinates_top');
    const coordinatesLeft = document.querySelector('.coordinates_left');
    
    // Clear existing content
    coordinatesTop.innerHTML = '';
    coordinatesLeft.innerHTML = '';
    
    let currentCoordinate = 45; // Starting from 50 for top container
    let currentCoordinateLeft = 0; // Starting from 45 for left container
    
    
    for (let i = 0; i < 5; i++) {
        // Generate text for coordinates
        const coordinateText = currentCoordinate + '°0.000\'';
        
        // Create div element for coordinates
        const coordinateDivTop = createCoordinateDiv(coordinateText);
        const coordinateDivLeft = createCoordinateDiv(coordinateText);
        
        // Append coordinates to both containers
        coordinatesTop.appendChild(coordinateDivTop);
        coordinatesLeft.appendChild(coordinateDivLeft);
        
        // Increment coordinates for next iteration
        currentCoordinate += 5;
        currentCoordinateLeft += 5;
    }
}


// Call the function to generate coordinates when the page loads
window.onload = function() {
    generateCoordinates();
};


document.addEventListener('mousemove', function(e) {
    var cursor = document.querySelector('.custom-cursor');
    cursor.style.top = (e.clientY - 0) + 'px'; /* Adjusted position */
    cursor.style.left = (e.clientX - 20) + 'px'; /* Adjusted position */
});