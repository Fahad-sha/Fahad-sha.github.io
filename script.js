document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // --- Preloader ---
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        gsap.to(preloader, { opacity: 0, duration: 0.8, ease: "power2.out", onComplete: () => preloader.style.visibility = 'hidden' });
    }, 1000);

    // --- Typewriter Effect ---
    const typewriterText = document.getElementById('typewriter-text');
    const typeStrings = ["A Data Scientist.", "An ML Engineer.", "An AI Enthusiast."];
    let typeIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!typewriterText) return;
        const currentString = typeStrings[typeIndex];
        if (isDeleting) {
            typewriterText.textContent = currentString.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterText.textContent = currentString.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentString.length) {
            gsap.delayedCall(1.5, () => isDeleting = true); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typeIndex = (typeIndex + 1) % typeStrings.length;
        }

        const typingSpeed = isDeleting ? 70 : 150;
        gsap.delayedCall(typingSpeed / 1000, typeEffect);
    }

    // --- Hero Section Entrance Animation ---
    const heroTimeline = gsap.timeline({ delay: 0.8 }); // Start after preloader

    heroTimeline
        .from(".hero-intro", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" })
        .from(".hero-name", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.3")
        .from(".hero-tagline", { opacity: 0, y: 20, duration: 0.7, ease: "power2.out", onComplete: typeEffect }, "-=0.4")
        .from(".hero-description", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .from(".hero-cta-buttons .btn", { opacity: 0, y: 20, stagger: 0.15, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .from(".hero-image-container", { scale: 0.8, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.7)" }, "-=0.8")
        .from(".social-links-hero a", { opacity: 0, y: 10, stagger: 0.1, duration: 0.5, ease: "power1.out" }, "-=0.6")
        .from(".scroll-down-indicator", { opacity: 0, y: 20, duration: 0.5, ease: "power1.out" }, "-=0.4");


    // --- Mobile Navigation Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            gsap.fromTo(nav, {y: '-100%'}, {y: '0%', duration: 0.3, ease: 'power2.out'});
        } else {
            gsap.to(nav, {y: '-100%', duration: 0.3, ease: 'power2.in'});
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            gsap.to(nav, {y: '-100%', duration: 0.3, ease: 'power2.in'});
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // --- Active Nav Link on Scroll & Back to Top Button ---
    const sections = document.querySelectorAll('section[id]');
    const backToTop = document.querySelector('.back-to-top');

    sections.forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(section.id)) {
                        link.classList.add('active');
                    }
                });
            },
            onEnterBack: () => {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(section.id)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            if (!backToTop.classList.contains('show')) {
                backToTop.classList.add('show');
                gsap.fromTo(backToTop, {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(1.7)'});
            }
        } else {
            if (backToTop.classList.contains('show')) {
                backToTop.classList.remove('show');
                gsap.to(backToTop, {opacity: 0, scale: 0.8, duration: 0.3, ease: 'power2.in'});
            }
        }
    });

    // --- Content Reveal Animations (for elements with 'reveal-on-scroll') ---
    const revealElements = gsap.utils.toArray('.reveal-on-scroll');

    revealElements.forEach(element => {
        gsap.from(element, { // Elements are visible by default in CSS
            opacity: 0,
            y: 50, // Starts 50px below final position
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%", // When element is 85% from top of viewport
                toggleActions: "play none none none",
                once: true, // Only animate once
            }
        });
    });

    // --- Skill Bar Animations ---
    document.querySelectorAll('.skill-progress').forEach(bar => {
        const progressValue = bar.dataset.progress;
        const skillBarParent = bar.closest('.skill-bar');

        gsap.to(skillBarParent, {
            '--progress-scale': progressValue / 100, // Set custom CSS property
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: skillBarParent,
                start: "top 80%",
                toggleActions: "play none none none",
                once: true,
                onComplete: () => {
                    skillBarParent.classList.add('animated'); // Add class to trigger CSS pseudo-element animation
                }
            }
        });
    });

    // --- Card Hover Effects (using GSAP for more control) ---
    gsap.utils.toArray([
        ".detail-card",
        ".client-logo-item", // Client logos are now individual cards
        ".project-card",
        ".skills-card",
        ".timeline-content", // Specific for experience section
        ".achievement-column",
        ".certification-column",
        ".contact-info-card",
        ".contact-form-card"
    ]).forEach(card => {
        let hoverTL = gsap.timeline({ paused: true });
        hoverTL.to(card, {
            y: -5, // Subtle lift
            boxShadow: "var(--box-shadow-elevated)", // Stronger shadow
            borderColor: "var(--primary-color)", // Accent border
            duration: 0.2,
            ease: "power1.out"
        });

        // Icon animation within the card
        const icon = card.querySelector('.icon-animated');
        if (icon) {
            hoverTL.to(icon, {
                scale: 1.1,
                textShadow: "var(--glow-effect)",
                duration: 0.2
            }, "<"); // Animate icon at the same time as card
        }

        // Project card specific hover (arrow indicator)
        const projectLinkIndicator = card.querySelector('.project-link-indicator');
        if (projectLinkIndicator) {
            hoverTL.to(projectLinkIndicator, {
                x: 5, // Move right
                color: "var(--highlight-color)",
                duration: 0.2
            }, "<");
        }

        card.addEventListener('mouseenter', () => hoverTL.play());
        card.addEventListener('mouseleave', () => hoverTL.reverse());
    });


    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});