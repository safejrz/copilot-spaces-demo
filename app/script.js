const contextPanel = document.getElementById('context-panel');
const architecturePanel = document.getElementById('architecture-panel');

const showContextButton = document.querySelector('[data-action="show-context"]');
const showArchitectureButton = document.querySelector('[data-action="show-architecture"]');

showContextButton.addEventListener('click', () => {
  contextPanel.classList.remove('hidden');
  architecturePanel.classList.add('hidden');
});

showArchitectureButton.addEventListener('click', () => {
  architecturePanel.classList.remove('hidden');
  contextPanel.classList.add('hidden');
});

const welcomeText = "Copilot Spaces keep project context close to the task.";
console.log(welcomeText);
