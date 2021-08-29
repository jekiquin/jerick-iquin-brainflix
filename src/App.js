// react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import pages
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import NotAPage from './pages/NotAPage/NotAPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/video/:videoId" component={HomePage}/>
          <Route path="/upload" component={UploadPage} />
          <Route  component={NotAPage} />
        </Switch>  
      </div>
    </Router>

  );

}

export default App;
