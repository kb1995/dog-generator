import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../containers/Home/Home'
import Favourites from '../../containers/Favourites/Favourites'

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/favourite-doggos"><Favourites/></Route>
      </Switch>
    </main>
  );
}

export default Main;