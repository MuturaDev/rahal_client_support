import React, { useState } from 'react';
import './App.css';


function App() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const { message } = formData;

    if ( message === "") {
      return;
    }

     const email = "ecguidekw.app@gmail.com";

    var subject = 'Rahal Client Support';
    var emailBody = message;
    var attachment = 'file:///Users/user/Downloads/Cost_Calculator.pdf'; // Replace with the actual path to the attachment on your server

    // Encode special characters in the email body and attachment
    subject = encodeURIComponent(subject);
    emailBody = encodeURIComponent(emailBody);
    attachment = encodeURIComponent(attachment);

    // Construct the Gmail compose URL
    var gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=${subject}&body=${emailBody}&attcnt=1&attachment=${attachment}`;

    // Open Gmail compose window
    window.open(gmailUrl, '_blank');


    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <header>
        <div className="header-content">
          <img
            src="https://lh3.googleusercontent.com/yCkBGZbLsu6aqiZQ6-2V2yAtY8dCLrJ2ZuwctC6qZW1aRJMTGGTY3wft3FgIGBXK4wB4"
            alt="Support Logo"
          />
          <h1>App Support</h1>
        </div>
      </header>
      <main>
        <section id="faq">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>
              <strong>Question:</strong> What is RAHAL GPS Vehicle Tracking App?
            </li>
            <p>
              <strong>Answer:</strong> RAHAL GPS Vehicle Tracking App is a
              native mobile application designed for real-time tracking of
              vehicles using GPS technology. It provides accurate location
              monitoring and navigation features.
            </p>

            <li>
              <strong>Question:</strong> How does RAHAL GPS Vehicle Tracking App
              work?
            </li>
            <p>
              <strong>Answer:</strong> RAHAL GPS Vehicle Tracking App utilizes
              GPS technology to pinpoint the location of vehicles. Users can
              install the app on their mobile devices and track the vehicles in
              real-time through the app's interface.
            </p>

            <li>
              <strong>Question:</strong> Is RAHAL GPS Vehicle Tracking App
              compatible with all devices?
            </li>
            <p>
              <strong>Answer:</strong> RAHAL GPS Vehicle Tracking App is
              compatible with most iOS and Android devices. However, it's
              recommended to check the compatibility requirements on the
              respective app stores before downloading.
            </p>

            <li>
              <strong>Question:</strong> How secure is the data in RAHAL GPS
              Vehicle Tracking App?
            </li>
            <p>
              <strong>Answer:</strong> Security is a top priority for us. RAHAL
              GPS Vehicle Tracking App employs encryption and other security
              measures to protect user data and ensure confidentiality.
            </p>

            <li>
              <strong>Question:</strong> Can I customize the settings in RAHAL
              GPS Vehicle Tracking App?
            </li>
            <p>
              <strong>Answer:</strong> Yes, RAHAL GPS Vehicle Tracking App
              offers customization options to tailor the app according to your
              preferences. Users can adjust settings such as notification
              preferences, map views, and more.
            </p>
            <li>
              <strong>Question:</strong> How do I get started with the app?
            </li>
            <p>
              <strong>Answer:</strong> To get started, please reach out to
              WhatsGPS support or your administrator. They will provide you with
              the necessary credentials to log in and access the app.
            </p>
            <li>
              <strong>Question:</strong> What should I do if I encounter an
              error?
            </li>
            <p>
              <strong>Answer:</strong> Please contact our support team for
              assistance.
            </p>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Support</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <label style={{ display: "none" }} htmlFor="name">Name:</label>
            <input
              style={{ display: "none" }}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              
            />
            <label  style={{ display: "none" }} htmlFor="email">Email:</label>
            <input
              style={{ display: "none" }}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button style={{ marginBottom: "50px" }} type="submit">Submit</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Rahal App Support</p>
      </footer>
    </div>
  );
}

export default App;