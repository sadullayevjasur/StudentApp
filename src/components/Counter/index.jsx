import "./style.css"


export const Counter = ({ count, setCount }) => {
  const plus = () => {
    setCount(++count)
  }
  const minus = () => {
    if (count === 0) return
    setCount(--count)
  }



  return (

    <><main>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
          </main> <h1>{count}</h1>
      <header>
        <div className="menubar">
          <h1>Logo</h1>
          <ul>
            <li><a href="">Menu</a></li>
            <li><a href="">Abaut</a></li>
            <li><a href="">Product</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          
        </div>
      </header>
     

    </>

  )
}
