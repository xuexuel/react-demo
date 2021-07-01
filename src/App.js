import React,{Component} from 'react'
import { Layout, Affix} from 'antd';
import Header from './component/header';
import {routes} from './router';
import { Switch, Route } from 'react-router-dom';
class App extends Component{
  render() {
    return <Layout className="page-main">
      <Affix offsetTop={0}>
        <Header />
      </Affix>
      <div className="wrap">
        <Switch>
          {routes.map((item, index) => {
            return <Route
              path={item.path}
              exact={item.exact}
              render={item.render}
              key={index}
            />
          })}
        </Switch>
      </div>
    </Layout>
  }
}
// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

export default App;
