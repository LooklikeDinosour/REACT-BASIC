import { useEffect, useRef, useState } from "react";


function HookQ () {

  const [form, setForm] = useState({id : '', pw : ''});

  
  const pwRef = useRef(null);
  const idRef = useRef(null);


  const handleChange = (e) => {
    const copy = {...form, [e.target.name] : e.target.value}
    setForm(copy); 
    console.log(e);
  }

  //useEffect 첫번째 마운트에 포커싱
  useEffect(()=> {
    idRef.current.focus();
  }, [])

  const handleClick = () => {
    //form.id,pw사용
    if(idRef.current.value === '') {
      alert('아이디는 필수입니다.')
      idRef.current.focus();
      return;
    } else if(pwRef.current.value === '') {
      alert('비밀번호는 필수입니다.')
      pwRef.current.focus();
      return; 
    }

    alert(`id: ${form.id}, pw: ${form.pw}`)



  }

  return(
    <div>
      로그인 클릭시 공백이라면 공백인 태그에 포커스를 추가하세요<br/>
      로그인 클릭시 공백이 아니라면 경고창으로 입력된 id, pw를 출력해주세요.<br/>
      첫번째 마운트 이후에는 id에 자동 포커싱 해주세요<br/>
      <br/>

    <input type="text" name="id" onChange={handleChange} placeholder="아이디" value={form.id} ref={idRef}/> <br/>
    <input type="password" name="pw" onChange={handleChange} placeholder="비밀번호" value={form.pw} ref={pwRef}/> <br/>
    <button type="button" onClick={handleClick}>로그인</button>
    </div>

  )

}

export default HookQ;