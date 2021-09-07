// Deze index.js is het toegangspunt voor Webpack.
// Al de 'imports' die Webpack tegenkomt zullen mee gebundeld worden.

// Eerst de Bootstrap CSS/Javascript + alle afhankelijkheden.
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// De 'eigen' CSS toevoegen. 
import './site.css';

// En de UrlChecker JavaScript implementatie uiteraard...
import './url-checker';