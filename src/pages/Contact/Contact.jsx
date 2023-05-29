import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { useTranslation } from 'react-i18next';

const Contact = ({ form }) => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const message = useRef();
    const subject = useRef();
    const email = useRef();
    const name = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm(
                "service_0cbde3h",
                "template_fnauhp9",
                form.current,
                "BK44KEKY-acwTlRTN"
            )
            .then(
                () => {
                    console.log("sent")
                    message.current.value = "";
                    email.current.value = "";
                    name.current.value = "";
                    subject.current.value = "";
                    setLoading(false);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="contact container">
            <form className="py-5" ref={form} onSubmit={sendEmail}>
                <h4 data-aos="zoom-in" className='content-title'>{t('ContactH')}</h4>
                <div className="row form-part">
                    <div data-aos="fade-left" className="col-12 col-md-6"><input ref={name} className='form-item' type="text" placeholder={t('PH1')} name='user_name' required /></div>
                    <div data-aos="fade-left" className="col-12 col-md-6"><input ref={email} className='form-item' type="email" placeholder={t('PH2')} name='user_email' required /></div>
                    <div data-aos="fade-left" className="col-12"><input ref={subject} className='form-item' type="text" placeholder={t('PH3')} name='subject' required /></div>
                    <div data-aos="fade-left" className="col-12"><textarea ref={message} className='form-item' style={{ height: "165px" }} name="message" cols="30" rows="10" placeholder={t('PH4')} required></textarea></div>
                    <div className="col-12">
                        <button data-aos="fade-up" className="contact-button">{t('Button')}
                            {loading && <div className="spinner-border ms-1" role="status">
                                <span className="sr-only"></span>
                            </div>}</button>
                    </div>
                    <input type="hidden" name="made by github/anrsgrl" />
                </div>
            </form>
        </div>
    )
}

export default Contact;