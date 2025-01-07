import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {

    function handleSelect(selectedbtn) {
        console.log(`You clicked on: selecteddd`, selectedbtn);
    }

    return (
        <div>
        <Header />
        <main>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                    <CoreConcepts title= {CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}
                    image={CORE_CONCEPTS[0].image} />
                    <CoreConcepts {...CORE_CONCEPTS[1]} />
                    <CoreConcepts title= {CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description}
                    image={CORE_CONCEPTS[2].image} />
                    <CoreConcepts title= {CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description}
                    image={CORE_CONCEPTS[3].image} />
                </ul>
            </section>

            <section id="examples">
                <h2>Examples</h2>
                <menu>
                    <TabButton onSelect={ () => handleSelect('components')}>Components</TabButton>      
                    <TabButton onSelect={ () => handleSelect('props')}>Props</TabButton>
                    <TabButton onSelect={ () => handleSelect('state')}>State</TabButton>
                    <TabButton onSelect={ () => handleSelect('jsx')}>JSX</TabButton>          
                </menu>

            </section>
        </main>
        </div>
    );
}

export default App;
