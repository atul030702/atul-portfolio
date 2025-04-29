const terminalContent = document.getElementById("terminal-content");
const commandInput = document.getElementById("command-input");

/*export function initTerminal(inputSelector, terminalSelector) {
    const inputEl = document.querySelector(inputSelector);
    const terminalWindow = document.querySelector(terminalSelector);
  
    if (!inputEl || !terminalWindow) return;
  
    const handleCommand = (event) => {
      if (event.key === 'Enter') {
        const command = inputEl.value.trim();
        if (!command) return;
  
        // Create a fragment to batch DOM updates
        const fragment = document.createDocumentFragment();
  
        // Create and append the executed command line
        const commandLine = document.createElement('div');
        commandLine.className = 'input-line';
        commandLine.innerHTML = `
          <span class="prompt">atul@portfolio:~$</span>
          <span class="executed-command">${escapeHtml(command)}</span>
        `;
        fragment.appendChild(commandLine);
  
        // Handle custom commands (extend this as needed)
        const outputLine = document.createElement('p');
        outputLine.className = 'command-output';
        outputLine.textContent = getCommandResponse(command);
        fragment.appendChild(outputLine);
  
        // Clear input
        inputEl.value = '';
  
        // Re-append a fresh input-line for next command
        const newInputLine = document.createElement('div');
        newInputLine.className = 'input-line';
        newInputLine.innerHTML = `
          <span class="prompt">atul@portfolio:~$</span>
          <div class="input-wrapper">
            <input id="command-input" type="text" autocomplete="off" spellcheck="false" />
          </div>
        `;
        fragment.appendChild(newInputLine);
  
        // Remove old input-line and insert updated lines
        terminalWindow.querySelector('.input-line')?.remove();
        terminalWindow.appendChild(fragment);
  
        // Re-attach event listener to new input
        const newInput = terminalWindow.querySelector('#command-input');
        newInput.focus();
        newInput.addEventListener('keydown', handleCommand, { once: true });
      }
    };
  
    // Initialize the input event binding only once
    inputEl.addEventListener('keydown', handleCommand, { once: true });
  
    // Utility: escape user input for security
    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }
  
    // Dummy response logic — extend this as needed
    function getCommandResponse(cmd) {
      switch (cmd.toLowerCase()) {
        case 'help':
          return "Available commands: help, about, clear";
        case 'about':
          return "This is Atul's interactive terminal portfolio.";
        case 'clear':
          clearTerminalBody();
          return "";
        default:
          return `Command not found: ${cmd}`;
      }
    }
  
    // Clears terminal body (excluding header and footer)
    function clearTerminalBody() {
      const lines = terminalWindow.querySelectorAll('.input-line, .command-output');
      lines.forEach(line => line.remove());
    }
}*/
  