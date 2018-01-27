import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addNewFormBlock } from '../formBlock';
import {
  ADD_NEW_FORM_BLOCK,
} from '../contants';
import uuid from '../../utils/helper';

const mockStore = configureMockStore([thunk]);

describe('create new formblock action work properly', () => {
  test(' add new block actions correct', () => {
    const newBlockId = uuid();
    const store = mockStore({
      title: 'ฟอร์มไม่มีชื่อ',
      numForm: 1,
      activeRow: 1,
      forms: [
        {
          title: 'คำถามสั้น',
          formId: 1,
          type: 'singleInput',
        },
      ],
    });
    const expectedActions = [{ type: ADD_NEW_FORM_BLOCK, formId: newBlockId }];
    store.dispatch(addNewFormBlock(newBlockId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Have select correct form to be active', () => {
  // const newBlockId = uuid();
  // mockStore.dispatch(blockActions.selectActiveForm(newBlockId));
});
