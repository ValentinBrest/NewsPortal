import './alphabet.css';

class Alphabet {
    alphaWrap = <HTMLElement>document.createElement('ul');
    addAlpha() {
        const main = <HTMLTemplateElement>document.querySelector('main');

        this.alphaWrap.classList.add('letter__wrap');

        const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        alpha.split('').map((item, index) => {
            const letter = <HTMLElement>document.createElement('li');
            letter.classList.add('letter');
            letter.setAttribute('data-letter', item);
            if (index === 0) {
                letter.classList.add('active');
            }
            letter.textContent = item;
            this.alphaWrap.append(letter);
        });
        main.prepend(this.alphaWrap);

        this.sortSource();
    }
    sortSource() {
        const sources = document.querySelectorAll('.source__item') as NodeListOf<HTMLElement>;
        const letters = document.querySelectorAll('.letter') as NodeListOf<HTMLElement>;
        this.alphaWrap.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            if (target.tagName !== 'LI') return false;
            letters.forEach((item) => item.classList.remove('active'));
            target.classList.add('active');

            if (target) {
                const filterClass = target.dataset.letter?.toLowerCase();
                sources.forEach((elem) => {
                    const firstLetter = elem.dataset.sourceId as string;
                    elem.classList.remove('hide');
                    if (!(firstLetter.charAt(0) == filterClass)) {
                        elem.classList.add('hide');
                    }
                });
            }
        });
        sources.forEach((elem) => {
            const filterClass = 'a';
            const firstLetter = elem.dataset.sourceId as string;
            elem.classList.remove('hide');
            if (!(firstLetter.charAt(0) == filterClass)) {
                elem.classList.add('hide');
            }
        });
    }
}

export default Alphabet;
