const projects = [
    {
        id: 1,
        title: "Système de Détection d'Intrusion",
        icon: "shield-alt",
        color: "#00ff9d",
        category: "Sécurité Réseau",
        description: "Développement d'un IDS personnalisé utilisant l'apprentissage automatique pour détecter les comportements suspects sur le réseau.",
        technologies: [
            "Python (TensorFlow, Scikit-learn)",
            "Analyse de paquets réseau avec Scapy",
            "Base de données MongoDB",
            "Interface web avec Flask"
        ],
        results: [
            "Taux de détection de 95% des attaques connues",
            "Temps de réponse moyen de 100ms",
            "Déploiement réussi en environnement de test"
        ],
        status: "Complété"
    },
    {
        id: 2,
        title: "Audit de Sécurité PME",
        icon: "search",
        color: "#ff6b6b",
        category: "Audit & Conseil",
        description: "Réalisation d'un audit complet de sécurité pour une PME de 50 employés, incluant tests d'intrusion et recommandations.",
        technologies: ["Nmap", "Metasploit", "Wireshark", "Burp Suite"],
        results: [
            "Identification de 15 vulnérabilités critiques",
            "Mise en place d'un plan de remédiation",
            "Formation des employés"
        ],
        status: "En cours"
    },
    {
        id: 3,
        title: "Système de Gestion des Accès",
        icon: "lock",
        color: "#4ecdc4",
        category: "Identity & Access",
        description: "Conception et implémentation d'un système de gestion des accès basé sur les rôles pour une application cloud.",
        technologies: ["Node.js", "JWT", "PostgreSQL", "React"],
        results: [
            "Réduction de 60% des incidents liés aux accès",
            "Temps de réponse < 50ms",
            "Interface intuitive"
        ],
        status: "En développement"
    },
    {
        id: 4,
        title: "Infrastructure Réseau Sécurisée",
        icon: "network-wired",
        color: "#ffd93d",
        category: "Infrastructure",
        description: "Conception et déploiement d'une infrastructure réseau sécurisée pour un environnement de développement.",
        technologies: ["Cisco IOS", "PfSense", "VMware ESXi", "Ansible"],
        results: [
            "Segmentation réseau optimisée",
            "Haute disponibilité 99.9%",
            "Monitoring temps réel"
        ],
        status: "Maintenance"
    }
];

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.setProperty('--glow-color', project.color);
    card.onclick = () => showProjectModal(project);

    const statusClass = {
        'Complété': 'completed',
        'En cours': 'in-progress',
        'En développement': 'development',
        'Maintenance': 'maintenance'
    }[project.status];

    card.innerHTML = `
        <div class="status-badge ${statusClass}">${project.status}</div>
        <div class="flex items-center mb-4">
            <i class="fas fa-${project.icon}" style="color: ${project.color}; font-size: 1.5rem; margin-right: 0.75rem;"></i>
            <div>
                <h2 class="text-2xl font-bold text-white">${project.title}</h2>
                <span class="text-sm text-gray-400">${project.category}</span>
            </div>
        </div>
        <p class="text-gray-300 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mt-4">
            ${project.technologies.slice(0, 3).map(tech => `
                <span class="tech-tag">${tech}</span>
            `).join('')}
            ${project.technologies.length > 3 ? `
                <span class="tech-tag">+${project.technologies.length - 3}</span>
            ` : ''}
        </div>
    `;

    return card;
}

function showProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDescription = document.getElementById('modal-description');
    const modalTechnologies = document.getElementById('modal-technologies');
    const modalResults = document.getElementById('modal-results');

    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalDescription.textContent = project.description;

    modalTechnologies.innerHTML = project.technologies
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join('');

    modalResults.innerHTML = project.results
        .map(result => `<div class="result-item">${result}</div>`)
        .join('');

    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projects-grid');
    projects.forEach(project => {
        projectsGrid.appendChild(createProjectCard(project));
    });

    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', closeModal);

    const modal = document.getElementById('project-modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}); 