import Kiwi from './kiwi.jpg';
import './kiwi-image.scss';

class KiwiImage {
  render() {
    const img = document.createElement('img');
    img.classList.add('kiwi-image');
    img.alt = 'Kiwi',
    img.src = Kiwi

    const body = document.querySelector('body');
    body.appendChild(img);
  }
}

export default KiwiImage;