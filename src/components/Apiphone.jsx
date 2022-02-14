import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import TablaByfans from './TablaByfans';

class Apiphone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      selectedItem: '',
      DatosTabla: [],
    };
  }
  eventoName(item) {
    let nombre = item.detail;
    this.setState({
      selectedItem: nombre,
    });
  }
  async componentDidMount() {
    const response = await fetch(
      'https://api-mobilespecs.azharimm.site/v2/brands/'
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData.data,
    });
  }
  componentDidUpdate() {
    if (this.state.selectedItem !== '') {
      fetch(this.state.selectedItem)
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            DatosTabla: data.phones,
          })
        );
    } else {
      console.log('No hay nada');
    }
  }

  render() {
    if (this.state.selectedItem !== '') {
      <div>
        <Container>
          <br />
          <br />
          <br />
          <Form>
            <Form.Select aria-label="Default select example">
              {this.state.tableData.map((item) => {
                return (
                  <option onClick={() => this.eventoName(item)}>
                    {item.brand_name}
                  </option>
                );
              })}
            </Form.Select>
            <br />
            <br />
          </Form>
          <br />
          <br />
          <br />
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre Telefono</th>
                  <th>Slug</th>
                </tr>
              </thead>
              <tbody>
                {this.state.DatosTabla.map((item) => {
                  return (
                    <tr>
                      <td>{item.phone_name}</td>
                      <td>{item.slug}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </Container>
      </div>;
    } else {
      return (
        <div>
          <Container>
            <br />
            <br />
            <br />
            <Form>
              <Form.Select aria-label="Default select example">
                {this.state.tableData.map((item) => {
                  return (
                    <option onClick={() => this.eventoName(item)}>
                      {item.brand_name}
                    </option>
                  );
                })}
              </Form.Select>
              <br />
              <br />
            </Form>
            <br />
            <br />
            <br />
          </Container>
          <TablaByfans />
        </div>
      );
    }
  }
}

export default Apiphone;
