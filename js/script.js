// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Éléments principaux
    const card1 = document.getElementById('card-1');
    const contentArea = document.getElementById('content-area');

    // Données pour la première année
    const firstYearContent = `
        <div class="content-section">
            <h2 class="section-title">Compétences</h2>
            <ul class="skill-list">
                <li>Réseaux : Configuration de routeurs et commutateurs, VLAN, routage statique et dynamique (OSPF)</li>
                <li>Télécoms : Principes des transmissions, fibre optique, technologies sans fil (Wi‑Fi, 4G/5G)</li>
                <li>Programmation : Scripting Bash, Python pour l'automatisation, bases de C</li>
                <li>Sécurité : Pare‑feu, détection d'intrusions, bonnes pratiques de sécurisation</li>
                <li>Virtualisation : Machines virtuelles (VirtualBox), conteneurs Docker</li>
            </ul>
        </div>
        <div class="content-section">
            <h2 class="section-title">Projets</h2>
            <ul class="project-list">
                <li>
                    <div class="project-title">Déploiement d'un réseau local d'entreprise</div>
                    <div class="project-desc">Conception et mise en œuvre d'un réseau sécurisé avec VLAN, DHCP et contrôle d'accès. Utilisation de matériel Cisco Packet Tracer.</div>
                </li>
                <li>
                    <div class="project-title">Script d'automatisation de sauvegarde</div>
                    <div class="project-desc">Développement d'un script Bash pour sauvegarder automatiquement les configurations des équipements réseau sur un serveur FTP.</div>
                </li>
                <li>
                    <div class="project-title">Étude de couverture Wi‑Fi</div>
                    <div class="project-desc">Analyse des performances d'un réseau sans fil existant et propositions d'optimisation (positionnement des points d'accès, canaux).</div>
                </li>
            </ul>
        </div>
    `;

    // Message par défaut
    const defaultMessage = `<div class="default-message"><p>👈 Cliquez sur "1ʳᵉ Année" pour afficher les détails</p></div>`;

    // Fonction pour afficher le contenu de la première année
    function showFirstYearContent() {
        contentArea.innerHTML = firstYearContent;
        // Ajouter une classe pour une transition en douceur (optionnel)
        contentArea.classList.add('content-loaded');
    }

    // Gestionnaire de clic pour la carte 1
    card1.addEventListener('click', function() {
        showFirstYearContent();
    });

    // Gestionnaires pour les cartes inactives (2ème et 3ème année)
    const card2 = document.getElementById('card-2');
    const card3 = document.getElementById('card-3');

    card2.addEventListener('click', function(event) {
        // Empêcher toute action si la carte est inactive
        event.preventDefault();
        // Optionnel : afficher un message temporaire
        const originalContent = contentArea.innerHTML;
        contentArea.innerHTML = `<div class="default-message"><p>🔄 Contenu de la 2ᵉ année en cours de préparation…</p></div>`;
        setTimeout(() => {
            contentArea.innerHTML = originalContent;
        }, 1500);
    });

    card3.addEventListener('click', function(event) {
        event.preventDefault();
        const originalContent = contentArea.innerHTML;
        contentArea.innerHTML = `<div class="default-message"><p>🚧 La 3ᵉ année sera disponible prochainement !</p></div>`;
        setTimeout(() => {
            contentArea.innerHTML = originalContent;
        }, 1500);
    });

    // Initialisation : afficher un message d'accueil
    contentArea.innerHTML = defaultMessage;
});
