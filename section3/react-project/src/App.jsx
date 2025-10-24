// App.jsx
import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data.jsx";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((c) => (
              <CoreConcept key={c.title} {...c} />
            ))}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")} isSelected={selectedTopic === 'components'}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")} isSelected={selectedTopic === 'components'}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")} isSelected={selectedTopic === 'components'}>State</TabButton>
          </menu>

          <div id='tab-content'>
            {!selectedTopic && <p>Please select a topic</p>}

            {selectedTopic && (
              <div>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
