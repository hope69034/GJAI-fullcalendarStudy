import Signup from "./pages/Signup";
import Calendar from "./pages/Calendar";
/* import Test from './pages/Test'; */
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserInfo from "./pages/UserInfo";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MyProfile from "./pages/MyProfile";
import axios from "axios";
import Home from "./pages/Home";
import LabelBottomNavigation from "./components/LabelBottomNavigation";
import AddEvent from "./components/AddEvent";
import ChatbotSteps from "./components/chatbot/ChatbotSteps";
import Memo from "./pages/Memo";

/* mui css에 css파일을 오버라이딩 하기 위한*/
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
const cache = createCache({
  key: "css",
  prepend: true,
});

function App() {
  const dispatch = useDispatch(); // store 공간안에 값을 저장하기 위해 userDispatch함수 호출
  useEffect(() => {
    // 화면이 랜더링 될때마다 서버에 사용자 session 정보가 있는지 없는지 검증하는 구문 세션이 있으면 로그인 되어있고 그렇지 않으면 로그인 되어있지 않다.
    axios
      .get("/lifeConcierge/api/session") // 랜더링 될때마다 get 방식으로 서버에 요청
      .then((res) => {
        dispatch({ type: "SESSION", session: res.data });
      }) // 클라이언트에서 요청 후 redux를 이용해 서버에서 응답한 결과값을 전역공간에 저장.
      .catch(() => {
        console.log("세션 호출 에러");
      });
  });

  return (
    /* mui css에 css파일을 오버라이딩 하기 위한  */
    /* 이거 하니까 css로 푸터 색상 변경 가능, 위에IMPORT랑cache필요 */
    <CacheProvider value={cache}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* timeline */}
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/myProfile" element={<MyProfile />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/userInfo" element={<UserInfo />} />
            <Route path="/addEvent" element={<AddEvent />} />
            <Route path="/ChatbotSteps" element={<ChatbotSteps />} />
            <Route path="/Memo" element={<Memo />} />
            {/*  <Route path="/test" element={<Test/>}/> */}
          </Routes>
          {/* 푸터 앱하단 메뉴 */}
          <LabelBottomNavigation></LabelBottomNavigation>
        </BrowserRouter>
      </div>
    </CacheProvider>
  );
}

export default App;
