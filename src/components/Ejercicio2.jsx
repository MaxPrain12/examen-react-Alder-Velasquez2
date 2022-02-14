import React from 'react';

import { Table, Button, Card } from 'react-bootstrap';

class Ejercicio2 extends React.Component {
  constructor(props) {
    super(props);

    this.valorMarcas = React.createRef();

    this.state = {
      tableData: [],

      marcas: [],

      imagen: '',

      marca: '',

      sistema: '',

      dimension: '',

      almacenamiento: '',
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://api-mobilespecs.azharimm.site/v2/brands'
    );

    const responseData = await response.json();

    const response2 = await fetch(
      'https://api-mobilespecs.azharimm.site/v2/top-by-fans'
    );

    const responseData2 = await response2.json();

    this.setState({
      tableData: responseData2.data.phones,

      marcas: responseData.data,
    });
  }

  async changeStateClicked(item) {
    const slugSelected = item.slug;

    const response = await fetch(
      'https://api-mobilespecs.azharimm.site/v2/ ' + slugSelected
    );

    const responseData = await response.json();

    this.setState({
      imagen: responseData.data.thumbnail,

      marca: responseData.data.brand,

      sistema: responseData.data.os,

      dimension: responseData.data.dimension,

      almacenamiento: responseData.data.storage,
    });
  }

  async encontrar() {
    const marca = this.valorMarcas.current.value;

    const response = await fetch(
      'http://api-mobilespecs.azharimm.site/v2/search?query= ' + marca
    );

    const responseData = await response.json();

    this.setState({
      tableData: responseData.data.phones,
    });
  }

  añadirLocalStorage() {
    const tlfs = [];

    tlfs.push(
      this.state.imagen,

      this.state.marca,

      this.state.sistema,

      this.state.dimension,

      this.state.almacenamiento
    );

    localStorage.setItem('tlfs', tlfs);
  }

  render() {
    if (this.state.marca !== '') {
      return (
        <div id="ej2">
          <h2>Ejercicio 2</h2>
          <br />
          <br />
          <br />

          <select ref={this.valorMarcas}>
            {this.state.marcas.map((item) => {
              return <option value={item.brand_name}>{item.brand_name}</option>;
            })}
          </select>
          <br />
          <br />
          <br />

          <Button variant="secondary" onClick={this.encontrar.bind(this)}>
            Search
          </Button>

          <br />
          <br />
          <br />

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Marca</th>

                <th>Modelo</th>
              </tr>
            </thead>

            <tbody>
              {this.state.tableData.map((item) => {
                return (
                  <tr onClick={() => this.changeStateClicked(item)}>
                    <td>{item.phone_name}</td>

                    <td>{item.slug}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <br />
          <br />
          <br />

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.state.imagen} />

            <Card.Body>
              <Card.Text>Marca: {this.state.marca}</Card.Text>

              <Card.Text>Sistema operativo: {this.state.sistema}</Card.Text>

              <Card.Text>Dimensión: {this.state.dimension}</Card.Text>

              <Card.Text>Almacenamiento: {this.state.almacenamiento}</Card.Text>
            </Card.Body>

            <Button variant="primary" onClick={() => this.añadirLocalStorage()}>
              Añadir a favoritos
            </Button>
          </Card>
        </div>
      );
    } else {
      return (
        <div id="ej2">
          <h2>Ejercicio 2</h2>
          <br />
          <br />
          <br />

          <select ref={this.valorMarcas}>
            {this.state.marcas.map((item) => {
              return <option value={item.brand_name}>{item.brand_name}</option>;
            })}
          </select>
          <br />
          <br />
          <br />

          <Button variant="secondary" onClick={this.encontrar.bind(this)}>
            Search
          </Button>

          <br />
          <br />
          <br />

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Marca</th>

                <th>Modelo</th>
              </tr>
            </thead>

            <tbody>
              {this.state.tableData.map((item) => {
                return (
                  <tr onClick={() => this.changeStateClicked(item)}>
                    <td>{item.phone_name}</td>

                    <td>{item.slug}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default Ejercicio2;
