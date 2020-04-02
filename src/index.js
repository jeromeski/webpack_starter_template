import hello from './hello-world';
// import addImage from './add-image';
import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';
import KiwiImage from './components/kiwi-image/kiwi-image';

hello();
// addImage();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

const heading = new Heading();
heading.render();
const heading2 = new Heading();
heading2.render();
const kiwi = new KiwiImage();
kiwi.render();






if (process.env.NODE_ENV === 'production') {
  console.log( 
    '########',
    'YOU ARE IN PRODUCTION MODE',
    '########'
    );
} else if (process.env.NODE_ENV === 'development') {
  console.log( 
    '########',
    'YOU ARE IN DEVELOPMENT MODE',
    '########'
    );
}
