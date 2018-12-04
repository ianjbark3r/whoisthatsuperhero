import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import { connect } from 'react-redux';

import { setSuperhero } from '../actions/setSuperhero'

class SearchField extends Component {
  handleChange(e) {
    e.preventDefault();

    console.log(e.target.value)

    setSuperhero(e.target.value)
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <Form className="d-flex justify-content-center">
          <Input  type="text" name="superhero"  placeholder="Thor, Iron Man, etc." onChange={this.handleChange.bind(this)}></Input>
          <Button type="submit" className="btn btn-light ml-2">Search</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    superhero: state.superhero.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSuperhero: () => dispatch(setSuperhero())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
