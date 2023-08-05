import axios from "axios"

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      console.log(e.target[1].value);
      axios.post('http://localhost:3001/authenticate',
                {username: value, secret: e.target[1].value})
                  .then( result =>{
                      props.onAuth({ ...result.data, secret: e.target[1].value })
                  })
                  .catch( err => console.log("Authentication Error" ))
      
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
  
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
          
            <div className="auth-label">Password</div>
            <input className="auth-input" name="Password" />          

            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;