
import { useState } from 'react';

export default function CreateAdminPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateUser = async () => {
    try {
      const response = await fetch('/api/createAdminUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name ,email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User created:', data);
        setMessage(`User created: ${data.email}`);
      } else {
        const errorData = await response.json();
        console.error('Failed to create user', errorData);
        setMessage(`Failed to create user: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error creating user');
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleCreateUser}>Create Admin User</button>
      {message && <p>{message}</p>}
    </div>
  );
}
