// export default () => {
export default (movies, action) => { // <---- just for console.log() demo
  console.log('>>>>>>>>> action of movie reducer', action);
  return [
    {
      title: 'The Godfather'
    },
    {
      title: 'The Matrix'
    },
    {
      title: 'Ratatouille'
    }
  ];
};
