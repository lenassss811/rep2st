function scrollLeft() {
    document.getElementById("carousel").scrollBy({ left: -800, behavior: 'smooth' });
}

function scrollRight() {
    document.getElementById("carousel").scrollBy({ left: -800, behavior: 'smooth' });
}

function toggleDescription(card) {
    document.querySelectorAll('.card').forEach(c => {
        if (c !== card) c.classList.remove('active');
    });
    card.classList.toggle('active');
}
    