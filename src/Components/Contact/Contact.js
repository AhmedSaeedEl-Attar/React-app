import React from "react";
import Footer from "../Footer/Footer";
import {
  ContactSectionInput,
  ContactSection,
  ContactSectionButton,
  ContactSectionFirstLine,
  ContactSectionForm,
  ContactSectionH1,
  ContactSectionInputSubject,
  ContactSectionTextarea,
} from "./Contactcss";
export default function Contact() {
  return (
    <React.Fragment>
      <ContactSection>
        <div className="container">
          <ContactSectionH1>Drop Me A line</ContactSectionH1>
          <ContactSectionForm>
            <ContactSectionFirstLine>
              <ContactSectionInput type="text" placeholder="Your Name" />
              <ContactSectionInput type="email" placeholder="Your Email" />
            </ContactSectionFirstLine>
            <ContactSectionInputSubject
              type="text"
              placeholder="Your Subject"
            />
            <ContactSectionTextarea placeholder="Entre Your Message"></ContactSectionTextarea>
            <ContactSectionButton type="submit">
              Send Your Message
            </ContactSectionButton>
          </ContactSectionForm>
        </div>
      </ContactSection>
      <Footer />
    </React.Fragment>
  );
}
