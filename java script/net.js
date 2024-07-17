// JavaScript for FAQ section toggling

// FAQ Box 1
let first_fque = document.querySelector('#first-box-of-feque');
let new_data = document.querySelector('.new-data');

first_fque.addEventListener('click', () => {
    toggleFAQ(new_data);
});

// FAQ Box 2
let second_fque = document.querySelector('#box-second-of-fque');
let new_data2 = document.querySelector('.new-data2');

second_fque.addEventListener('click', () => {
    toggleFAQ(new_data2);
});

// FAQ Box 3 (Sample, continue this pattern for other boxes)
let third_fque = document.querySelector('#box-third-of-fque');
let new_data3 = document.querySelector('.new-data3');

third_fque.addEventListener('click', () => {
    toggleFAQ(new_data3);
});

// FAQ Box 4 (Sample, continue this pattern for other boxes)
let fourth_fque = document.querySelector('#box-fourth-of-fque')
let new_data4 = document.querySelector('.new-data4');

fourth_fque.addEventListener('click', () => {
    toggleFAQ(new_data4);
});

// FAQ Box 5 (Sample, continue this pattern for other boxes)
let fifth_fque = document.querySelector('#box-fifth-of-fque')
let new_data5 = document.querySelector('.new-data5');

fifth_fque.addEventListener('click', () => {
    toggleFAQ(new_data5);
});


// FAQ Box 6 (Sample, continue this pattern for other boxes)
let sixth_fque = document.querySelector('#box-sixth-of-fque')
let new_data6 = document.querySelector('.new-data6');

sixth_fque.addEventListener('click', () => {
    toggleFAQ(new_data6);
}); 

let seventh_fque = document.querySelector('#box-seventh-of-fque')
let new_data7 = document.querySelector('.new-data7');

seventh_fque.addEventListener('click', () => {
    toggleFAQ(new_data7);
});
 // Function to toggle FAQ content visibility
function toggleFAQ(element) {
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
 
