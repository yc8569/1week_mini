import { createAction, handleActions } from 'redux-actions';
// produce import
import produce from 'immer';


// sample 액션 타입 정의
// module/ACTION_TYPE. 액션 타입은 대문자로, 앞에 모듈을 붙여주어야 액션 이름 중첩을 방지할 수 있음.
// const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';


// 액션 생성자. createAction 함수는 매번 객체를 직접 만들어 줄 필요 없이 더욱 간단하게 액션 생성 함수를 선언할 수 있음. 사용으로 액션 추가 데이터는 payload 사용. 
// 액션 생성자는 export
// export const sampleAction = createAction(SAMPLE_ACTION);

export const changeField = createAction(
    // 추가 데이터 생성은 payload.
    CHANGE_FIELD,
    ({form,key,value}) =>({
        form, // register, login
        key, // username , passowrd, passowrdConfirm
        value // 실제로 바꾸려는 값
    })
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form); //register , login
// 초기 상태 정의
const initialState = {
    register: {
      username: '',
      password: '',
      passwordConfirm: ''
    },
    login: {
      username: '',
      password: ''
    },
}
// 리듀서 함수
// 리듀서 함수도 더 간단하고 가독성 높게 사용하기 위해 handleActions 함수 사용
// 리듀서 함수는 export default 로 
const auth = handleActions(

{
    // 전부 다 추가 데이터가 payload 면 헷갈리니까 객체 비구조화 할당으로 좀 더 직관적으로 사용
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      // 불변성 유지를 위해 immer 라이브러리 사용
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
    // 얘는 오히려 immer 쓰면 복잡해지니까 spread 사용
      ...state,
      [form]: initialState[form],
      
    }),
  },
  initialState,
);


export default auth;