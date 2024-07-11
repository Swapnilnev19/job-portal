import React, {useState} from 'react'
import axios from 'axios';
import imgLogin from "../../assets/images/login.png"
function ForgotPassword (){

  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/users', {
        params: { username }
      });
      const user = response.data.find((user) => user.username === username);
      if (user) {
        await axios.patch(`http://localhost:3000/users/${user.id}`, {
          password: newPassword
        });
        setMessage('Password reset successfully!');
      } else {
        setMessage('User not found.');
      }
    } catch (error) {
      setMessage('Error resetting password.');
    }
  };

  return (
    <>
        <div className='flex-prnt-login'>
            <div className='flex-left'>
            <form onSubmit={handlePasswordReset} className='form-login'>
            <div className='frm-grp'>
            <input
          type="text" className='frm-field'
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
            </div>
            <div className='frm-grp'>
            <input
          type="password" className='frm-field'
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
            </div>
            <div className='frm-grp'>
              <button type="submit" className='frm-btn'>Reset Password</button>
            </div>
            {message && <p>{message}</p>}
        
        
      </form>
      
            </div>
            <div className='flex-right'>
                <img src={imgLogin} alt='' />
            </div>
        </div>
    </>
  )
}

export default ForgotPassword
