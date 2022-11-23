// redux 사용법 
// import {useSelector, useDispatch} from "react-redux" <-  useDispatch, useSelector를 import 한다
// const dispatch = useDispatch(); <- useDispatch함수를 실행한 결과를 dispatch변수에 담는다.
// dispatch() <- dispatch 함수 안에 action(오브젝트형태)의 값을 넣어 module.js 파일 안에 있는 reducer 함수를 실행 시킨다.
// const 저장된변수 = useSelector((state)=>{return(state.저장된변수)}) <- action을 이용하여 store공간안에 넣은 변수를 useSelector를 이용하여 꺼내 쓴다.


const initialState = { // state 초기 선언
  session:"",
  snackbar:{
    snackbarToggle:false,
    explain:"",
    severity:""
  },
  progress:{
    progressToggle:false,
  },
  user: {
    userinfo:[]
  },
  confirm: false
}


const reducer = (state = initialState, action) =>{

  switch (action.type){
    case "SESSION":
      return {...state, session: action.session}; // action의 type이 "SESSION"인경우 {...state, session: action.session}를 리턴 => 리턴된 값을 useSelector에 전달.
    case "SNACKBAR/ON":
      return {...state, snackbar: {...state.snackbar, snackbarToggle: action.snackbar.snackbarToggle, explain: action.snackbar.explain, severity:action.snackbar.severity }};
    case "SNACKBAR/OFF":
      return {...state, snackbar: {...state.snackbar, snackbarToggle: action.snackbar.snackbarToggle}};
    case "PROGRESS":
      return {...state, progress: {...state.progress, progressToggle: action.progress.progressToggle}};
    case "USER/USERINFO":
      return {...state, user: {...state.user, userInfo: action.user.userInfo}};
    case "CONFIRM":
      return {...state, confirm: action.confirm}
    default:
      return {...state};
  }
};

export default reducer
