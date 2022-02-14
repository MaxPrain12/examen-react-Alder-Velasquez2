import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import TablaByfans from './TablaByfans';

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

  async componentDidMount() {
    const response = await fetch(
      'https://api-mobilespecs.azharimm.site/v2/brands/'
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData.data,
    });
  }

  render() {
    return (
      <div>
        <Container>
          <br />
          <br />
          <br />
          <Form>
            <Form.Select aria-label="Default select example">
              {this.state.tableData.map((item) => {
                return <option>{item.brand_slug}</option>;
              })}
            </Form.Select>
            <br />
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
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

export default Apiphone;
