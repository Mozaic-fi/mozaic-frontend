import { createContext, useContext, useReducer, useState } from 'react';
import Notification from '../components/commons/notification/Notification';

export const NotificationContext = createContext<any>(null);

export const NotificationProvider = (props: any) => {
  const [state, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case 'ADD_NOTIFICATION':
        return [...state, { ...action.payload }];
      case 'REMOVE_NOTIFICATION':
        return state.filter((element: any) => element.id !== action.id);
      default:
        return state;
    }
  }, []);

  return (
    <NotificationContext.Provider value={dispatch}>
      <div className={'notification-wrapper'}>
        {state.map((note: any) => {
          return <Notification dispatch={dispatch} key={note.id} {...note} />;
        })}
      </div>
      {props.children}

      <style jsx>
        {`
          .notification-wrapper {
            position: fixed;
            top: 126px;
            right: 30px;
            width: 50vw;
            min-width: 300px;
            z-index: 99999;
          }
        `}
      </style>
    </NotificationContext.Provider>
  );
};
