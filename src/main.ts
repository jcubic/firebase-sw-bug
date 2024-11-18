import './style.css'

import chat from './chat.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Firebase bug</h1>
    <button>chat</button>
  </div>
`;

document.querySelector<HTMLDivElement>('button')!.addEventListener('click', chat);
