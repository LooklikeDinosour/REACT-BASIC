import { useState } from "react";


function StateComponent() {

  //state - 컴포넌트 안에서 변화하는 값(즉 상태 변수)
  // const result = useState('초기값');
  // const a = result[0]; //현재값
  // const b = result[1]; //함수

  const [data, setData] = useState('초기값');
  const [num, setNum] = useState(0);
  const [color, setColor] = useState('black');

  //state는 절대 직접 값을 바꾸며 안됨!!!
  //data = '이거바꿔봐야지';

  //state는 이벤트 or 특정 함수안에서 바꾸도록 처리합니다.
  //setData('변경해야지'); //이렇게 바꾸면 무한루프 걸림

  const handleData = () => {
    setData('체인지!'); //비동기적으로 state값을 변경 - > 화면을 리렌더링 하게 됨(innerHTML과는 다름)
    setNum(10);
  }

  //빨간색변경
  //const handleColor = () => setColor('red'); 

  return (

    <div>

      스테이트 값 : {data}
      <br/>
      스테이트 값 : {num}
      <br/>
    
      <button onClick={ () => setColor('red') }>스테이트값 변경</button>

      <br/>
      <h3 style={{color: color}}>{data}</h3>

      <button onClick={ () => setColor('red') }>붉은색</button>
      <button onClick={ () => setColor('blue') }>푸른색</button>
      <button onClick={ () => setColor('yellow') }>그 사이 3초짧은색</button>
   


    </div>
  )

}

export default StateComponent;