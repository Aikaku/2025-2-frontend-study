function User(props) {
  return (
    <div key = {props.id}>
      <p>{props.name}</p>
    </div>
  )
}

export default User;
