import './App.css'
import { Route, Switch } from 'react-router-dom'
import router from './router'

function App() {
  return (
    <div className="app container pt-3">
      <Switch>
        {
          router.map(route => <Route path={route.path} component={route.component} />)
        }
      </Switch>
    </div>
  );
}

export default App;
