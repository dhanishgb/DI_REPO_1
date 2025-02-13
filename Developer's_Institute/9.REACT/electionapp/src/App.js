import Header from './Header';
import Candidate from './Candidate';



function App () {
  return (
    <div className="App">
      <Header></Header>
      <ul>

        <Candidate name="Donald Trump"
        party="republican"/>
        <Candidate name="Kamala Harris"
        party="democrat"/>
        <Candidate name="Joe Biden"
        party="democrat"/>
      </ul>
    </div>
  );
}

export default App;