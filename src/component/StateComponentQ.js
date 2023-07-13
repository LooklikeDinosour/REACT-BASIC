import { useState } from "react";

function StateComponentQ () {


  const [num, setNum] = useState(0);


  return (


      <div>

        <h3>카운트</h3>

      카운트: {num} <br/>


      <button onClick={ () => setNum(num + 1) }>증가</button>
      <button onClick={ () => setNum(num - 1) }>감소</button>
      <button onClick={ () => setNum(0) }>초기화</button>

      </div>

  )
}

export default StateComponentQ