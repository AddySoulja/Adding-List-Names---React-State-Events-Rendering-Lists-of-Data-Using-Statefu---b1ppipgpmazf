import React from 'react';
import ListItems from './ListItems';
//code here
const List = ({ listx }) => {
  return (
    <>
      <div id='list'>
        {
          listx.map((i, idx) => <ListItems valuex={i} index={idx} />)
        }
      </div>
    </>
  )
}

export default List;