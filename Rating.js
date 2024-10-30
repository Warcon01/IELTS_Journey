document.addEventListener('DOMContentLoaded', () => {
    const ratingContainers = document.querySelectorAll('.rating-container');
    const courses = document.querySelectorAll('.card');
    const filterSelect = document.getElementById('filter-rating');

    const savedFilterRating = localStorage.getItem('filter-rating') || 'all';
    filterSelect.value = savedFilterRating;
    applyFilter(savedFilterRating);

    ratingContainers.forEach(container => {
        const stars = container.querySelectorAll('.star');
        const courseCard = container.closest('.card');
        const courseId = courseCard.getAttribute('data-course-id');
        let selectedRating = localStorage.getItem(`rating-${courseId}`) || 0;

        updateStars(stars, selectedRating);

        stars.forEach(star => {
            star.addEventListener('click', () => {
                selectedRating = star.getAttribute('data-value');
                localStorage.setItem(`rating-${courseId}`, selectedRating);
                updateStars(stars, selectedRating);
            });
        });
    });

    function updateStars(stars, rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    function applyFilter(selectedRating) {
        courses.forEach(course => {
            const courseId = course.getAttribute('data-course-id');
            const courseRating = localStorage.getItem(`rating-${courseId}`) || 0;

            if (selectedRating === "all" || parseInt(courseRating) >= parseInt(selectedRating)) {
                course.classList.remove('hidden');
            } else {
                course.classList.add('hidden');
            }
        });
    }

    filterSelect.addEventListener('change', () => {
        const selectedRating = filterSelect.value;
        localStorage.setItem('filter-rating', selectedRating);
        applyFilter(selectedRating);
    });
});
