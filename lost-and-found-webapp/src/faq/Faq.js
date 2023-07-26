
import React, { useEffect } from 'react'
import './Faq.css'
import image from "./bg.jpg";

const Faq = (props) => {

    const faq = [
        { question: "How does the Lost and Found web app work?", answer: "Our Lost and Found web app provides a platform for users to report lost items and search for their missing possessions. Users can create a profile, submit details about their lost item, and browse through the found items listed on our platform. The app uses the entered details to identify potential matches and connect the owners with the finders." },
        { question: "What should I do if I've lost something?", answer: "If you've lost something, log in to your account on our web app and report the lost item with as many details as possible. This helps increase the chances of a successful match. We recommend regularly checking our platform for updates on items gallery that match your description." },
        { question: "Can I search for a lost item without creating an account?", answer: "No you cannot. Since this app is for UPES students only hence we need to log you in to verify you. Having an account also allows you to receive notifications and communicate with the finder of a potential match." },
        { question: "What should I do if I find a lost item?", answer: "If you find a lost item, please create an account on our web app and report the found item with accurate details. You have to upload a photo of the item to help with identification. This was you will help and owner find their lost item." },
        { question: "How long does it usually take to find a lost item? ", answer: "The time it takes to find a lost item can vary depending on various factors such as the uniqueness of the item, the accuracy of the description, and the availability of potential matches. We encourage users to regularly check our platform and update their lost item reports with any additional details." },
        { question: "Is my personal information secure?", answer: "We take user privacy and data security seriously. We have implemented measures to safeguard your personal information. Only registered users with verified accounts have access to specific details of lost and found items. We recommend reviewing our privacy policy for more information on data protection." },
        { question: "What if I have further questions or need assistance?", answer: "If you have any additional questions, need assistance, or encounter any issues with our web app, please reach out to our support team. You can contact us through the provided channels, such as email or the support section on our website." }
    ];

    const [activeIndex, setActiveIndex] = React.useState(null);

    const handleIsClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    }

    useEffect(() => {

        if(props.theme !== 'dark')
        {
            document.body.style.background = `url(${image}) `;
        }
        else{
            document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`;
        }
        // document.body.style.backgroundSize = 'cover';
        return () => {
            document.body.style.background = null;
        };
    }, [props.theme]);

    return (
        <div>
            <section style={{color: `${props.theme === 'dark' ? '#f5f5f5' : '#333'}`, marginBottom: '150px'}}>
                <h2 className='title my-4'>FAQs</h2>

                <div style={{ backgroundColor: `${props.theme === 'dark' ? '#333' : 'whitesmoke'}`, paddingLeft: "20px", borderRadius: "20px", paddingRight: "20px", paddingBottom: "50px", marginBottom:"50px"}}>
                    {faq.map((item, index) => (
                        <div key={index} onClick={() => handleIsClick(index)} className={`faq ${activeIndex === index ? 'active' : ''}`}>
                            <div className="question">
                                <h3>{item.question}</h3>

                                <svg width="15" height="10" viewBox="0 0 42 25">
                                    <path
                                        d="M3 3L21 21L39  3"
                                        stroke='white'
                                        stroke-width="7"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>
                            <div className="answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>

                    ))}

                </div>
            </section>
        </div>
    )
}

export default Faq
