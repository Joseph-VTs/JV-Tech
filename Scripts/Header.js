document.querySelectorAll('.Drop-Down button').forEach(button => {
    button.addEventListener('click', () => {
        const Menu1 = button.nextElementSibling; //PEga o proximo elemento após o button -> li
        const Expandir_Menu = button.getAttribute('aria-expanded') === 'true'; // Verifica se o menu está Aberto ou Fechado

        button.setAttribute('aria-expanded', !Expandir_Menu);
        Menu1.hidden = Expandir_Menu;
    });
});

document.addEventListener('click', (e) => {
    document.querySelectorAll('.Drop-Down').forEach(Dropdown => {
        const Button = Dropdown.querySelector('button');
        const Menu2 = Dropdown.querySelector('.Drop-Down-Menu');

        // contains(e.target) retorna false se o clique não foi dentro do dropdown.
        if(!Dropdown.contains(e.target)) {
            Button.setAttribute('aria-expanded', false);
            Menu2.hidden = true;
        }
    });
});