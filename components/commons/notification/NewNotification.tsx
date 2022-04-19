import React from 'react';
import { useNotification } from '../../../hooks/useNotification';

export function NewNotification(
  type: string = 'SUCCESS',
  message: string = 'baalsaal'
) {
  const dispatch = useNotification();
  const handleNewNotification = (type: string, message: string) => {
    dispatch({
      type: type,
      message: message,
    });
    // console.log('hello');
  };
  return handleNewNotification(type, message);
}
