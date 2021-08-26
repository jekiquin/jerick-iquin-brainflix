// react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/video/:videoId" component={HomePage}/>
          <Route path="/upload" component={UploadPage} />
        </Switch>  
      </div>
    </Router>

  );

}

export default App;
