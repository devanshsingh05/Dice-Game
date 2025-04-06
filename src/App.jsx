import React , {useState} from "react"
import styled from "styled-components"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay"

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <>

      {isPlaying ? <GamePlay /> : <StartGame toggle = {togglePlay}  />}
    </>
  )
}

export default App


