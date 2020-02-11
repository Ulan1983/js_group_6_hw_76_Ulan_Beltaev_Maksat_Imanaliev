import React, {Component, Fragment} from 'react';
import './App.css';
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import Chat from "./containers/Chat";

class App extends Component {
  render() {
    return (
        <Fragment>
          <Container style={{marginTop: '20px'}}>
            <Switch>
              <Route path='/' exact component={Chat}/>
            </Switch>
          </Container>
        </Fragment>
    );
  }
}

export default App;
