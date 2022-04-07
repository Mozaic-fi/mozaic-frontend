import { createContext, useReducer } from 'react';

export const AuthContext = createContext<any>(null);

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_WALLET':
      return {
        ...state,
        walletConnected: true,
      };
    case 'REMOVE_WALLET':
      return {
        ...state,
        walletConnected: false,
      };
    case 'APPROVE_BOND_CONTRACT':
      return {
        ...state,
        bondContractApproved: true,
      };
    default:
      return state;
  }
};

const initialState = {
  walletConnected: false,
  bondContractApproved: false,
};

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const addWallet = () => {
    dispatch({ type: 'ADD_WALLET' });
  };

  const removeWallet = () => {
    dispatch({ type: 'REMOVE_WALLET' });
  };

  const approveBondContract = () => {
    dispatch({ type: 'APPROVE_BOND_CONTRACT' });
  };

  return (
    <AuthContext.Provider
      value={{ ...state, addWallet, removeWallet, approveBondContract }}
    >
      {children}
    </AuthContext.Provider>
  );
};
