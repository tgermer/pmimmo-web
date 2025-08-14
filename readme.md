# Projekt M Immobilien – Website

Eine responsive, SEO-optimierte und barrierearme Website für **Projekt M Immobilien** mit Fokus auf Immobilienbewertung, Verkehrswertgutachten und Immobilienverkauf in München.

## 📋 Features

-   **Responsive Design** mit flexiblen Layouts
-   **SEO-optimiert** (strukturierte Überschriften, Meta-Tags, Sitemap)
-   **Barrierearm** (semantische HTML-Struktur, aria-Attribute, Kontrast-Check)
-   **FAQ mit JSON-LD** für Google Rich Snippets
-   **Ausgelagerte Navigation & Footer** per JavaScript-`fetch()` für einfache Wartung
-   **Scroll-Spy** & aktiver Menülink (`aria-current="page"`)
-   **Unterseiten**: Impressum & Datenschutz

## 🧩 Wiederverwendbare Fragmente (Nav & Footer)

Die Dateien assets/components/nav.html und assets/components/footer.html werden auf den Seiten per fetch() eingebunden (siehe scripts.js):

''' // Auszug (vereinfachte Form) fetch("assets/components/nav.html") .then(res => res.text()) .then(html => { document.getElementById("nav-placeholder").innerHTML = html; // hier ggf. initNav() / Scroll-Spy / Events aufrufen });

fetch("assets/components/footer.html") .then(res => res.text()) .then(html => { document.getElementById("footer-placeholder").innerHTML = html; }); '''
