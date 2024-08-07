import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import {
  
  getSongsSuccess,
  getSongsFailure,
} from '../redux/reducer/ProfileReducer';
import Toast from '../utils/helper/Toast';
import { getApi, postApi } from '../utils/helper/ApiRequest';

let getItem = state => state.AuthReducer;
let token = '';
//ProfileListSaga
export function* profileListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'multipart/form-data',
    authorization: items?.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'update-profile',
      action.payload,
      header,
    );

    if (response?.data?.success == true) {
      yield put(profileListSuccess(response?.data));
      Toast(response?.data?.message);
    } else {
      yield put(profileListFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(profileListFailure(error));
  }
}

//update-password
export function* updatePasswordSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'multipart/form-data',
    authorization: items?.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      'update-password',
      action.payload,
      header,
    );

    if (response?.data?.success == true) {
      yield put(updatePasswordSuccess(response?.data));
      Toast(response?.data?.message);
    } else {
      yield put(updatePasswordFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(updatePasswordFailure(error));
  }
}

//viewProfileSaga
export function* viewProfileSaga() {
  const items = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: items?.getTokenResponse,
  };
  try {
    let response = yield call(getApi, 'my-profile', header);

    if (response?.data?.success == true) {
      yield put(viewProfileSuccess(response?.data));
      //Toast(response?.data?.message);
    } else {
      yield put(viewProfileFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(viewProfileFailure(error));
  }
}

// privacypolicy & Term&Conditions
export function* privacyTermSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: items?.getTokenResponse,
  };
  try {
    let response = yield call(postApi, 'cms', action.payload, header);

    if (response?.data?.success == true) {
      yield put(privacyTermSuccess(response?.data));
      //Toast(response?.data?.message);
    } else {
      yield put(privacyTermFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(privacyTermFailure(error));
  }
}

// contactUs
export function* contactUsSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'multipart/form-data',
    authorization: items?.getTokenResponse,
  };
  try {
    let response = yield call(postApi, 'contact-us', action.payload, header);

    if (response?.data?.success == true) {
      yield put(contactUsSuccess(response?.data));
      Toast(response?.data?.message);
    } else {
      yield put(contactUsFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(contactUsFailure(error));
  }
}

// myVideos
export function* myVideosSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: items?.getTokenResponse,
  };
  try {
    let response;
    if (action.payload) {
      response = yield call(getApi, `my-video/${action.payload}`, header);
    } else {
      response = yield call(getApi, 'my-video', header);
    }

    if (response?.data?.success == true) {
      yield put(myVideosSuccess(response?.data));
      // Toast(response?.data?.message);
    } else {
      yield put(myVideosFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(myVideosFailure(error));
  }
}

// mySubmissionVideos
export function* mySubmissionVideosSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: items?.getTokenResponse,
  };
  try {
    let response;
    if (action.payload) {
      response = yield call(getApi, `submission/${action.payload}`, header);
    } else {
      response = yield call(getApi, 'submission', header);
    }

    if (response?.data?.success == true) {
      yield put(mySubmissionVideosSuccess(response?.data));
      // Toast(response?.data?.message);
    } else {
      yield put(mySubmissionVideosFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(mySubmissionVideosFailure(error));
  }
}

// addVideo
export function* addVideoSaga(action) {
  const items = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype: 'multipart/form-data',
    authorization: items?.getTokenResponse,
  };

  try {
    let response = yield call(postApi, 'add-video', action.payload, header);

    if (response?.data?.success == true) {
      yield put(addVideoSuccess(response?.data));
      Toast(response?.data?.message);
    } else {
      yield put(addVideoFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(addVideoFailure(error));
  }
}

// editVideo
export function* editVideoSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'multipart/form-data',
    authorization: items?.getTokenResponse,
  };
  try {
    let response = yield call(
      postApi,
      `edit-video/${action?.payload?.videoID}`,
      action?.payload?.payload,
      header,
    );

    if (response?.data?.success == true) {
      yield put(editVideoSuccess(response?.data));
      Toast(response?.data?.message);
    } else {
      yield put(editVideoFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(editVideoFailure(error));
  }
}

// editVideo
export function* viewVideoSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: items?.getTokenResponse,
  };
  try {
    let response = yield call(getApi, `view-video/${action.payload}`, header);

    if (response?.data?.success == true) {
      yield put(viewVideoSuccess(response?.data));
      // Toast(response?.data?.message);
    } else {
      yield put(viewVideoFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(viewVideoFailure(error));
  }
}

// deleteVideo
export function* deleteVideoSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: items?.getTokenResponse,
  };
  try {
    let response = yield call(getApi, `delete-video/${action.payload}`, header);

    if (response?.data?.success == true) {
      yield put(deleteVideoSuccess(response?.data));
      Toast(response?.data?.message);
    } else {
      yield put(deleteVideoFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(deleteVideoFailure(error));
  }
}

// getEquipmentDetails
export function* getEquipmentDetailsSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: items?.getTokenResponse,
  };
  try {
    let response = yield call(getApi, 'equipment', header);

    if (response?.data?.success == true) {
      yield put(getEquipmentDetailsSuccess(response?.data));
      //Toast(response?.data?.message);
    } else {
      yield put(getEquipmentDetailsFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(getEquipmentDetailsFailure(error));
  }
}

// getFollowingProfileList
export function* getFollowingProfileListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: items?.getTokenResponse,
  };


  try {

    let response;
    if (action.payload) {
      const { gender, sort_by } = action.payload;
      let query = [];

      if (gender) query.push(`gender=${gender}`);
      if (sort_by) query.push(`sort_by=${sort_by}`);

      const queryString = query.length ? `?${query.join('&')}` : '';
      // console.log('queryString', queryString);
      // queryString ?gender=M
      response = yield call(getApi, `following${queryString}`, header);
    } else {
      response = yield call(getApi, 'following', header);
    }

    if (response?.data?.success == true) {
      yield put(getFollowingProfileListSuccess(response?.data));
      //Toast(response?.data?.message);
    } else {
      yield put(getFollowingProfileListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(getFollowingProfileListFailure(error));
  }
}

// getFollowersProfileList
export function* getFollowersProfileListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: items?.getTokenResponse,
  };
  try {
    let response;
    if (action.payload) {
      const { gender, sort_by } = action.payload;
      let query = [];

      if (gender) query.push(`gender=${gender}`);
      if (sort_by) query.push(`sort_by=${sort_by}`);

      const queryString = query.length ? `?${query.join('&')}` : '';
      response = yield call(getApi, `followers${queryString}`, header);
      // response = yield call(getApi, `followers?gender=${action.payload.gender}`, header);

      // response = yield call(getApi, `followers/${action.payload}`, header);

    } else {
      response = yield call(getApi, 'followers', header);
    }

    if (response?.data?.success == true) {
      yield put(getFollowersProfileListSuccess(response?.data));
      //Toast(response?.data?.message);
    } else {
      yield put(getFollowersProfileListFailure(response?.data));
      // Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(getFollowersProfileListFailure(error));
  }
}

// getFavouriteVideoList
export function* getFavouriteVideosListSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: items?.getTokenResponse,
  };
  try {
    let response;
    if (action.payload) {
      response = yield call(
        getApi,
        `favourite-video/${action.payload}`,
        header,
      );
    } else {
      response = yield call(getApi, 'favourite-video', header);
    }

    if (response?.data?.success == true) {
      yield put(getFavouriteVideoListSuccess(response?.data));
      //Toast(response?.data?.message);
    } else {
      yield put(getFavouriteVideoListFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(getFavouriteVideoListFailure(error));
  }
}

// profile report
export function* reportProfileSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'multipart/form-data',
    authorization: items?.getTokenResponse,
  };
  try {
    let response = yield call(postApi, 'report-submit', action.payload, header);

    if (response?.data?.success == true) {
      yield put(profileReportSuccess(response?.data));
      console.log(response, 'dataItem');
      //Toast(response?.data?.message);
    } else {
      yield put(profileReportFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(profileReportFailure(error));
  }
}

// getStickers
export function* getStickersSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: items?.getTokenResponse,
  };
  try {
    let response = yield call(getApi, 'stickers', header);

    if (response?.data?.success == true) {
      yield put(getStickersSuccess(response?.data));
      //Toast(response?.data?.message);
    } else {
      yield put(getStickersFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(getStickersFailure(error));
  }
}

// getStickers
export function* getSongsSaga(action) {
  const items = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    authorization: items?.getTokenResponse,
  };
  try {
    let response = yield call(getApi, 'audio', header);

    if (response?.data?.success == true) {
      yield put(getSongsSuccess(response?.data));
      //Toast(response?.data?.message);
    } else {
      yield put(getSongsFailure(response?.data));
      Toast(response?.data?.message);
    }
  } catch (error) {
    yield put(getSongsFailure(error));
  }
}

const watchFunction = [
  (function* () {
    yield takeLatest('Profile/editProfileRequest', editProfileSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/updatePasswordRequest', updatePasswordSaga);
  })(),

  (function* () {
    yield takeLatest('Profile/viewProfileRequest', viewProfileSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/privacyTermRequest', privacyTermSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/contactUsRequest', contactUsSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/myVideosRequest', myVideosSaga);
  })(),

  (function* () {
    yield takeLatest(
      'Profile/mySubmissionVideosRequest',
      mySubmissionVideosSaga,
    );
  })(),

  (function* () {
    yield takeLatest('Profile/addVideoRequest', addVideoSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/editVideoRequest', editVideoSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/viewVideoRequest', viewVideoSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/deleteVideoRequest', deleteVideoSaga);
  })(),
  (function* () {
    yield takeLatest(
      'Profile/getEquipmentDetailsRequest',
      getEquipmentDetailsSaga,
    );
  })(),
  (function* () {
    yield takeLatest(
      'Profile/getFollowingProfileListRequest',
      getFollowingProfileListSaga,
    );
  })(),

  (function* () {
    yield takeLatest(
      'Profile/getFollowersProfileListRequest',
      getFollowersProfileListSaga,
    );
  })(),
  (function* () {
    yield takeLatest(
      'Profile/getFavouriteVideoListRequest',
      getFavouriteVideosListSaga,
    );
  })(),

  (function* () {
    yield takeLatest('Profile/profileReportRequest', reportProfileSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/getStickersRequest', getStickersSaga);
  })(),
  (function* () {
    yield takeLatest('Profile/getSongsRequest', getSongsSaga);
  })(),
];

export default watchFunction;
