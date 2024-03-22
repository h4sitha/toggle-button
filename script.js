const toggleBtn = document.querySelector('input[type="checkbox"]');

toggleBtn.addEventListener('change', (e) => {
    if (e.target.checked) {
        console.log("Checked!");
    } else {
        console.log("Not Checked!");
    }
})