
const TURNS = {
  X: 'x',
  O: 'o'
}

const board = Array(9).fill(null)

const Square = ({ children, updateBoard, index }) => {
  return (
    <div className="square">
      {children}
    </div>
  )
}

function App() {

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map((cell, index) => {
            return (
              <Square key={index} index={index} />
            )
          })
        }
      </section>
    </main>
  )
}

export default App
