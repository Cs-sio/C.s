document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const header = document.querySelector('header');

    // Fonction pour cacher toutes les sections sauf celle spécifiée
    function showSection(sectionId) {
        // Masquer le header (profil et texte associé)
        header.classList.add('section-hidden');
        header.classList.remove('section-visible');

        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.remove('section-hidden');
                section.classList.add('section-visible');
            } else {
                section.classList.add('section-hidden');
                section.classList.remove('section-visible');
            }
        });
    }

    // Fonction pour afficher la page principale
    function showMainPage() {
        // Afficher le header (profil et texte associé)
        header.classList.remove('section-hidden');
        header.classList.add('section-visible');

        sections.forEach(section => {
            if (section.id !== 'bts-sio' && section.id !== 'stages' && section.id !== 'epreuves') {
                section.classList.remove('section-hidden');
                section.classList.add('section-visible');
            } else {
                section.classList.add('section-hidden');
                section.classList.remove('section-visible');
            }
        });
    }

    // Gérer les clics sur les liens de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').replace('#', '');
            
            // Mettre à jour la classe active
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Afficher la section correspondante
            if (targetId === '') {
                showMainPage();
            } else {
                showSection(targetId);
            }
        });
    });

    // Afficher la page d'accueil par défaut
    showMainPage();
}); 