document.addEventListener("DOMContentLoaded", function() {
    // Animate the cover to fill the screen
    gsap.to(".cover", {
        duration: 2,
        width: "100%",
        height: "100%",
        ease: "power2.inOut",
        onComplete: function() {
            // After filling the screen, round the corners of the cover
            gsap.to(".cover", {
                duration: 1,
                borderRadius: "20px",
                onComplete: function() {
                    const tl = gsap.timeline();
                    // Shrink and position the logo in the top left corner
                    tl.to("#logo", {
                        duration: 2,
                        scale: 0.5,
                        top: "0%",
                        left: "0%",
                        transform: "translate(0, 0)",
                        borderRadius: "0",
                        opacity: "1",
                        ease: "power2.out"
                    }, "1")
                    // Move the cover to the right and resize it
                    .to(".cover", {
                        duration: 2,
                        x: "22vw",
                        width: "55%",
                        ease: "power2.inOut",
                    }, 0)
                    // Display the left section with a fade-in effect
                    .add(() => {
                        const leftSection = document.querySelector('.left-section');
                        leftSection.style.display = 'flex';
                        gsap.from(".left-section", { opacity: 0, duration: 1 });
                    }, "-=1");
                }
            });
        }
    });
});

// JavaScript for form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    
    const onlineID = document.getElementById('online-id').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (onlineID === "") {
        alert("Please enter your Online ID.");
        return;
    }

    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    // Simulate login action
    alert("Login successful for user: " + onlineID);
});