// export default () => {
export default (movies, action) => { // <---- just for console.log() demo
  console.log('>>>>>>>>>action: reducers/movies.js', action);
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
