import Heading from './components/heading/heading';
import KiwiImage from './components/kiwi-image/kiwi-image';
import './components/kiwi-image/kiwi-image.scss';
import './components/heading/heading.scss';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperCase('This is Kiwi Fruit Page'));

const kiwi = new KiwiImage;
kiwi.render();
