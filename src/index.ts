import {MyApp} from './app/MyApp';

const myApp = new MyApp(process.env);

myApp.init().then(myApp.start).catch(myApp.exitOnError);
