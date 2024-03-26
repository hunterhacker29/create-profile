import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
    <h1>Create Your Profile</h1>
    <form action="#" method="post">
        <div class="profile-info">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required/>
        </div>
        <div class="profile-photo">
            <label for="photo">Profile Photo:</label>
            <input type="file" id="photo" name="photo" accept="image/*"/>
        </div>
        

        <div class="profile-details">
            <div class="detail-row">
                <label for="age">Age:</label>
                <input type="number" id="age" name="age" min="13" max="120" placeholder="Enter your age"/>
            </div>
            <div class="detail-row">
                <label for="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" placeholder="YYYY-MM-DD"/>
            </div>
            <div class="detail-row">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required/>
          </div>
            <div class="detail-row">
                <label for="email">Email ID:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required/>
            </div>
            <div class="detail-row">
                <label for="social_media">Social Media Links (Optional):</label>
                <textarea id="social_media" name="social_media" rows="3" placeholder="Paste links to your social media profiles (one per line)"></textarea>
            </div>
        </div>
        <div class="about-me">
            <label for="about_me">About Me:</label>
            <textarea id="about_me" name="about_me" rows="5" placeholder="Tell us a little about yourself and your interests"></textarea>
        </div>
        
        <button type="submit">Create Profile</button>
    </form>
</div>
  );
}

export default App;
