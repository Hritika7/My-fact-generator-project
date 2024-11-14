const facts = [
    "I am an 18-year-old with a curious and adventurous spirit.",
    "I love exploring, traveling, and experiencing new things.",
    "I have a nurturing personality with a fondness for cats."
];

function showFact() {
    const factDisplay = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}
