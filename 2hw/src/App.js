import { useState, useRef, useEffect } from "react";


function App() {
  const [messageList, writeMessage] = useState([])
  const myRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault();
    writeMessage(messageList => [...messageList, {author: "admin", text: myRef.current.value}])
    
  }

  useEffect(() => {
    if(messageList.length === 0){
      return
    }
    if(messageList[messageList.length - 1].author === "admin"){
      setTimeout(() => {
        writeMessage(messageList => [...messageList, {author: "bot", text: "bot responce"}])
      }, 1500)
    }
  }, [messageList])

  return (
    <>
      <ul>
        {messageList.map((item) => (
          <>
          <li>{item.text}</li>
          </>
        ))}
      </ul>
      <form action="#" onSubmit={handleSubmit}>
        <input ref={myRef} type="text"></input>
        <button type="submit">Отправить</button>
      </form>
    </>
  );
}

export default App;
