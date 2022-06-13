import SimpleBar from 'simplebar';

const scrollbar = () => {
    document.addEventListener("DOMContentLoaded", () => {
        
        const scrollbarItems = document.querySelectorAll('[data-scrollbar]');

        scrollbarItems.forEach(item => {
            new SimpleBar(item, {
                autoHide: false
            });
        });
        
    });
}


export { scrollbar };