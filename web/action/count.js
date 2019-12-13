import {fetchTestData1} from "../api";

export const set = (value) => ({
  type: 'SET_COUNTER'
});

export const setData = (value) => ({
  type: 'SET_VALUE',
  value: value
});

export const computedAdd = () => (dispatch, getState) => {
  dispatch(set());
}


export const setValue = (val) => (dispatch, getState) => {

  dispatch(setData(val));
}


export const setTest = (val) => (dispatch, getState) => {
  dispatch((value) => ({
    type: 'SET_TEST',
    value: value
  }));
}

export const fetchTestData = () => (dispatch) =>
  fetchTestData1().then(res => dispatch(setTest(res)));