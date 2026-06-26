// Alternância entre Login e Cadastro

const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.form-section');
const leftTitle = document.getElementById('leftTitle');
const leftText = document.getElementById('leftText');

// Conteúdo dinâmico da lateral
const content = {

    login: {
        title: 'Tecnologia para a <span>excelência clínica.</span>',
        text: 'Plataforma de gestão integrada para multiprofissionais da saúde que buscam precisão e eficiência.'
    },

    register: {
        title: 'Suprimentos de alta qualidade para sua <span>clínica.</span>',
        text: 'Distribuidora especializada em produtos da área da saúde com mais de seis décadas no mercado.'
    }
};

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        // Atualiza abas
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        // Atualiza formulários
        sections.forEach(section => {
            section.classList.remove('active');
        });

        document.getElementById(target).classList.add('active');

        // Atualiza conteúdo da lateral

        leftTitle.innerHTML = content[target].title;
        leftText.textContent = content[target].text;
    });
});

// Máscara simples para CPF e CEP

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        input.value = input.value;
    });
});

// Simulação de envio do formulário

document.querySelectorAll('.form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const button = form.querySelector('.btn-primary');
        const originalText = button.textContent;
        button.textContent = 'Processando...';
        button.disabled = true;

        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            alert('Ação realizada com sucesso!');
        }, 1500);

    });

});