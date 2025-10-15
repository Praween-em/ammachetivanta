document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.style.display = isExpanded ? 'none' : 'block';

            // Toggle icons
            const icons = mobileMenuButton.querySelectorAll('svg');
            icons[0].classList.toggle('hidden');
            icons[0].classList.toggle('block');
            icons[1].classList.toggle('hidden');
            icons[1].classList.toggle('block');
        });
    }
});
