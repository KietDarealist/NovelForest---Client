import { createStore, applyMiddleware, AnyAction } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/index';



// Middleware to intercept those actions(object) that has meta field with async set to true;





const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(reducers, composedEnhancer)
export default store