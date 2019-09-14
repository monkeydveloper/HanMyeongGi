import React from 'react';
import './card.css';
import {ListGroup, ListGroupItem, Button, Card, Container} from "react-bootstrap"
//import 'bootstrap/dist/css/bootstrap.min.css';

const enumList = {
    RESERVATION : 1,
    RENTING : 2,
    OVERDUE : 3
}

function getGameStatusByKey(state){
    
    // state == enumList.RESERVATION
    
    
}


const gameStatusList = {
    RENT : 1,
    DONE : 2
};
function getStatusCode(status) {
    return gameStatusList[status];
};
function main() {
    console.log(">> getStatusCode :: ", getStatusCode("RENT"));
};

class CardObj extends React.Component {
    render(){
        
    return(

 
        <Container>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.URL} />
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            재밌는 게임입니다.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>권장 인원 : {this.props.userMin} ~ {this.props.userMax}</ListGroupItem>
            <ListGroupItem>장르 : {this.props.genre}</ListGroupItem>
            <ListGroupItem>적정 시간 : {this.props.playTime}</ListGroupItem>
            <ListGroupItem>난이도 : {this.props.difficulty}</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">카드 정보</Card.Link>
            <Card.Link href="#">정보 수정</Card.Link>
        </Card.Body>
        </Card>
        </Container>
    )
}
}



export default CardObj;