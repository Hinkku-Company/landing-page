if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/landing-page/sw.js', { scope: '/landing-page/' })})}