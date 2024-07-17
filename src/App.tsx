import React, { useState } from 'react';

interface LoginData {
  username: string;
  password: string;
}

const App: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login data:', loginData);
    alert(`Login attempt with username: ${loginData.username}`);
    setLoginData({ username: '', password: '' });
  };

  return (
    <div className="login-container">
      <img src="src\assets\Mercedes-Logo.svg.png" alt="Company Logo" className="logo" />
      <p className="slogan">Mercedes-Benz</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={loginData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default App;