// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const title = document.getElementById('main-title');
    const dynamicContent = document.getElementById('dynamic-content');
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeStyleBtn = document.getElementById('change-style-btn');
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const footerText = document.getElementById('footer-text');

    // 1. Change text content dynamically
    changeTextBtn.addEventListener('click', function() {
        dynamicContent.innerHTML = `
            <h3>New Dynamic Content</h3>
            <p>This content was changed at ${new Date().toLocaleTimeString()}</p>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
            </ul>
        `;
    });

    // 2. Modify CSS styles via JavaScript
    changeStyleBtn.addEventListener('click', function() {
        // Toggle background color
        dynamicContent.style.backgroundColor = 
            dynamicContent.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
        
        // Change border style
        dynamicContent.style.border = 
            dynamicContent.style.border === '2px dashed red' ? '1px solid #ddd' : '2px dashed red';
        
        // Modify text color
        dynamicContent.style.color = 
            dynamicContent.style.color === 'darkgreen' ? '' : 'darkgreen';
    });

    // 3. Add/remove element when button is clicked
    let extraElementExists = false;
    let extraElement = null;

    toggleElementBtn.addEventListener('click', function() {
        if (!extraElementExists) {
            // Create new element
            extraElement = document.createElement('div');
            extraElement.innerHTML = '<p>This is an additional element created by JavaScript!</p>';
            extraElement.style.backgroundColor = 'lightyellow';
            extraElement.style.padding = '10px';
            extraElement.style.marginTop = '10px';
            
            // Insert after dynamic content
            dynamicContent.insertAdjacentElement('afterend', extraElement);
            toggleElementBtn.textContent = 'Remove Element';
        } else {
            // Remove the element
            extraElement.remove();
            toggleElementBtn.textContent = 'Add Element';
        }
        
        extraElementExists = !extraElementExists;
    });

    // Bonus: Update footer with current year
    footerText.textContent = `© ${new Date().getFullYear()} DOM Demo`;
});