/*// Check if prefers-color-scheme is supported
if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    // Listen for theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const newColorScheme = e.matches ? 'dark' : 'light';
        updateLogo(newColorScheme);
    });
}

function updateLogo(colorScheme) {
    const logo = document.getElementById('header-logo');
    if (colorScheme === 'dark') {
        logo.src = 'img/torchlight_dark.png';
    } else {
        logo.src = 'img/torchlight_light.png';
    }
}

// Initially update logo based on the current color scheme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    updateLogo('dark');
} else {
    updateLogo('light');
}*/