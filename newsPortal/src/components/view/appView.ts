import { appViewClass, ResponseNews, ResponseSource } from '../../types';
import Alphabet from './alphabet/alphabet';
import News from './news/news';
import Sources from './sources/sources';

export class AppView implements appViewClass {
    news: News;
    sources: Sources;
    alphabet: Alphabet;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.alphabet = new Alphabet();
    }

    drawNews(data: ResponseNews): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ResponseSource): void {
        const values = data?.sources ? data?.sources : [];
        if (!document.querySelector('.exist')) this.sources.draw(values);
        document.querySelector('.sources')?.classList.add('exist');
        if (!document.querySelector('.letter__wrap')) this.alphabet.addAlpha();
    }
}

export default AppView;
