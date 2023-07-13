import { useState } from "react";


function IterationComponent2 () {
  
  
  //1.
  const [list, setList] = useState([{id: 1, topic: 'hello'},
                                    {id: 2, topic: 'bye'}
                                    //추가..
                                  ]);

  //2. input 데이터 state
  const [inputData, setInputData] = useState('');
  
  
  //3. input데이터 핸들링
  const handleChange = (e) =>{
    setInputData(e.target.value);
  }
  
  //4. 클릭 이벤트 생성
  const handleClick = () => {
    //console.log(inputData);
    
    //id는 마지막 아이디보다 큰 숫자
    
    const obj= [{id: list[list.length - 1].id + 1 , topic: inputData}];
    
    //기존 배열에 합침
    //const newDate = list.concat(obj);
    const newDate = [...list, ...obj];
    setList(newDate);
  }
  // 이렇게 함수 정의 => 실행 순서를 맞추거나 아래 와 같이 실행과 정의를 동시에하기
  //5. 삭제이벤트 - 삭제는 id가 필요
  const handleRemove = (id) => {
    //console.log(id);

    //return에 true가 걸려있는 요소만 새로운배열로 만듦
  const result = list.filter( (item, index) => {
      console.log(item);
      console.log(index);

      //위에꺼 숙달되면 아래처럼작성가능
      // list.filter (item => item.id !=id );

      return item.id !== id;
    } );

    setList(result);

  }

  //함수 호출 및 정의를 한큐에
  //삭제 기능은 filter 를통해서 !=id 조건으로
  const newList = list.map( item => <li key={item.id} onDoubleClick={ () =>  handleRemove(item.id)  }>{item.topic}</li>)           
  
  
  return (
    <div>
      <h3>할일 목록 만들기</h3>
      <input type="text" onChange={handleChange} value={inputData}/>
      
      <button type="button" onClick={handleClick}>추가하기</button>

        <ul>
          {newList}
        </ul>

    </div>
  )
}

export default IterationComponent2;