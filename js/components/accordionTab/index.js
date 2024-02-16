document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll('.accordionHeader');

    accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordionContent');
            const isActive = accordionItem.classList.contains('active');

            closeAllItems();

            if (!isActive) {
                accordionItem.classList.add('active');
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
        });
    });

    function closeAllItems() {
        const accordionItems = document.querySelectorAll('.accordionItem');
        accordionItems.forEach(function (item) {
            item.classList.remove('active');
            const accordionContent = item.querySelector('.accordionContent');
            accordionContent.style.maxHeight = null;
        });
    }
});