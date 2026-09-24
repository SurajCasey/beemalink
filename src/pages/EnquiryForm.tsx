import { useLanguage } from '../i18n/LanguageContext';
import { useState, type FormEvent } from 'react';
import { PiArrowUpRightBold as ArrowUpRight, PiEnvelopeDuotone as Mail } from 'react-icons/pi';
import { needs, products } from './siteData';
export default function EnquiryForm({type='quote',initial='Vehicle'}:{type?:'quote'|'claim'|'renewal';initial?:string}) {
 const { t } = useLanguage();
 const [insurance,setInsurance]=useState(initial);
 const [draftReady,setDraftReady]=useState(false);
 const submit=(event:FormEvent<HTMLFormElement>)=>{
 event.preventDefault();
 const subject=type==='claim'?'Claim assistance request':type==='renewal'?'Renewal support request':'Insurance enquiry';
 const body=Array.from(new FormData(event.currentTarget).entries()).map(([key,value])=>`${t(key)}: ${key === 'Insurance type' || key === 'Contact consent' ? t(value) : value}`).join('\n');
 window.location.href=`mailto:beemalinknepal@gmail.com?subject=${encodeURIComponent(t(subject))}&body=${encodeURIComponent(body)}`;
 setDraftReady(true);
 };
 return (          <form onSubmit={submit} className="enquiry-form"><div className="form-two"><label>{t("Full name")}<input name="Full name" autoComplete="name" required /></label><label>{t("Mobile number")}<input name="Mobile" type="tel" autoComplete="tel" required /></label></div><label>{t("Email ")}<span>{t("(optional)")}</span><input name="Email" type="email" autoComplete="email" /></label><label>{t("Insurance type")}<select name="Insurance type" value={insurance} onChange={e => setInsurance(e.target.value)}>{Array.from(new Set(['Personal', ...needs.map(n => n.name), ...products.map(p => p.name)])).map(name => <option key={name} value={name}>{t(name)}</option>)}</select></label>{(insurance === 'Business' || products.some(p => p.group === 'Business' && p.name === insurance)) && <label>{t("Company name")}<input name="Company" autoComplete="organization" required /></label>}{type !== 'quote' && <div className="form-two"><label>{t("Current insurer")}<input name="Current insurer" required /></label><label>{t(type === 'renewal' ? 'Policy expiry date' : 'Incident date')}<input name={type === 'renewal' ? 'Policy expiry date' : 'Incident date'} type="date" required /></label></div>}<label>{t(type === 'claim' ? 'Brief incident description' : 'What would you like help with?')}<textarea name="Requirement" rows={3} required placeholder={t("A few details are enough to get started.")} /></label><label className="consent"><input type="checkbox" name="Contact consent" value="Agreed" required /><span>{t("I agree to be contacted by Beemalink about this enquiry.")}</span></label><div className="form-note"><Mail size={18} /><p>{t("This opens a draft in your email app. Your request is only sent when you send that email. Please don’t include sensitive documents here.")}</p></div><button className="button" type="submit">{t("Prepare email request ")}<ArrowUpRight size={18} /></button>{draftReady && <p className="draft-status" role="status">{t("Your email draft is ready to open. If no email app appeared, contact ")}<a href="mailto:beemalinknepal@gmail.com">{t("beemalinknepal@gmail.com")}</a>{t(" or call +977 9768567022. Nothing has been submitted through this website.")}</p>}</form>);
}
