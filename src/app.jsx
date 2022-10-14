import preactLogo from './assets/preact.svg'
import './app.css'
import { useNumberStore } from './store'

function ButtonIncreaserBar() {
  const { number, increase, decrease, reset } = useNumberStore()

  return (
    <>
      <button onClick={decrease}>
        -
      </button>
      <button onClick={reset}>
        count is {number}
      </button>
      <button onClick={increase}>
        +
      </button>
    </>
  )
}

export function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <ButtonIncreaserBar />
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
