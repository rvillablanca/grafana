import { MetaVariable, VariableHide } from '../types';
import { VariableAdapter } from '../adapters';
import { NEW_VARIABLE_ID } from '../state/types';
import { Deferred } from '../../../core/utils/deferred';

export const createMetaVariableAdapter = (): VariableAdapter<MetaVariable<any>> => {
  return {
    id: 'meta',
    description: '',
    name: 'meta',
    initialState: {
      id: NEW_VARIABLE_ID,
      global: false,
      type: 'meta',
      name: '',
      label: (null as unknown) as string,
      hide: VariableHide.hideVariable,
      skipUrlSync: true,
      current: { value: { toString: () => '' } },
      index: -1,
      initLock: (null as unknown) as Deferred,
    },
    reducer: (state: any, action: any) => state,
    picker: null,
    editor: null,
    dependsOn: () => {
      return false;
    },
    setValue: async (variable, option, emitChanges = false) => {
      return;
    },
    setValueFromUrl: async (variable, urlValue) => {
      return;
    },
    updateOptions: async variable => {
      return;
    },
    getSaveModel: variable => {
      return {};
    },
    getValueForUrl: variable => {
      return '';
    },
  };
};