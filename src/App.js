import logo from './logo.svg';
import './App.css';
import {createSuggestion} from "./services/NameSuggestionService";

function App() {

  function createProfile(){ 
    const suggestion = {
      firstName: "Craig",
      lastName: "Wolfrey",
      suggestedName: "Giants",
      eventType: 2
    }; 
    createSuggestion(suggestion).then(response => {console.log(response)})
  }

  return (
    <div className="App">
      <button onClick={e=>createProfile()}>Create Test</button>
    </div>
  );
}

export default App;
