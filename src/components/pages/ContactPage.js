import React, { useState } from 'react';
import TitlePage from '../TitlePage';
import Input from '../Input';
import Button from '../Button';
import '../styles.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    object: '',
    message: ''
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
      <TitlePage title={"Contact"} />
      <div className="register-page">
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              placeholder="First Name"
              value={formData.firstname}
              onChange={(e) => handleInputChange(e, 'firstname')}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={(e) => handleInputChange(e, 'lastname')}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Object"
              value={formData.object}
              onChange={(e) => handleInputChange(e, 'object')}
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => handleInputChange(e, 'message')}
              rows={4}
            />
          </div>
          <Button label="Submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
