import { useState } from "react"


function EventComponentQ () {

  const [menu, setMenu] = useState('메뉴를 선택하세요');

  const handleChange = (e) => {
    console.log(e.target.value);
    setMenu(e.target.value);
   
  }

  return(
    <div>
      <h3>셀렉트 태그 핸들링(실습)</h3>
      셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력
      <br/>

      <select onChange={handleChange}>
        <option>햄버거</option>
        <option>피자</option>
        <option>치킨</option>
      </select>

      <h3>선택한 결과</h3>
      <p>{menu}</p>


    </div>

  )
}

export default EventComponentQ