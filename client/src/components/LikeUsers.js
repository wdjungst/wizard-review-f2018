import React from 'react'
import { connect } from 'react-redux'
import {
  Card,
  List,
  Image,
} from 'semantic-ui-react'
import { getLikeUsers } from '../reducers/likeUsers'
import TagList from './TagList'

class LikeUsers extends React.Component {
  componentDidMount() {
    this.reload()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tags !== this.props.tags)
      this.reload()
  }

  reload = () => {
    this.props.dispatch(getLikeUsers())
  }

  render() {
    return (
      <Card.Group itemsPerRow={4} stackable>
        { this.props.likeUsers.map( user => {
            const { id, user_name, image, tags } = user
            return (
              <Card key={id}>
                <Image 
                  src={image}
                  alt="user avatar"
                />
                <Card.Header>{user_name}</Card.Header>
                <Card.Description>
                  <TagList tags={tags} />
                </Card.Description>
              </Card>
            )
          })
        }
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
    likeUsers: state.likeUsers
  }
}

export default connect(mapStateToProps)(LikeUsers)


