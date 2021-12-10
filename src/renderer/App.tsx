import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Sprite from './pages/Sprite';
import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Sprite} />
      </Switch>
    </Router>
  );
}
