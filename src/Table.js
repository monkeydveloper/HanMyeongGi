import React from "react";
import './Table.css';
import {Table} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

class Tables extends React.Component{
    render(){
        return(
            <div>
 <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>{this.props.first}</td>
      <td>{this.props.last}</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>{this.props.first}</td>
      <td>{this.props.last}</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
            </div>
        )
    }
}

export default Tables;