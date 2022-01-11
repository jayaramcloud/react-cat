import logo from './logo.svg';
import './App.css';
import TopBar from './topBar' ;
import CenterSection from './centerSection';
import BottomBar from './bottomBar';
import LeftBar from './leftBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <BottomBar />
      <LeftBar />
      <CenterSection />
    </div>
  );
}

export default App;
