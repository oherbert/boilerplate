import { Dispatch } from 'react';
import ILabel from './ILabel';

export interface IAction {
  // eslint-disable-next-line no-use-before-define
  type: keyof IGlobalState;
  payload: any;
}

export interface IGlobalState {
  dispatch: Dispatch<IAction>;
  exceptionMsg: string;
  ipcRenderer: typeof window.electron.ipcRenderer;
  autoPrinter: boolean;
  newFile: ILabel | null;
}
