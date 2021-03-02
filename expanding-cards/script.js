const panels = document.querySelectorAll('.panel'); // querySelectorAll creates nodelist of all elements called panel (similar to an array). You can target specific nodes in that list usinng their indexes.

// Loop through the nodelist - forEach takes in a function as an argument.
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => { // When you only have one argument in a forEach loop you can remove the parentheses around the argument, e.g. here instead of '(panel)' we write 'panel'.
        panel.classList.remove('active');
    });
}