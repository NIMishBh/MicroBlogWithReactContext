import React from 'react';
import { UserContext } from '../utils/Context';
import { useHistory } from 'react-router';

const INITIAL_VALUES = {
  username: '',
  password: '',
}

function Signin() {

  const [values, setValues] = React.useState(INITIAL_VALUES);
  const {setUser} = React.useContext(UserContext);
  const history = useHistory();

  console.log('signin')
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    console.log(values);
    setUser(values.username);
    e.preventDefault();
    history.push('/blogs');
  }

  return (
    <>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input name='username' type="text" value={values.username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input name='password' type="password" value={values.password} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Signin
