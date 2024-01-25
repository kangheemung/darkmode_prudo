import {useState} from 'react'

function Login() {
      // ユーザー名とパスワードの状態を定義
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
    
        // フォームの送信処理
    async function handleSubmit(event) {
      event.preventDefault(); // デフォルトのフォーム送信を阻止
  
      try {
        const response = await fetch('http://#{#}/api/v1/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: {
              username,
              password,
            }
          })
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          alert('Registration successful!');
          // 登録成功後の処理（例: ログインページへリダイレクト）
        } else {
          throw new Error('Something went wrong with the registration.');
        }
      } catch (error) {
        console.error('There was an error!', error);
        alert(error.message);
      }
    }
  
  return (
    <div>
    <div className= "main">
      <p className= "sign" align="center">
       Login
      </p>
      <form className="form1" onSubmit={handleSubmit}>
        <input className= "username" type = "text" placeholder= "Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input className= "password" type = "password" placeholder= "password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <p className="login-link" align= "center">Forgot Password?</p>
          <button className="submit" align= "center" value="Login">Login</button>
      </form>
    </div>
    </div>
  )
}

export default Login
