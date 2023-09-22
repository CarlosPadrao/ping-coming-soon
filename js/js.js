const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let input = document.querySelector('#email');
    let regex = /\S+@\S+\.\S+/;
    let validEmail = regex.test(input.value);

    if ((!input.value) || (validEmail !== true)) {
        return alert('Digite um email válido')
    } else {
        return alert('Email cadastrado com sucesso!')
    }
  
});