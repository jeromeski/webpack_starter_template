import './heading.scss';

class Heading {
  render() {
    const h1 = document.createElement("h1");
    h1.classList.add("heading-text");
    h1.innerHTML = "Some text heading here";
    const body = document.querySelector("body");
    body.appendChild(h1);
  }
}

export default Heading;