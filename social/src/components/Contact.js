import React from 'react';


class Contact extends React.Component{
    render() {
        return (
<div id="contact-section">

  
  <form className="contact-form">
  <label>Last Name</label>
  <input type="text" name="lastName" placeholder="Last name" required="" />
  <label>Email</label>
  <input type="email" name="email" placeholder="Email" required="" />
  <label>Phone Number</label>
  <input
    type="tel"
    name="phoneNumber"
    placeholder="xxx-xxx-xxxx"
    required=""
    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
  />
  <label>Comments </label>
  <textarea
    name="Comments"
    placeholder="Leave comments here..."
    className="valid"
    defaultValue={""}
  />
  <div>
    <button className="con-sub-btn" type="submit" value="Submit">
      Submit
    </button>
  </div>
</form>
  
  </div>

        )
    }
}

export default Contact;