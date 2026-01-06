import toast from 'react-hot-toast';

export const notify = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
  switch (type) {
    case 'success':
      return toast.success(message);
    case 'error':
      return toast.error(message);
    default:
      return toast(message);
  }
};