'use client'
import Button from "@/components/UILibrary/Button";
import FadeIn from "@/components/UILibrary/FadeIn";
import { useEffect, useState } from "react";

type ContactProps = {
  shouldFadeOnScroll?: boolean;
};

export default function Contact({ shouldFadeOnScroll }: ContactProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [type, setType] = useState('individual');
    const [subject, setSubject] = useState('Individual Therapy Inquery');
    const [psycologyTodayLink, setPsycologyTodayLink] = useState('https://www.psychologytoday.com/us/therapists/christian-j-colton-eugene-or/897974');
    const [messageSent, setMessageSent] = useState(false);

    useEffect(() => {
        const type = window.location.search.includes('type=group') ? 'group' : 'individual';
        setType(type);
        setSubject(type === 'group' ? 'Group Therapy Inquery' : 'Individual Therapy Inquery');
        setPsycologyTodayLink(type === 'group' ? 'https://www.psychologytoday.com/us/groups/mormon-religious-trauma-group-therapy-eugene-or/256868' : 'https://www.psychologytoday.com/us/therapists/christian-j-colton-eugene-or/897974');
    }, []);

    return (
      <div className="h-screen flex justify-center items-center" >
        <FadeIn delay={500} shouldFade={shouldFadeOnScroll}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 items-center justify-center bg-white/60 p-10">
              <h1 className="text-5xl font-bold text-center mb-4">Contact</h1>
              {messageSent && <p className="text-2xl font-medium mb-4">Message sent successfully!</p>}
              {!messageSent && <p className="text-2xl font-medium mb-4">I would love to hear from you. Please use the form below to get in touch.</p>}
              <div
                style={{
                    gridTemplateAreas: `
                        'name email'
                        'message message'
                        'button .'
                    `
                }}
                className="grid grid-cols-2 gap-4 w-full"
              >
                  <input onChange={(e) => setName(e.target.value)} style={{ gridArea: 'name' }} className="w-full border border-themeDarkBlue rounded-md p-2" type="text" placeholder="Name" />
                  <input onChange={(e) => setEmail(e.target.value)} style={{ gridArea: 'email' }} className="w-full border border-themeDarkBlue rounded-md p-2 invalid:border-red-500 invalid:text-red-500 invalid:border-2" type="email" placeholder="Email" />
                  <textarea onChange={(e) => setMessage(e.target.value)} style={{ gridArea: 'message' }} className="w-full h-40 border border-themeDarkBlue rounded-md p-2" placeholder="Message" />
                  <Button
                    onClick={() => {
                      if (name && email && message) {
                        if (type === 'group') {
                          window.location.href = `mailto:contact@example.com?subject=${subject} - ${name} - ${email}&body=${message}`;
                        } else {
                          window.location.href = `mailto:contact@example.com?subject=${subject} - ${name} - ${email}&body=${message}`;
                        }
                        setName('');
                        setEmail('');
                        setMessage('');
                        setMessageSent(true);
                      } else {
                        alert('Please fill in all fields');
                      }
                    }}
                    disabled={messageSent}
                    style={{ gridArea: 'button' }}
                    className="w-fit"
                    variant="primary"
                    type="submit"
                    >
                      Send Email
                    </Button>
              </div>

              <p>Or</p>
              <p className="text-md md:text-xl leading-relaxed">Contact me through <a href={psycologyTodayLink} target="_blank" rel="noopener noreferrer" className="text-themeDarkBlue hover:text-themeDarkBlue/80">Psycology Today</a></p>
            </div>
          </FadeIn>
      </div>
    );
  }