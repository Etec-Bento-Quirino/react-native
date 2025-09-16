/**
 * Exemplo de Implementação Redux
 * Demonstra como criar e usar um store Redux simples
 */

// ===== ACTION TYPES =====
export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  SET_VALUE: 'SET_VALUE',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
};

// ===== ACTION CREATORS =====
export const Actions = {
  // Actions para contador
  increment: () => ({
    type: ActionTypes.INCREMENT,
  }),

  decrement: () => ({
    type: ActionTypes.DECREMENT,
  }),

  reset: () => ({
    type: ActionTypes.RESET,
  }),

  setValue: (value) => ({
    type: ActionTypes.SET_VALUE,
    payload: { value },
  }),

  // Actions para usuário
  login: (userData) => ({
    type: ActionTypes.LOGIN,
    payload: userData,
  }),

  logout: () => ({
    type: ActionTypes.LOGOUT,
  }),

  updateProfile: (profileData) => ({
    type: ActionTypes.UPDATE_PROFILE,
    payload: profileData,
  }),
};

// ===== REDUCERS =====

// Estado inicial do contador
const initialCounterState = {
  count: 0,
  lastAction: null,
};

// Reducer do contador
export const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        lastAction: 'INCREMENT',
      };

    case ActionTypes.DECREMENT:
      return {
        ...state,
        count: Math.max(0, state.count - 1),
        lastAction: 'DECREMENT',
      };

    case ActionTypes.RESET:
      return {
        ...state,
        count: 0,
        lastAction: 'RESET',
      };

    case ActionTypes.SET_VALUE:
      return {
        ...state,
        count: action.payload.value,
        lastAction: 'SET_VALUE',
      };

    default:
      return state;
  }
};

// Estado inicial do usuário
const initialUserState = {
  isLoggedIn: false,
  user: null,
  profile: null,
};

// Reducer do usuário
export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        profile: action.payload.profile || null,
      };

    case ActionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        profile: null,
      };

    case ActionTypes.UPDATE_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

// ===== COMBINE REDUCERS =====
export const combineReducers = (reducers) => {
  return (state = {}, action) => {
    const newState = {};
    
    Object.keys(reducers).forEach(key => {
      newState[key] = reducers[key](state[key], action);
    });
    
    return newState;
  };
};

// Root reducer combinando todos os reducers
export const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

// ===== STORE SIMPLIFICADO =====
export class ReduxStore {
  constructor(reducer, initialState = {}) {
    this.state = initialState;
    this.reducer = reducer;
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    console.log('Dispatching action:', action);
    
    const prevState = this.state;
    this.state = this.reducer(this.state, action);
    
    // Notificar listeners apenas se o estado mudou
    if (prevState !== this.state) {
      this.listeners.forEach(listener => listener());
    }
    
    return action;
  }

  subscribe(listener) {
    this.listeners.push(listener);
    
    // Retorna função para unsubscribe
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  replaceReducer(nextReducer) {
    this.reducer = nextReducer;
    this.dispatch({ type: '@@INIT' });
  }
}

// ===== MIDDLEWARE =====

// Middleware de logging
export const loggerMiddleware = (store) => (next) => (action) => {
  console.group(`Action: ${action.type}`);
  console.log('Previous state:', store.getState());
  console.log('Action:', action);
  
  const result = next(action);
  
  console.log('Next state:', store.getState());
  console.groupEnd();
  
  return result;
};

// Middleware de persistência (simulação)
export const persistMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  
  // Simular salvamento no localStorage
  console.log('Persistindo estado:', store.getState());
  
  return result;
};

// Aplicar middlewares
export const applyMiddleware = (...middlewares) => (createStore) => (reducer, initialState) => {
  const store = createStore(reducer, initialState);
  let dispatch = store.dispatch;
  
  const middlewareAPI = {
    getState: store.getState,
    dispatch: (action) => dispatch(action),
  };
  
  const chain = middlewares.map(middleware => middleware(middlewareAPI));
  dispatch = chain.reduceRight((composed, middleware) => middleware(composed), store.dispatch);
  
  return {
    ...store,
    dispatch,
  };
};

// ===== SELECTORS =====
export const Selectors = {
  getCounter: (state) => state.counter.count,
  getLastAction: (state) => state.counter.lastAction,
  getUser: (state) => state.user.user,
  isLoggedIn: (state) => state.user.isLoggedIn,
  getUserProfile: (state) => state.user.profile,
};

// ===== EXEMPLO DE USO =====
export const createStore = (reducer, initialState, enhancer) => {
  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer, initialState);
  }
  
  return new ReduxStore(reducer, initialState);
};

// Criar store com middlewares
export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(loggerMiddleware, persistMiddleware)
);

export default store;
