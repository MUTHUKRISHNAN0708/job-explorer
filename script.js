// Helper to get query params
function getQueryParam(param) {
    const urlParams = new URL(window.location.href).searchParams;
    return urlParams.get(param);
}

// Inject Shared Resources (3D Background & Scripts)
function loadSharedResources() {
    // 1. Inject Canvas Container
    if (!document.getElementById('canvas-container')) {
        const canvasDiv = document.createElement('div');
        canvasDiv.id = 'canvas-container';
        document.body.prepend(canvasDiv);
    }

    // 2. Inject Three.js (if not present)
    if (!document.querySelector('script[src*="three.min.js"]')) {
        const threeScript = document.createElement('script');
        threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
        threeScript.onload = () => {
            // Load background script after Three.js is ready
            if (!document.querySelector('script[src*="background_3d.js"]')) {
                const bgScript = document.createElement('script');
                bgScript.src = "js/background_3d.js";
                document.body.appendChild(bgScript);
            }
        };
        document.body.appendChild(threeScript);
    } else {
        // Three.js already there, just load background if needed
        if (!document.querySelector('script[src*="background_3d.js"]')) {
            const bgScript = document.createElement('script');
            bgScript.src = "js/background_3d.js";
            document.body.appendChild(bgScript);
        }
    }
}


// Inject Navbar and Footer
function loadSharedElements() {
    // Determine depth for relative links (basic handling)
    // Assuming structure is flat for HTML files based on file list
    const basePath = '';

    // Navbar Content
    const navbarHTML = `
    <div class="container">
        <a href="index.html" class="navbar-brand">Career Explorer</a>
        <div class="menu-toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="explore.html">Explore</a></li>
            <li><a href="skills.html">Skills</a></li>
            <li><a href="roadmap.html">Roadmap</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
    </div>
    `;

    // Footer Content
    const footerHTML = `
    <div class="container">
        <p>&copy; 2024 Career Explorer. All rights reserved.</p>
    </div>
    `;

    // Inject Navbar
    // Check if navbar already exists to avoid dupes
    if (!document.querySelector('.navbar')) {
        const navElement = document.createElement('nav');
        navElement.className = 'navbar glass-nav';
        navElement.innerHTML = navbarHTML;
        // Insert after canvas container if it exists, otherwise prepend
        const canvasContainer = document.getElementById('canvas-container');
        if (canvasContainer) {
            canvasContainer.after(navElement);
        } else {
            document.body.prepend(navElement);
        }
    }

    // Inject Footer
    if (!document.querySelector('footer')) {
        const footerElement = document.createElement('footer');
        footerElement.innerHTML = footerHTML;
        document.body.appendChild(footerElement);
    }

    // Mobile Menu Logic
    setTimeout(() => { // Slight delay to ensure DOM is ready
        const menuToggle = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        if (menuToggle && navLinks) {
            // Clone to remove old event listeners if any (simple reset)
            const newMenuToggle = menuToggle.cloneNode(true);
            menuToggle.parentNode.replaceChild(newMenuToggle, menuToggle);

            newMenuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
    }, 100);
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
    loadSharedResources();
    loadSharedElements();
});
