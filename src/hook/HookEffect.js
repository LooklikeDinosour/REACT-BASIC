import { useEffect, useState } from "react";



function HookEffect () {

  //state를 관리하는 훅
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  console.log(1);

  //생명주기 훅
  //컴포넌트가 마운트된 이후 실행됩니다.

  //1 무한루프 형성가능성 있음 2번 케이스처럼 작성하자.
  // useEffect ( () =>{
  //   console.log('렌더링완료: ' + name);
  // })

  //2 [] 추가
  // useEffect(() => {
  //   console.log('첫번째 마운트 이후에만 실행됩니다.')
  // }, []);

  //3 특정값이 업데이트 될때 실행됩니다.
  useEffect ( () => {
    console.log('name 또는 age 업데이트 시에 실행됩니다.')
  
    return () => {
      console.log('unmount될 때 실행됩니다.')
      console.log(`인풋의 값이 바뀌기 직전 값: ${name}`); //state가 ab로 변경할 때 a 출력
    }
  
  }, [name, age]);

  //4

  console.log(2);

  return (
    <div>
      <input type="text" onChange={ e => setName(e.target.value) } value={name} /><br/> 
      <input type="number" onChange={ e => setAge(e.target.value) } value={age} /><br/>
    
      이름 : {name}, 나이 : {age};

    </div>
  )
}

export default HookEffect;