import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import '../styles.css';
import TitlePage from '../TitlePage';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [fieldName]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <TitlePage title={"Register"} />
      <div className="register-page">
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              placeholder="Firstname"
              value={formData.firstname}
              onChange={(e) => handleInputChange(e, 'firstname')}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Lastname"
              value={formData.lastname}
              onChange={(e) => handleInputChange(e, 'lastname')}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange(e, 'email')}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleInputChange(e, 'password')}
            />
          </div>
          <div>
            <Button label="Submit" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
