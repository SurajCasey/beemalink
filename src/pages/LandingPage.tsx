import { useLanguage } from '../i18n/LanguageContext';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PiArrowDownBold as ArrowDown, PiArrowRightBold as ArrowRight, PiArrowUpRightBold as ArrowUpRight, PiCheckBold as Check, PiClipboardTextDuotone as ClipboardCheck, PiCarProfileDuotone as CarFront, PiHeartbeatDuotone as HeartPulse, PiHouseLineDuotone as House, PiAirplaneTiltDuotone as Plane, PiPlantDuotone as Sprout, PiBuildingsDuotone as Building2, PiShieldCheckDuotone as ShieldCheck, PiPhoneCallDuotone as Phone, PiUsersThreeDuotone as Users, PiPackageDuotone as Package, PiHardHatDuotone as HardHat, PiArrowsClockwiseDuotone as RefreshCw, PiHandshakeDuotone as Handshake, PiChatsCircleDuotone as MessagesSquare, PiMapPinDuotone as MapPin, PiPlusBold as Plus, PiMinusBold as Minus } from 'react-icons/pi';
import heroDesktop from '../assets/hero-desktop.webp';
import heroMobile from '../assets/hero-mobile.webp';
import nepal from '../assets/nepal-community.webp';
import { products, needs, faqs, steps, productPath } from './siteData';
export default function LandingPage() {
 const { t } = useLanguage();
 useEffect(()=>{document.title=t('Beemalink Nepal | Insurance made simple');document.querySelector('meta[name="description"]')?.setAttribute('content',t('Explore personal, business and agriculture insurance in Nepal with Beemalink. Get help with insurance options, quotes, claims and renewals.'));},[t]);
 const navigate=useNavigate();
 const request=(_type:'quote',need='Vehicle')=>navigate('/get-a-quote?type='+encodeURIComponent(need));
 return <>        <section className="home-hero" id="home" aria-labelledby="hero-title">
          <picture className="hero-photo"><source media="(max-width: 639px)" srcSet={heroMobile} /><img src={heroDesktop} alt={t("")} fetchPriority="high" /></picture>
          <div className="site-container hero-inner">
            <div className="hero-copy"><p className="eyebrow"><span className="red-line" />{t(" YOUR INSURANCE. YOUR WAY.")}</p>
              <h1 id="hero-title">{t("Insurance made")}<br /><span>{t("simple.")}</span>{t(" Protection")}<br />{t("made personal.")}</h1>
              <p className="hero-description">{t("Compare, understand and access insurance solutions from trusted insurance providers in Nepal — with support from Beemalink.")}</p>
              <div className="hero-actions"><Link className="button" to="/get-a-quote">{t("Get a Quote ")}<ArrowUpRight size={18} /></Link><a className="text-link" href="tel:+9779768567022">{t("Talk to an Advisor ")}<ArrowUpRight size={17} /></a></div>
              <p className="hero-assurance"><ShieldCheck size={17} />{t(" Your guide to insurance. Here to help you choose.")}</p>
            </div>
            <div className="hero-location"><MapPin size={14} /><span>{t("Built around life in Nepal.")}</span></div>
          </div>
        </section>

        <section className="need-section site-container" aria-labelledby="need-title">
          <div className="need-heading"><div><p className="eyebrow">{t("LET’S START WITH YOU")}</p><h2 id="need-title">{t("What do you want to insure?")}</h2></div><span>{t("Choose a starting point. We’ll help with the rest.")}</span></div>
          <div className="need-grid">{needs.map(({ name, icon: Icon }) => <button key={name} onClick={() => request('quote', name)}><Icon size={27} /><span>{t(name)}</span><ArrowUpRight size={14} className="need-arrow" /></button>)}</div>
        </section>

        <section className="intro-section site-container section-space" id="about">
          <div className="section-label"><span>{t("01 / WHY BEEMALINK")}</span><span lang="ne">तपाईंको विश्वास, हाम्रो साथ।</span></div>
          <div className="intro-grid"><h2>{t("Insurance can be complicated.")}<br /><span className="muted">{t("We make it easier.")}</span></h2><div><p>{t("Beemalink brings the insurance journey together in one place. We help you understand your needs, explore available options and find your next step with confidence.")}</p><p className="small-copy">{t("From arranging your policy to coordinating renewals and claims, you have a team to turn to.")}</p><Link className="text-link" to="/about">{t("Get to know our approach ")}<ArrowDown size={16} /></Link></div></div>
          <div className="promise-row">{['Understand', 'Compare', 'Choose', 'Arrange', 'Support'].map((word, index) => <div key={word}><span>0{index + 1}</span>{t(word)}{index < 4 && <ArrowRight size={16} />}</div>)}</div>
        </section>

        <section className="solutions-section section-space" id="solutions"><div className="site-container">
          <div className="section-label"><span>{t("02 / INSURANCE SOLUTIONS")}</span><span>{t("FOR EVERY PART OF LIFE")}</span></div>
          <div className="section-heading"><h2>{t("Protection for")}<br />{t("what matters.")}</h2><p>{t("For the people you love, the business you’re building, and the livelihoods you depend on.")}</p></div>
          <div className="solution-grid">
            <article className="solution-card personal"><div className="solution-top"><span>01</span><Users size={32} /></div><div><h3>{t("You & your family.")}</h3><p>{t("Protect yourself, your family, vehicle, health and personal assets.")}</p></div><div className="solution-tags">{t("Motor · Health · Travel · Home")}</div><Link to="/personal">{t("Explore personal insurance ")}<ArrowUpRight size={21} /></Link></article>
            <article className="solution-card business"><div className="solution-top"><span>02</span><Building2 size={32} /></div><div><h3>{t("Your business.")}<br />{t("Your hard work.")}</h3><p>{t("Explore protection for your property, people, equipment, cargo and operations.")}</p></div><div className="solution-tags">{t("Property · Marine · Engineering")}</div><Link to="/business">{t("Explore business insurance ")}<ArrowUpRight size={21} /></Link></article>
            <article className="solution-card agriculture"><div className="solution-top"><span>03</span><Sprout size={32} /></div><div><h3>{t("Growing a")}<br />{t("better tomorrow.")}</h3><p>{t("Explore available insurance for eligible crops, livestock and agricultural assets.")}</p></div><div className="solution-tags">{t("Crop · Livestock · Agricultural assets")}</div><Link to="/agriculture">{t("Explore agriculture insurance ")}<ArrowUpRight size={21} /></Link></article>
          </div>
        </div></section>

        <section className="popular-section site-container section-space">
          <div className="section-heading"><div><p className="eyebrow">{t("A FEW PLACES TO BEGIN")}</p><h2>{t("Everyday needs.")}<br />{t("Thoughtful cover.")}</h2></div><Link to="/portfolio" className="text-link">{t("View the insurance portfolio ")}<ArrowUpRight size={17} /></Link></div>
          <div className="popular-grid">{[
            { title: 'Motor insurance', note: 'For the road ahead.', icon: CarFront, product: products[0] },
            { title: 'Health insurance', note: 'For you and your family.', icon: HeartPulse, product: products[2] },
            { title: 'Travel insurance', note: 'For wherever life takes you.', icon: Plane, product: products[3] },
            { title: 'Property insurance', note: 'For the place you call yours.', icon: House, product: products[7] },
            { title: 'Marine & cargo', note: 'For goods on the move.', icon: Package, product: products[9] },
            { title: 'Engineering insurance', note: 'For projects taking shape.', icon: HardHat, product: products[10] },
          ].map(({ title, note, icon: Icon, product }) => <Link className="popular-item" key={title} to={productPath(product)}><Icon size={28} /><div><h3>{t(title)}</h3><p>{t(note)}</p></div><ArrowUpRight size={19} /></Link>)}</div>
          <p className="coverage-note">{t("Coverage, exclusions and premiums vary by insurer and policy. We’ll help you understand the details.")}</p>
        </section>

        <section className="journey-section section-space" id="how-it-works"><div className="site-container">
          <div className="section-label"><span>{t("03 / HOW IT WORKS")}</span><span>{t("A LITTLE CLARITY GOES A LONG WAY")}</span></div>
          <div className="journey-heading"><h2>{t("From “where do I start?”")}<br />{t("to “I understand.”")}</h2><p>{t("Six simple steps.")}<br />{t("A team beside you throughout.")}</p></div>
          <div className="steps-grid">{steps.map(([title, text], index) => <article key={title}><span className="step-number">0{index + 1}</span><h3>{t(title)}</h3><p>{t(text)}</p></article>)}</div>
          <div className="journey-bottom"><span>{t("Start with a conversation, not a commitment.")}</span><a href="tel:+9779768567022" className="text-link">{t("Talk to an Advisor ")}<ArrowUpRight size={18} /></a></div>
        </div></section>

        <section className="local-section site-container section-space">
          <div className="local-image"><img src={nepal} alt={t("AI-generated illustration of a Nepali shop owner and her father reviewing a notebook")} loading="lazy" /><span>{t("UNDERSTANDING YOUR LIFE. SUPPORTING YOUR CHOICES.")}</span></div>
          <div className="local-copy"><p className="eyebrow">{t("WHY CHOOSE BEEMALINK")}</p><h2>{t("Different lives.")}<br />{t("A shared need")}<br />{t("for reassurance.")}</h2><p>{t("Insurance should fit your life. We take the time to understand what matters to you and make the next steps easier to manage.")}</p><div className="benefits">{['Multiple insurance options', 'Personalised assistance', 'Clear information', 'A convenient process', 'Renewal support', 'Claims assistance'].map(text => <span key={text}><Check size={16} />{t(text)}</span>)}</div><div className="network-note"><Handshake size={28} /><div><h3>{t("Our insurance network")}</h3><p>{t("We work with relevant licensed insurance providers to help customers access insurance solutions.")}</p></div></div></div>
        </section>

        <section className="portfolio-section section-space"><div className="site-container section-heading"><div><p className="eyebrow">{t("THE INSURANCE PORTFOLIO")}</p><h2>{t("One place. More possibilities.")}</h2></div><Link className="button" to="/portfolio">{t("Explore all insurance ")}<ArrowUpRight size={18}/></Link></div></section>

        <section className="support-section site-container section-space" id="support"><div className="section-heading"><div><p className="eyebrow">{t("HERE AFTER THE PAPERWORK, TOO")}</p><h2>{t("Support doesn’t stop")}<br />{t("with your policy.")}</h2></div><p>{t("When something changes, something happens, or it’s simply time to renew — let’s work through it together.")}</p></div><div className="support-grid"><article><ClipboardCheck size={30} /><h3>{t("Something gone wrong?")}</h3><p>{t("We help you understand the claims process, prepare documents and coordinate with your insurance provider.")}</p><Link className="text-link" to="/claims">{t("Submit a Claim Request ")}<ArrowUpRight size={18} /></Link></article><article><RefreshCw size={30} /><h3>{t("Keep your protection going.")}</h3><p>{t("Get support with updated information, renewal quotations and the paperwork for your next policy period.")}</p><Link className="text-link" to="/renewals">{t("Request Renewal Support ")}<ArrowUpRight size={18} /></Link></article></div><p className="coverage-note">{t("Claims are assessed and settled by the relevant insurance company according to applicable policy terms, conditions, exclusions and regulations. Beemalink assists with coordination and does not make the insurer’s claim decision.")}</p></section>

        <section className="faq-section site-container section-space" id="faq"><div><p className="eyebrow">{t("GOOD QUESTIONS. CLEAR ANSWERS.")}</p><h2>{t("A little more")}<br />{t("peace of mind.")}</h2><p>{t("Still have something on your mind?")}</p><a href="tel:+9779768567022" className="text-link">{t("Let’s talk ")}<MessagesSquare size={18} /></a></div><div className="faq-list">{faqs.map(([question, answer], i) => <details key={question} open={i === 0 ? true : undefined}><summary>{t(question)}<Plus size={18} className="faq-plus" /><Minus size={18} className="faq-minus" /></summary><p>{t(answer)}</p></details>)}</div></section>

        <section className="final-cta" id="contact"><div className="site-container"><div><p className="eyebrow">{t("LET’S TAKE THE NEXT STEP")}</p><h2>{t("Have an insurance requirement?")}<br /><span>{t("Let’s discuss it.")}</span></h2></div><div className="final-actions"><Link className="button button-white" to="/get-a-quote">{t("Get a Quote ")}<ArrowUpRight size={18} /></Link><a href="tel:+9779768567022"><Phone size={17} /> +977 9768567022</a></div></div></section>
</>;
}
