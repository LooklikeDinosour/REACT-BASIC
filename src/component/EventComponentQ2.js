import { useState } from "react"


function EventComponentQ2 () {

  const [form, setForm] = useState({ data : '',
                                     result : ''
                                   });

  const handleChange = (e) => {
    //e.target <=== tag
    setForm({data: e.target.value, result: form.result})
  }

  const handleClick= () => {
    setForm({data:'', result: form.data})
  }



  // const handleChange = (e) => {
    
  //    console.log(e.target.value);
  //   // console.log(e.target.name);

  //   const copy ={...form, [e.target.name] : e.target.value}
  //   setForm(copy);
  
  // };

  
  // const handleClick = (e) => {
  //   setForm({in : '', out : e.target.value });
  // }


  return (
    <div>
      <h3>인풋데이터 핸들링(실습)</h3>

      <pre>클릭시 데이터는 공백으로 결과는 인풋이 입력한 값으로 처리합니다.</pre>
      <pre>힌트 state 2개</pre>
        

      <input type="text" onChange={handleChange} value={form.data}/>
      <button type="button" onClick={handleClick}>추가하기</button>

      <h3>결과</h3>
      {form.result}


    </div>

  )

}

export default EventComponentQ2