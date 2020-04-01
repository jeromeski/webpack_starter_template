import hello from './hello-world';
// import addImage from './add-image';
import HelloWorldButton from './components/hello-world-button/hello-world-button';

hello();
// addImage();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();