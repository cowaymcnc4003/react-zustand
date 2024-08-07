import { useState } from 'react';
import './App.css'
import { useMemoStore } from './store/memoStore'

function App() {

  const { memoList, setMemoList } = useMemoStore();
  const [memoValue, setMemoValue] = useState('');
  // const onClickHandler = (e) => {
  //   e.preventDefault();
  //   setMemoList('1');
  // };
  return (
    <>
      <ul>
        {
          memoList.map((item) => {
            console.log(JSON.stringify(item));
            return <li key={item.id}>{item.content}</li>
          })
        }
      </ul>
      <div>
        <button onClick={(e) => {
          e.preventDefault();
          setMemoList(memoValue);
        }}>추가</button>
        <input type="text" onChange={
          (e) => setMemoValue(e.target.value)
        } />
      </div >
    </>
  )
}

export default App
