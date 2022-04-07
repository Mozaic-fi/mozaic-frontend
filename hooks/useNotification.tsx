import { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';
import { v4 } from 'uuid';

export const useNotification = () => {
  const dispatch = useContext<any>(NotificationContext);

  return (props: any) => {
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: {
        id: v4(),
        ...props,
      },
    });
  };
};
