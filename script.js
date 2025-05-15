document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.navbar-item');
    
    items.forEach(item => {
        item.addEventListener('click', function() {
            items.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Ativar o primeiro item por padrão
    items[0]?.classList.add('active');
});