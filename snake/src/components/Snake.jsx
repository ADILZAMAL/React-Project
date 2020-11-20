 
import React from 'react'
import './SnakeGame.css'
import GameOver from './GameOver.jsx'

class SnakeGame extends React.Component {
  constructor(props) {
    super(props)

    // Game size initialization
    let width = this.props.width || window.innerWidth / 2.5
    width -= width % 30
    if (width < 180) width = 180
    let height = (width / 3) * 2
    let blockWidth = width / 30
    let blockHeight = height / 20

    // snake initialization
    let startSnakeSize = this.props.startSnakeSize || 6
    let snake = []
    let Xpos = width / 2
    let Ypos = height / 2
    let snakeHead = { Xpos: width / 2, Ypos: height / 2 }
    snake.push(snakeHead)
    for (let i = 1; i < startSnakeSize; i++) {
      Xpos -= blockWidth
      let snakePart = { Xpos: Xpos, Ypos: Ypos }
      snake.push(snakePart)
    }

    // apple position initialization
    let appleXpos =
      Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
      blockWidth
    let appleYpos =
      Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
      blockHeight
    while (appleYpos === snake[0].Ypos) {
      appleYpos =
        Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
        blockHeight
    }

    this.state = {
      width,
      height,
      blockWidth,
      blockHeight,
      gameLoopTimeout: 100,
      timeoutId: 0,
      startSnakeSize,
      snake,
      apple: { Xpos: appleXpos, Ypos: appleYpos },
      direction: 'right',
      directionChanged: false,
      isGameOver: false,
      snakeColor:  this.props.snakeColor || this.getRandomColor(),
      appleColor: this.props.appleColor || this.getRandomColor(),
      score: 0,
      highScore: Number(localStorage.getItem('snakeHighScore')) || 0,
      newHighScore: false,
    }
  }

  componentDidMount () {
    window.addEventListener('keydown', this.handleKeyDown)
    this.gameLoop()
  }
  componentWillUnmount(){
    clearTimeout(this.state.timeoutId)
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  resetGame() {
    let width = this.state.width
    let height = this.state.height
    let blockWidth = this.state.blockWidth
    let blockHeight = this.state.blockHeight
    let apple = this.state.apple

    // snake reset
    let snake = []
    let Xpos = width / 2
    let Ypos = height / 2
    let snakeHead = { Xpos: width / 2, Ypos: height / 2 }
    snake.push(snakeHead)
    for (let i = 1; i < this.state.startSnakeSize; i++) {
      Xpos -= blockWidth
      let snakePart = { Xpos: Xpos, Ypos: Ypos }
      snake.push(snakePart)
    }

    // apple position reset
    apple.Xpos =
      Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
      blockWidth
    apple.Ypos =
      Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
      blockHeight
    while (this.isAppleOnSnake(apple.Xpos, apple.Ypos)) {
      apple.Xpos =
        Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
        blockWidth
      apple.Ypos =
        Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
        blockHeight
    }

    this.setState({
      snake,
      apple,
      direction: 'right',
      directionChanged: false,
      isGameOver: false,
      gameLoopTimeout: 100,
      snakeColor: this.getRandomColor(),
      appleColor: this.getRandomColor(),
      score: 0,
      newHighScore: false,
    })
  }

  handleKeyDown=(event)=>{
    if (this.state.isGameOver && event.keyCode === 32) {
      this.resetGame()
      return
    }
    if(this.state.directionChanged)
      return
    switch(event.keyCode){
      case 37:
        case 65:
          this.goLeft()
          break
        case 38:
        case 87:
          this.goUp()
          break
        case 39:
        case 68:
          this.goRight()
          break
        case 40:
        case 83:
          this.goDown()
          break
        default:
    }
    this.setState({ directionChanged: true })
  }
  goLeft=()=> {
    let newDirection = this.state.direction === 'right' ? 'right' : 'left'
    this.setState({ direction: newDirection })
  }

  goUp=()=> {
    let newDirection = this.state.direction === 'down' ? 'down' : 'up'
    this.setState({ direction: newDirection })
  }

  goRight=()=> {
    let newDirection = this.state.direction === 'left' ? 'left' : 'right'
    this.setState({ direction: newDirection })
  }

  goDown=()=> {
    let newDirection = this.state.direction === 'up' ? 'up' : 'down'
    this.setState({ direction: newDirection })
  }

  gameLoop = () => {
    setTimeout(()=>{
      if(!this.state.isGameOver){
        this.moveSnake()
        this.tryToEatSnake()
        this.tryToEatApple()
        this.setState({directionChanged:false})
      }

      this.gameLoop()
    }, this.state.gameLoopTimeout)
  }

  getRandomColor(){
    const hexa="0123456789ABCDEF";
    let color="#";
    for(let i=1; i<=6; i++){
      color+=hexa[Math.floor(Math.random()*16)]
    }
    return color;
  }

  tryToEatApple = () =>{
    let snake = this.state.snake
    let apple = this.state.apple

    //If the snake's head is on Apple
    if(snake[0].Xpos == apple.Xpos && snake[0].Ypos === apple.Ypos){
      let width = this.state.width
      let height = this.state.height
      let blockWidth = this.state.blockWidth
      let blockHeight = this.state.blockHeight
      let newTail = { Xpos: apple.Xpos, Ypos: apple.Ypos }
      let highScore = this.state.highScore
      let newHighScore = this.state.newHighScore
      let gameLoopTimeout = this.state.gameLoopTimeout

      //add new tail
      snake.push(newTail)

      //create another apple
      apple.Xpos =
        Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
        blockWidth
        apple.Ypos =
        Math.floor(Math.random() * ((height - blockHeight) / blockHeight + 1)) *
        blockHeight
      while (this.isAppleOnSnake(apple.Xpos, apple.Ypos)) {
        apple.Xpos =
          Math.floor(Math.random() * ((width - blockWidth) / blockWidth + 1)) *
          blockWidth
        apple.Ypos =
          Math.floor(
            Math.random() * ((height - blockHeight) / blockHeight + 1)
          ) * blockHeight
      }

      //increment highScore if needed
        if(this.state.score === highScore){
          highScore++;
          localStorage.setItem('snakeHighScore', highScore)
          newHighScore = true
        }
        if(gameLoopTimeout >25) gameLoopTimeout-=0.5
        this.setState({
          snake,
          apple,
          score:this.state.score + 1,
          highScore,
          newHighScore,
          gameLoopTimeout
        })
    }
  }
  tryToEatSnake =()=> {
    let snake = this.state.snake

    for (let i = 1; i < snake.length; i++) {
      if (snake[0].Xpos === snake[i].Xpos && snake[0].Ypos === snake[i].Ypos){
        this.setState({ isGameOver: true })
        console.log('hi')
      }
    }
  }
  moveHeadUp(){
    let height = this.state.height
    let blockHeight = this.state.blockHeight
    let snake = this.state.snake
    snake[0].Ypos = snake[0].Ypos <= 0 ? height - blockHeight : snake[0].Ypos - blockHeight
    this.setState({snake})
    return
  }
   moveHeadDown(){
    let height = this.state.height
    let blockHeight = this.state.blockHeight
    let snake = this.state.snake
    snake[0].Ypos =
      snake[0].Ypos >= height - blockHeight ? 0 : snake[0].Ypos + blockHeight
    this.setState({ snake })
  }
   moveHeadRight(){
    let width = this.state.width
    let blockWidth = this.state.blockWidth
    let snake = this.state.snake
    snake[0].Xpos = snake[0].Xpos >= width - blockWidth ? 0 : snake[0].Xpos + blockWidth
    this.setState({snake})
  }
  moveHeadLeft(){

    let width = this.state.width
    let blockWidth = this.state.blockWidth
    let snake = this.state.snake
    snake[0].Xpos =
      snake[0].Xpos <= 0 ? width - blockWidth : snake[0].Xpos - blockWidth
    this.setState({ snake })
  }
  moveHead = () =>{
    switch(this.state.direction){
      case 'up':
        this.moveHeadUp()
        break
      case 'down':
        this.moveHeadDown()
        break
      case 'left':
        this.moveHeadLeft()
        break
      case 'right':   
        this.moveHeadRight()
    }
  }

   moveSnake =() =>{
    let snake = this.state.snake
    let blockWidth = this.state.blockWidth
    let prev = {...snake[0]}
    this.moveHead()
    // console.log(prev)
    for(let i = 1; i < snake.length; i++)
    {
      let temp = snake[i]
      snake[i] = prev
      prev = temp
     
    }
    this.setState({snake,})
  }

  isAppleOnSnake=(appleXpos, appleYpos)=> {
    let snake = this.state.snake
    for (let i = 0; i < snake.length; i++) {
      if (appleXpos === snake[i].Xpos && appleYpos === snake[i].Ypos)
        return true
    }
    return false
  }

  render() {
    // Game over
    if (this.state.isGameOver) {
      return (
        <GameOver
          width={this.state.width}
          height={this.state.height}
          highScore={this.state.highScore}
          newHighScore={this.state.newHighScore}
          score={this.state.score}
        />
      )
    }

 

   

    
   
    return (
      <div
        className='GameBoard'
        style={{
          width: this.state.width,
          height: this.state.height,
          borderWidth: this.state.width / 50,
        }}>
        {this.state.snake.map((snakePart, index) => {
          return (
            <div
              key={index}
              className='Block'
              style={{
                width: this.state.blockWidth,
                height: this.state.blockHeight,
                left: snakePart.Xpos,
                top: snakePart.Ypos,
                background: this.state.snakeColor,
              }}
            />
          )
        })}
        <div
          className='Block'
          style={{
            width: this.state.blockWidth,
            height: this.state.blockHeight,
            left: this.state.apple.Xpos,
            top: this.state.apple.Ypos,
            background: this.state.appleColor,
          }}
        />
        <div className='Score' style={{ fontSize: this.state.width / 20 }}>
          HIGH-SCORE: {this.state.highScore}&ensp;&ensp;&ensp;&ensp;SCORE:{' '}
          {this.state.score}
        </div>
  
      </div>
    )
  }
}

export default SnakeGame