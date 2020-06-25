import React from 'react';
import Artist from './components/artists/Artist';
import reducer from './reducers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import './App.css';

function App() {

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <div className="App">
        <Artist></Artist>
      </div>
    </Provider>
  );
}

export default App;
