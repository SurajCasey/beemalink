import { useLanguage } from '../i18n/LanguageContext';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { PiPhoneCallDuotone as Phone, PiListBold as Menu, PiXBold as X, PiArrowUpRightBold as ArrowUpRight } from 'react-icons/pi';
import Logo from '../assets/beemalink.svg?react';
import { disclaimer } from './siteData';
import './landing.css';
const links = [['Home','/'],['Personal','/personal'],['Business','/business'],['Agriculture','/agriculture'],['Portfolio','/portfolio'],['Claims','/claims'],['Renewals','/renewals'],['About','/about'],['Contact','/contact']];
function Navigation() {
 const { t, language, setLanguage } = useLanguage();
 const [menu,setMenu] = useState(false);
 const headerRef = useRef<HTMLElement>(null);
 const toggleRef = useRef<HTMLButtonElement>(null);
 useEffect(() => {
   const desktop = window.matchMedia('(min-width: 1201px)');
   const closeOnDesktop = () => { if (desktop.matches) setMenu(false); };
   desktop.addEventListener('change', closeOnDesktop);
   return () => desktop.removeEventListener('change', closeOnDesktop);
 }, []);
 useEffect(() => {
   if (!menu) return;
   const onKeyDown = (event: KeyboardEvent) => {
     if (event.key === 'Escape') { setMenu(false); toggleRef.current?.focus(); }
   };
   const onPointerDown = (event: PointerEvent) => {
     if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMenu(false);
   };
   const onFocusIn = (event: FocusEvent) => {
     if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMenu(false);
   };
   document.addEventListener('keydown', onKeyDown);
   document.addEventListener('pointerdown', onPointerDown);
   document.addEventListener('focusin', onFocusIn);
   return () => {
     document.removeEventListener('keydown', onKeyDown);
     document.removeEventListener('pointerdown', onPointerDown);
     document.removeEventListener('focusin', onFocusIn);
   };
 }, [menu]);
 return <header ref={headerRef} className="site-header"><div className="site-container nav-row"><Link className="brand" to="/" aria-label={t("Beemalink home")}><Logo/></Link><nav className="desktop-nav" aria-label={t("Main navigation")}>{links.map(([label,to])=><NavLink key={to} to={to} end>{t(label)}</NavLink>)}</nav><Link className="button button-small nav-quote" to="/get-a-quote">{t("Get a Quote ")}<ArrowUpRight size={16}/></Link><button className="language-switch" type="button" role="switch" aria-checked={language==='ne'} aria-label="नेपाली भाषा / Nepali language" title={language==='en'?'Switch to Nepali':'अङ्ग्रेजीमा बदल्नुहोस्'} onClick={()=>setLanguage(language==='en'?'ne':'en')}><span className="language-track" aria-hidden="true"><span className="language-thumb"/><span lang="en">EN</span><span lang="ne">नेपाल</span></span></button><button ref={toggleRef} className="menu-toggle" aria-label={t(menu?'Close navigation':'Open navigation')} aria-expanded={menu} aria-controls="mobile-menu" onClick={()=>setMenu(open=>!open)}>{t(menu?<X/>:<Menu/>)}</button></div>{menu&&<nav id="mobile-menu" className="mobile-nav" aria-label={t("Mobile navigation")}>{links.map(([label,to])=><NavLink key={to} to={to} end onClick={()=>setMenu(false)}>{t(label)}<ArrowUpRight size={17}/></NavLink>)}<Link className="button" to="/get-a-quote" onClick={()=>setMenu(false)}>{t('Get a Quote')}<ArrowUpRight size={16}/></Link></nav>}</header>;
}
export default function SiteLayout() {
 const { t } = useLanguage();
 const location=useLocation();
 useEffect(()=>{window.scrollTo(0,0); document.getElementById('main-content')?.focus({preventScroll:true});},[location.pathname]);
 return <div className="beema-site"><a className="skip-link" href="#main-content">{t("Skip to content")}</a><div className="utility-bar"><div className="site-container"><span>{t("Insurance made simple. ")}<span className="utility-location">{t("From Nepal, for Nepal.")}</span></span><a href="tel:+9779768567022"><Phone size={13}/> +977 9768567022 <span className="utility-location"> · 6:00–18:00</span></a></div></div><Navigation key={location.pathname}/><main id="main-content" tabIndex={-1}><Outlet/></main>
      <footer className="site-footer"><div className="site-container"><div className="footer-main"><div className="footer-brand"><Link to="/" aria-label={t("Beemalink home")}><Logo /></Link><p>{t("Insurance made simple.")}</p><p className="footer-description">{t("Helping individuals, families and businesses explore, compare and access insurance solutions in Nepal.")}</p></div><div><h3>{t("Explore")}</h3><Link to="/personal">{t("Personal insurance")}</Link><Link to="/business">{t("Business insurance")}</Link><Link to="/agriculture">{t("Agriculture insurance")}</Link><Link to="/portfolio">{t("Insurance portfolio")}</Link><Link to="/about">{t("About Beemalink")}</Link><Link to="/faq">{t("Frequently asked questions")}</Link></div><div><h3>{t("Here to help")}</h3><Link to="/get-a-quote">{t("Get a Quote")}</Link><Link to="/claims">{t("Claim assistance")}</Link><Link to="/renewals">{t("Renewal support")}</Link><Link to="/disclaimer">{t("Our role & disclaimer")}</Link></div><div><h3><Link to="/contact">{t("Contact Beemalink")}</Link></h3><p>{t("Baneshwor-31, Kathmandu, Nepal")}</p><a href="mailto:beemalinknepal@gmail.com">{t("beemalinknepal@gmail.com")}</a><a href="tel:+9779768567022">+977 9768567022</a><p>{t("Office hours · 6:00–18:00")}</p><div className="social-links"><a href="https://www.facebook.com/profile.php?id=61590563348048" target="_blank" rel="noreferrer" className="social-facebook"><FaFacebookF size={17} aria-hidden="true"/> <span>{t("Facebook")}</span></a><a href="https://www.instagram.com/beemalink.nepal/" target="_blank" rel="noreferrer" className="social-instagram"><FaInstagram size={19} aria-hidden="true"/> <span>{t("Instagram")}</span></a></div></div></div><p className="footer-disclaimer">{t(disclaimer)}</p><div className="footer-bottom"><span>© {new Date().getFullYear()}{t(" Beemalink Nepal. All rights reserved.")}</span><span>{t("Insurance guidance. Ongoing support.")}</span></div></div></footer></div>;
}
