import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogin, isLoginClick } from "../modules/members";

const LoginJoin = () => {
    const dispatch = useDispatch();
    const [isPage, setPage] = useState(false);
    const [isLoginPage, setIsLoginPage] = useState(true);
    const [loginForm, setLoginForm] = useState({
        userEmail:"",
        userPass:""
    })
    const members = useSelector(state=>state.members.members)
    const onChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }
    const loginClose = () => {
        setPage(false);
        setTimeout(()=>{
            dispatch(isLoginClick(false))
        },300) 
    }
    // 로그인폼 실행
    const onSubmit = (e) => {
        e.preventDefault();
        const loginMember = members.find(list=> list.userId === loginForm.userEmail && list.userPass === loginForm.userPass);
        console.log(loginMember);
         if( loginMember ) {
             console.log('로그인');
             dispatch(isLogin(loginMember))
         } else {
             alert('이메일과 비밀번호를 확인하세요');
             console.log('실패');
         }
    }
    // 회원가입 폼 실행
    const onSubmitjoin = (e) => {
        e.preventDefault();
    }
    useEffect(()=>{
        setPage(true);
    },[])
    return (
        <div className="bg">
            <div className={isPage? "box on" : "box"}>
                <div className="memberImg">
                    <div>
                        <img src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg" alt="welcome" />
                        <div>환영합니다.</div>
                    </div>
                </div>
                <div className="memberform">
                    <div className="exit-wrapper">
                    <svg onClick={loginClose} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                    </div>
                    <div className="block-content">
                        <div className="upper-wrapper">
                            <h2 data-testid="title">{ isLoginPage ? "로그인" : "회원가입" }</h2>
                            <section>
                                <h4>{ isLoginPage ? "이메일로 로그인" : "이메일로 회원가입" }</h4>
                                { isLoginPage && ( <form className="loginForm" onSubmit={onSubmit}>
                                    <input type="text" name="userEmail"  placeholder="이메일을 입력하세요." value={loginForm.userEmail} onChange={onChange} />
                                    <input type="password" name="userPass" placeholder="비밀번호를 입력하세요." value={loginForm.userPass} onChange={onChange} />
                                    <button type="submit">로그인</button>
                                </form>) }
                                { isLoginPage || ( <form className="loginForm" onSubmit={onSubmitjoin}>
                                    <input type="text" name="userEmail"  placeholder="이메일을 입력하세요." value={loginForm.userEmail} onChange={onChange} />
                                    <input type="password" name="userPass" placeholder="비밀번호를 입력하세요." value={loginForm.userPass} onChange={onChange} />
                                    <button type="submit">회원가입</button>
                                </form>) }
                               
                            </section>
                        </div>
                        { isLoginPage && (<div className="footer">아직 회원이 아니신가요? <span onClick={()=>setIsLoginPage(false)}>회원가입</span></div>)}
                        { isLoginPage || (<div className="footer">계정이 이미 있으신가요? <span onClick={()=>setIsLoginPage(true)}>로그인</span></div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginJoin;