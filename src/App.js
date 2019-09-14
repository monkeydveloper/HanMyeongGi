import React from 'react';
import './App.css';
import MovieT from "./Movie"
import Tables from "./Table"
import CardObj from "./Card"
import {Table, Button, Overlay,Tooltip, Alert} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


function Example() {

  return (
    <>
      <Button >
        로그인
      </Button>
      <Overlay placement="left">
        {props => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

function AlertDismissibleExample() {

    return (
      <Alert variant="danger" dismissible>
        <Alert.Heading>우헤헤헤 보드게임 관리</Alert.Heading>
        <p>
          누구나 쉽게 즐기는 보드게임 카페!! 놀러오세요!
        </p>
        <Example/>
      </Alert>
    )
}

class App extends React.Component {

  state = {
    greeting: "Hello!",
    moviestar: [
      {
        title: "matrix",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
      },
      {
        title: "full metal jacket",
        poster: "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
      }
    ]
  }

  //신규 자바스크립트 : =>, 구버전 자바스크립트에서는 function() 이라고 정의 했었음.
  // ... 사용해야 현재 리스트에서 추가로 적용된다는 뜻으로 알아야 한다.
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        moviestar:[
          this.state.moviestar, //...this.state.moviestar,
          {
            title: "구리맹",
            poster: "https://m.media-amazon.com/images/M/MV5BNzkxODk0NjEtYjc4Mi00ZDI0LTgyYjEtYzc1NDkxY2YzYTgyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
          }
        ]
      })
    }, 5000)
  }

  

  render(){
    return (
      <div className="App">
        <AlertDismissibleExample/>
        <CardObj title={"뱅"} user={"한명기"} userMin={"2"} userMax={"3"} genre={"스릴러"} playTime={"30분"} difficulty={"중"} URL={"https://tumblbug-pci.imgix.net/9a46b2ca3ffe8ab4890a18ea222e1124cb504c7a/ca177036d090a59fe31b5216bb1cb303564e7996/39a353d038c64e5a9acf96f2a5925f0563602037/3ee74e86-ec86-4ab0-9450-f38338574bd9.jpg?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=b0a56c9b834738f245ba0bc0902b8290"}/>
      </div>
    )
  }
}

export default App;

//<AlertDismissibleExample/>
       
//{this.state.moviestar.map(moviestar => {
//  return <MovieT title={moviestar.title} poster={moviestar.poster} key/>
//})}