import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class Apiphone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      tableData: [],
      selectedItem: '',
      name: '',
    };
  }

  componentDidUpdate() {
    fetch('https://api-mobilespecs.azharimm.site/v2/top-by-fans')
      .then((response) => response.json())
      .then((datos) =>
        this.setState({
          tableData: datos.data,
        })
      );
  }

  render() {
    return (
      <Container>
        <h1>hola?</h1>
        <Form>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Table striped bordered hover>
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
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Apiphone;
