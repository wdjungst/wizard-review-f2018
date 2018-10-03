import React from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addTag } from '../reducers/tags'

class TagForm extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    const { value } = e.target
    const name = value.toLowerCase().replace(' ', '_')
    this.setState({ name })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const tag = { name: this.state.name }
    this.props.add(tag)
    this.setState({ name: '' })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          onChange={this.handleChange}
          value={this.state.name}
          required
          placeholder="Add A Tag"
        />
      </Form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    add: (tag) => dispatch(addTag(tag)),
  }
}

export default connect(null, mapDispatchToProps)(TagForm)

