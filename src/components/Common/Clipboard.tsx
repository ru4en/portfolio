import {  toast } from 'react-toastify';

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
    return true;
  }
  catch (err) {
    toast.error('Failed to copy to clipboard got error: ' + err);
    return false;
  }
}

export default copyToClipboard;