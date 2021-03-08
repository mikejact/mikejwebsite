import React, {useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, } from 'mdbreact';
import NavBar from "./NavBar";
import Footer from "./Footer";
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_2litFOggLdz5rAILeBIZT");



function Contact() {
     
    const [alertVisibility , setAlertVisibility ] = useState(false);

    function handleChange(event) {
        console.log(event.target.value);
        setAlertVisibility(true);
        <div className = "contactbackgrounds"></div>
    }   

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_m5n8rfo', 'template_cacefze', e.target, 'user_2litFOggLdz5rAILeBIZT')
      .then((result) => {
        setAlertVisibility(true);
    });
      e.target.reset();
  };

  return (
   
     <div className = "contactbackground">
       
        <NavBar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <MDBContainer>
          <MDBRow className = "formcontainer">
            <MDBCol md="6">
              <form   onSubmit={sendEmail} >
              
                <p className="h4 contactme text-center mb-4">Please take a moment to fill out the info below and I'll get back to you as soon as I can.</p>
                <br />
                <label htmlFor="defaultFormContactNameEx" className="grey-text" > Your name </label>
                <input required type="text" id="defaultFormContactNameEx" className="form-control" name="user_name" />
                <br />


                <label htmlFor="defaultFormContactEmailEx" className="grey-text"> Your email </label>
                <input required type="email" id="defaultFormContactEmailEx" className="form-control" name="user_email"/>
                <br />

                { 
      alertVisibility && 

      <div class="alert alert-success" role="alert">
  Success! <br /> Your message has been sent. <br />Click on the home button to go back to my homepage. <br /><br /><a className = "myButton" href="./">Home</a>
</div>
      } 

                <label htmlFor="defaultFormContactSubjectEx" className="grey-text"> Subject</label>
                <input required type="text" id="defaultFormContactSubjectEx" className="form-control" name="user_subject" />
                <br />


                <label htmlFor="defaultFormContactMessageEx" className="grey-text"> Your message </label>
                <textarea required type="text" id="defaultFormContactMessageEx" className="form-control" rows="7" name="message"/>
                <div className="text-center mt-4">
                          <MDBBtn className = "contactbackgrounds" onChange = {handleChange} value = {alertVisibility} color="warning" outline type="submit" >
                            Send
                            <MDBIcon  far icon="paper-plane" className="ml-2"  />
                          </MDBBtn>
                        </div>
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <br />
                <br />
                <div className = "footer-contact">
                <Footer/>
                </div>
                </div>
              );
            };



export default Contact;
