import './App.css';
import Dog from './family/Dog';
import Father from './family/Father';
import Introduction from './family/Introduction';
import Me from './family/Me';
function App() {
  return (
    <div className="App">
      <Me/>
      <Father/>
      <Dog/>
      <Introduction/>
    </div>
  );
}
export default App;