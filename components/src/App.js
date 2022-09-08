import { Navbar } from './components/Navbar';
import { Tv } from './components/Tv';
import { Header } from './components/Header';
import { Headline } from './components/Headline';

import './App.css';
function App() {


  return (
    <>
      <div className="contents">
        <span>
          <Navbar />
        </span>
        <span>
          <Tv />
        </span>
        <span>
          <Header title='Step 1' description='Choose Screen Orientation'/>
        </span>
        <span>
          <Headline />
        </span>
      </div>
    </>
  );
}

export default App;
