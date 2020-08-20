import React, {useState} from 'react'
import checkWinner from 'tic-tac-toe-detect-winner'

const ai = require('tictactoe-complex-ai');




let aiInstance = ai.createAI({level: 'expert', maxResponseTime: 200, minResponseTime: 200});


export const TicTacToe = ()=>{

	const [board,changeBoard] = useState(['','','','','','','','',''])
	const [result, declareResult] = useState('')
	const [tries, changeTries] = useState(0)

	const clearHandler = () => {
		
		changeBoard(['','','','','','','','',''])
		declareResult('')
		changeTries(tries + 1)
		for(var i=0; i<=8; i+=1){
			document.getElementById(i).innerHTML = ''	
			document.getElementById(i).style.background = 'white'
			document.getElementById(i).disabled = ''
		}
	}




	const moveHandler = (event) => {
		
		const currentBoard = board

		
		if(result === ''){
			//User Move
			const userMove = event.target.id
			// console.log('userMove', userMove)
			currentBoard.splice(userMove,1,'X')
			document.getElementById(userMove).innerHTML = 'X'	
			document.getElementById(userMove).style.background = 'Red'
			document.getElementById(userMove).disabled = 'true'

			//AI Move
			aiInstance.play(currentBoard)
			.then(aiMove=>{
				console.log('Getting AI Move')
				// console.log('aiMove', aiMove)
				currentBoard.splice(aiMove,1,'O')
				document.getElementById(aiMove).innerHTML = 'O'	
				document.getElementById(aiMove).style.background = 'Blue'
				document.getElementById(aiMove).disabled = 'true'


				var splitBoard = ([currentBoard.slice(0,3),currentBoard.slice(3,6),currentBoard.slice(6,9)])
				var result = checkWinner(splitBoard, 3)
				console.log(result)
				if(result.winnerDetected === true){
					if(result.winnerSymbol ==='X'){
						declareResult("Aweosome! You Won.")
					} else {
						declareResult("I won! Better luck next time.")
					}
				}
			})
			.catch(()=>{				
				var splitBoard = ([currentBoard.slice(0,3),currentBoard.slice(3,6),currentBoard.slice(6,9)])
				var result = checkWinner(splitBoard, 3)
				console.log(result)
				if(result.type === 'draw game')
					declareResult("Well Done! It's a Draw.")
				else
					console.log('Some Error Occured')
			})
		}
		


		


	}

	return(
		<div className="pt-5" id="tictactoe">
			<div className="m-4">
				<h2> Here is a <span className="text-danger" style={{fontSize: '1em'}}> Tic Tac Toe </span> game </h2>
				<p> Rules are simple. It's you against me. If you want, I would give you a HUGE discount </p>
				<h3 className="text-danger">{result!==''?result:''}</h3>
				<button id={0} className="tictacttoe-button btn m-1 text-center text-white border font-weight-bold" onClick={moveHandler} ></button>
				<button id={1} className="tictacttoe-button btn m-1 text-center text-white border font-weight-bold" onClick={moveHandler} ></button>
				<button id={2} className="tictacttoe-button btn m-1 text-center text-white border font-weight-bold" onClick={moveHandler} ></button>
				<br />
				<button id={3} className="tictacttoe-button btn m-1 text-center text-white border font-weight-bold" onClick={moveHandler} ></button>
				<button id={4} className="tictacttoe-button btn m-1 text-center text-white border font-weight-bold" onClick={moveHandler} ></button>
				<button id={5} className="tictacttoe-button btn m-1 text-center text-white border font-weight-bold" onClick={moveHandler} ></button>
				<br />
				<button id={6} className="tictacttoe-button btn m-1 text-center text-white border font-weight-bold" onClick={moveHandler} ></button>
				<button id={7} className="tictacttoe-button btn m-1 text-center text-white border font-weight-bold" onClick={moveHandler} ></button>
				<button id={8} className="tictacttoe-button btn m-1 text-center text-white border font-weight-bold" onClick={moveHandler} ></button>
				<br />
				<button className="btn btn-light text-dark font-weight-bold mt-4 mb-2 py-0 button-pill" onClick={clearHandler}> again?</button>
				<p> You tried {tries<=1?tries+' time':tries+' times'}  </p>
			</div>
			
		</div>
		)

}
