import React from 'react'
import { 
  Container, 
  List,
  Header,
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getTags, deleteTag } from '../reducers/tags'
import TagForm from './TagForm'
import LikeUsers from './LikeUsers'
import TagList from './TagList'

class Tags extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTags())
  }

  removeTag = (id) => {
    this.props.dispatch(deleteTag(id))
  }

  render() {
    const { tags } = this.props

    return (
      <Container>
        <TagForm />
        { tags.length > 0 &&
            <>
              <Header as="h3" textAlign="center">Tags</Header>
              <TagList tags={tags} myTags={true} deleteTag={this.removeTag} />
            </>
        }
        <LikeUsers />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { tags: state.tags }
}

export default connect(mapStateToProps)(Tags)

