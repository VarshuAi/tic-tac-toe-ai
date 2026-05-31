
            const board = document.getElementById('ttt-board');
            let state = Array(9).fill('');
            
            function render() {
                board.innerHTML = '';
                state.forEach((val, idx) => {
                    const cell = document.createElement('div');
                    cell.className = 'ttt-cell';
                    cell.innerText = val;
                    cell.addEventListener('click', () => {
                        if (state[idx] !== '') return;
                        state[idx] = 'X';
                        render();
                        // AI turn
                        setTimeout(aiMove, 300);
                    });
                    board.appendChild(cell);
                });
            }

            function aiMove() {
                const empty = state.map((v, i) => v === '' ? i : null).filter(v => v !== null);
                if (empty.length === 0) return;
                const r = empty[Math.floor(Math.random() * empty.length)];
                state[r] = 'O';
                render();
            }
            render();
        