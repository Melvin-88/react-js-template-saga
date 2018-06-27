import { take, put, call, apply  } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';

import {
    GET_CURRENT_USER_INFO,
    setCurrentUser
} from './../actions'

export function* currentUserSaga() {
    const response = yield call(fetch,`https://api.myjson.com/bins/1dl0km`);
    const data = yield apply(response, response.json);
    yield put(setCurrentUser(data));
    yield put(push(`/login`));
}