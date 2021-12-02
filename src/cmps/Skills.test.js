const { render, screen } = require('@testing-library/react');
const { debug } = require('console');
const { Skills } = require('./Skills');

test('top h1 is Skills', () => {
    render(<Skills />)
    screen.debug()
});


