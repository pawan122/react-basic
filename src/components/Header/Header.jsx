let coreImage = "src/assets/components.png";
import './Header.css';

let reactDescription = ["Fundamental", "Core", "Essential"];

function getRandomInt() {
    return Math.floor(Math.random() * reactDescription.length);
}

export default function Header() {
    return (
        <header>
            <img src={coreImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
            {reactDescription[getRandomInt()]} React concepts you will need for almost any app you are
            going to build!
            </p>
        </header>
    );
}