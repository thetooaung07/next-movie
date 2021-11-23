function Movie() {
  return (
    <div>
      
    </div>
  )
}

export default Movie;

export async function getServerSideProps(context) {
  const {id} = context.query;

  const request = await fetch(input)
}
