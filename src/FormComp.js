import { Component } from "react"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
class FormComp  extends Component{
    constructor(props){
        super(props);
        this.state={
            resultSum:0,
            num1:0,
            num2:0,
            resultMultiple:1
        }
        this.handlenum1Change=this.handlenum1Change.bind(this);
        this.handlenum2Change=this.handlenum2Change.bind(this);
    }
    multiple=()=>(
        this.setState({resultMultiple:this.state.num1*this.state.num2})
    )
    handlenum1Change(evt){
        this.setState({num1:Number(evt.target.value)});
    }
    handlenum2Change(evt){
        this.setState({num2:Number(evt.target.value)});
    }
    sum=()=>(
        this.setState({resultSum :this.state.num1+this.state.num2})
    )
    render(){

        return(
            <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Number</Form.Label>
                <Form.Control placeholder="Enter the first number" onChange={this.handlenum1Change} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Second Number</Form.Label>
                <Form.Control placeholder="Enter the second number" onChange={this.handlenum2Change} />
              </Form.Group>
            </Row>
      
            <Button variant="danger" onClick={this.multiple} >
              Multiple
            </Button>
            <Button variant="primary" onClick={this.sum} >
              Sum
            </Button>
            <Row></Row>
            <br/>
            <Row>
             <Form.Label>The Result of sum:{this.state.resultSum}</Form.Label>
</Row>
<Row>
             <Form.Label>The Result of multiple:{this.state.resultMultiple}</Form.Label>
</Row>
          </Form>
         
        );
    }

}
export default FormComp;