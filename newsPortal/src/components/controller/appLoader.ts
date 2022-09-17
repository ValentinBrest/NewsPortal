import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '0c095f70da80451d9f4f998db981c90f',
        });
    }
}

export default AppLoader;
