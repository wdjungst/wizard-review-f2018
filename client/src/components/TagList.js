import React from 'react'
import {
  List,
} from 'semantic-ui-react'

const TagList = ({ tags, deleteTag = f => f, myTags = false }) => (
  <List divided horizontal>
    { tags.map( tag =>
    <List.Item 
      key={tag.id}
      style={{ height: '25px', marginRight: '5px', backgroundColor: 'lightgreen' }}
    >
      { myTags  &&
         <List.Icon
           name="cancel"
           style={{ cursor: 'pointer' }}
           onClick={ () => deleteTag(tag.id)}
         />
      }
        #{tag.name}
      </List.Item>
    )
    }
  </List>
)

export default TagList
