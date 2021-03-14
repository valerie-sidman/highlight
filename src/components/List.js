import React from 'react';
import Article from './Article';
import Video from './Video';
import Popular from './Popular';
import New from './New';

export default function List(props) {
  return props.list.map(item => {
    const WrappedItem = item.views < 100 ? New(item) : Popular(item);
    switch (item.type) {
      case 'video':
        return (
          <WrappedItem Item={Video}/>
        );

      case 'article':
        return (
          <WrappedItem Item={Article}/>
        );
      default:
        console.log('DEFAULT');
        return null;
    }
  });
};
