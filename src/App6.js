import { Fragment, useState } from "react";
import HookEffect from "./hook/HookEffect";
import HookRef from "./hook/HookRef";
import HookQ from "./hook/HookQ";
import HookReducer from "./hook/HookReducer";
import IterationComponentQ2 from "./component/IterationComponentQ2";

function App () {
//보이기 숨기기 - unmount값 확이
  const [visible, setVisible] = useState(true);

  const handleVisible = () => {
    setVisible(!visible);
  }
  console.log(visible)

  return (
    <Fragment>

      <button onClick={handleVisible}>{visible ? '숨기기' : '보이기' }</button>
      {visible ? <HookEffect/>: null}

    <hr/>
    <HookRef/>

    <hr/>
    <HookQ/>

    <hr/>
    <HookReducer/>

    <hr/>
    <IterationComponentQ2/>

    </Fragment>
  )
}

export default App;