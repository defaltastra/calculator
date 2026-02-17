let screen = document.getElementById("screen");

function appendNumber(num) {
    screen.value += num;
}

function appendOperation(oper) {
    screen.value += oper;
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
}

function Reset() {
    screen.value = "";
}

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
            initParticles();
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            initParticles();
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            if (window.tsParticles) {
                const container = tsParticles.domItem(0);
                if (container) {
                    container.destroy();
                }
            }
        }
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme, false);
    }
});

// Particles Configuration
function initParticles() {
    if (typeof tsParticles === 'undefined') {
        console.error('tsParticles not loaded');
        return;
    }

    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 4,
                    size_min: 0.3,
                    sync: false
                }
            },
            links: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                    default: "out"
                },
                bounce: false
            }
        },
        interactivity: {
            detectsOn: "window",
            events: {
                onHover: {
                    enable: true,
                    mode: ["grab", "repulse"]
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 1
                    }
                },
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    quantity: 4
                }
            }
        },

        background: {
            color: "transparent"
        },
        detectRetina: true
    });
}