document.addEventListener('DOMContentLoaded', function () {
    const userTab = document.getElementById('user-tab');
    const sellerTab = document.getElementById('seller-tab');
    const userForm = document.getElementById('user-form');
    const sellerForm = document.getElementById('seller-form');

    if (userTab && sellerTab && userForm && sellerForm) {
        userTab.addEventListener('click', () => {
            userForm.style.display = 'block';
            sellerForm.style.display = 'none';
            userTab.classList.add('text-primary', 'border-primary');
            userTab.classList.remove('text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
            sellerTab.classList.add('text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
            sellerTab.classList.remove('text-primary', 'border-primary');
        });

        sellerTab.addEventListener('click', () => {
            userForm.style.display = 'none';
            sellerForm.style.display = 'block';
            sellerTab.classList.add('text-primary', 'border-primary');
            sellerTab.classList.remove('text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
            userTab.classList.add('text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
            userTab.classList.remove('text-primary', 'border-primary');
        });
    }
});
