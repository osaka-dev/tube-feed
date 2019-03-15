import {applyMiddleware, createStore} from 'redux'
import reducers from '../reducers'
import rootSaga from '../sagas/saga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);