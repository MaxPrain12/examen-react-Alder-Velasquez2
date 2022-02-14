import React from 'react';
import { Container, Table } from 'react-bootstrap';

class TablaByfans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DatosTabla: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://api-mobilespecs.azharimm.site/v2/top-by-fans'
    );
    const responseData = await response.json();
    this.setState({
      DatosTabla: responseData.data.phones,
    });
  }

  render() {
    return (
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre Telefono</th>
              <th>Me gusta</th>
              <th>Slug</th>
            </tr>
          </thead>
          <tbody>
            {this.state.DatosTabla.map((item) => {
              return (
                <tr>
                  <td>{item.phone_name}</td>
                  <td>{item.favorites}</td>
                  <td>{item.slug}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default TablaByfans;
