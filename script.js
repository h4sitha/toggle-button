const toggleBtn = document.querySelector('input[type="checkbox"]');

toggleBtn.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.style.backgroundColor = "hsl(120, 73%, 90%)";
    } else {
        document.body.style.backgroundColor = "hsl(0, 0%, 95%)";
    }
})