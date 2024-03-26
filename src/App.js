import React from 'react';
import './App.css';

function App() {
  return (
    <div className='create-main'>
      <div className="create-container">
        <h2>Blog HuB</h2>
        <h1>Create Your Profile</h1>

        <form action="#" method="post">
          <div className="create-section profile-info">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />

            <label htmlFor="middleName">Middle Name:</label>
            <input type="text" id="middleName" name="middleName" placeholder="Enter your middle name" />

            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
          </div>

          <div className="create-section create-profile-photo">
            <label htmlFor="photo">Profile Photo:</label>
            <input type="file" id="photo" name="photo" accept="image/*" />
          </div>

          <div className="create-section create-profile-details">
            <div className="create-detail-row">
              <label htmlFor="age">Age:</label>
              <input type="number" id="age" name="age" min="13" max="120" placeholder="Enter your age" />
            </div>
            <div className="create-detail-row">
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" name="dob" placeholder="YYYY-MM-DD" />
            </div>
            <div className="create-detail-row">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
            </div>
            <div className="create-detail-row">
              <label htmlFor="email">Email ID:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email address" required />
            </div>
            <div className="create-detail-row">
              <label htmlFor="social_media">Social Media Links (Optional):</label>
              <textarea id="social_media" name="social_media" rows="3" placeholder="Paste links to your social media profiles (one per line)"></textarea>
            </div>
          </div>

          <div className="create-section create-about-me">
            <label htmlFor="about_me">About Me:</label>
            <textarea id="about_me" name="about_me" rows="5" placeholder="Tell us a little about yourself and your interests"></textarea>
          </div>

          <button className=".create-section button" type="submit">Create Profile</button>
        </form>
      </div>
    </div>
  );
}

export default App;

