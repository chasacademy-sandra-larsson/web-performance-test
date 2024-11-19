// Large JavaScript File to Simulate Render Blocking
console.log('Render-blocking script running...');

function slowFunction() {
  for (let i = 0; i < 1e8; i++) {} // Simulates a slow computation
}

slowFunction();

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
});