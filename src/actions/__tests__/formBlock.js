import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addNewFormBlock } from '../formBlock';
import { ADD_NEW_FORM_BLOCK } from '../contants';
import formReducer from '../../reducers/board';
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

    store.replaceReducer(formReducer);

    const expectedAction = { type: ADD_NEW_FORM_BLOCK, formId: newBlockId };
    const expectedState = {
      title: 'ฟอร์มไม่มีชื่อ',
      numForm: 2,
      activeRow: 2,
      forms: [
        {
          title: 'คำถามสั้น',
          formId: 1,
          type: 'singleInput',
        },
        {
          title: 'Question title',
          formId: newBlockId,
          type: 'SingleInput',
        },
      ],
    };

    store.dispatch(addNewFormBlock(newBlockId)).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
      let state;
      store.subscribe((state) => {
        console.log(state);
      });

      /*
      store.subscribe(state => {
         console.log('mutate  state' + state)
         state = state
         expect(state).toEqual(expectedState);
      })
      */
    });
  });
});

describe('Have select correct form to be active', () => {
  // const newBlockId = uuid();
  // mockStore.dispatch(blockActions.selectActiveForm(newBlockId));
});

describe('Add new choice to multiple choice form block', () => {
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
});
