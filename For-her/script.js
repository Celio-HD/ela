document.addEventListener('DOMContentLoaded', function() {
    var dates = document.querySelectorAll('.date');
    dates.forEach(function(date) {
        date.addEventListener('click', function() {
            var content = this.nextElementSibling;
            if (content.classList.contains('content') && !content.classList.contains('animating')) {
                if (content.classList.contains('visible')) {
                    content.classList.remove('visible');
                    content.classList.add('hidden');
                    content.classList.add('animating');
                    content.addEventListener('animationend', function() {
                        content.classList.remove('animating');
                        content.style.display = 'none';
                    }, { once: true });
                } else {
                    content.style.display = 'block';
                    content.classList.remove('hidden');
                    content.classList.add('visible');
                    content.classList.add('animating');
                    content.addEventListener('animationend', function() {
                        content.classList.remove('animating');
                    }, { once: true });
                }
            }
        });
    });

    // Função para criar corações aleatórios
    function createRandomHearts(numHearts) {
        for (let i = 0; i < numHearts; i++) {
            let heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.left = Math.random() * 100 + 'vw';
            document.body.appendChild(heart);
        }
    }

    // Cria 10 corações aleatórios
    createRandomHearts(10);
});