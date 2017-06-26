import React from 'react';
import ReactDOM from 'react-dom';

var meInReact = React.createElement('div', { className: 'me'},
  React.createElement('h1', {}, 'An Awesome Person'),
  React.createElement('p', {}, 'Who is learning React'),

  React.createElement('ul', { className: 'my-interests'},
    React.createElement('li', { className: 'language' }, 'JavaScript'),
    React.createElement('li', { className: 'language' }, 'React'),
    React.createElement('li', { className: 'hobby' }, 'Movies'),
    React.createElement('li', { className: 'food' }, 'Ice cream')
  )
)



// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('root')
)

export default meInReact
