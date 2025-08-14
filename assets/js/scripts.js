function initNav() {
    const btn = document.getElementById("nav-toggle-btn");
    const menu = document.getElementById("primary-menu");
    if (!btn || !menu) return;

    function setExpanded(expanded) {
        btn.setAttribute("aria-expanded", String(expanded));
        if (expanded) {
            menu.classList.add("open");
        } else {
            menu.classList.remove("open");
        }
    }

    btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        setExpanded(!isOpen);
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setExpanded(false);
    });

    // Manage aria-current on click
    const links = menu.querySelectorAll('a[href^="#"]');
    function setCurrent(link) {
        links.forEach((a) => a.removeAttribute("aria-current"));
        if (link) link.setAttribute("aria-current", "page");
    }
    links.forEach((a) => {
        a.addEventListener("click", () => {
            setCurrent(a);
            setExpanded(false);
        });
    });

    // Optionally set current based on current hash at load
    if (location.hash) {
        const active = Array.from(links).find((a) => a.getAttribute("href") === location.hash);
        if (active) setCurrent(active);
    }

    // Scroll-Spy: update aria-current based on scroll position
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    window.addEventListener("scroll", () => {
        let currentId = null;
        const scrollY = window.scrollY + 100; // offset for header height
        sections.forEach((section) => {
            if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
                currentId = `#${section.id}`;
            }
        });
        if (currentId) {
            const activeLink = Array.from(links).find((a) => a.getAttribute("href") === currentId);
            setCurrent(activeLink);
        }
    });
}

fetch("assets/components/nav.html")
    .then((res) => res.text())
    .then((html) => {
        document.getElementById("nav-placeholder").innerHTML = html;
        initNav(); // Jetzt erst Nav-Logik starten
    });

fetch("assets/components/footer.html")
    .then((res) => res.text())
    .then((html) => (document.getElementById("footer-placeholder").innerHTML = html));
