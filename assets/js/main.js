document.addEventListener("DOMContentLoaded", function () {
    // 1. Mobile Hamburger Menu Toggle
    var hamburger = document.getElementById("hamburgerBtn");
    var navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function () {
            var isOpen = navMenu.classList.toggle("open");
            hamburger.classList.toggle("is-open", isOpen);
            hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        // Tutup menu saat link diklik
        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("open");
                hamburger.classList.remove("is-open");
                hamburger.setAttribute("aria-expanded", "false");
            });
        });

        // Tutup menu saat klik di luar navbar
        document.addEventListener("click", function (e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove("open");
                hamburger.classList.remove("is-open");
                hamburger.setAttribute("aria-expanded", "false");
            }
        });
    }

    // 2. Scroll Reveal Animation dengan fallback aman
    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length > 0) {
        var observer = new IntersectionObserver(
            function (entries, obs) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
        );

        revealEls.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        revealEls.forEach(function (el) {
            el.classList.add("visible");
        });
    }
});
