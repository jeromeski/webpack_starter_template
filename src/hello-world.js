import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('hello world page'))

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render()
