import LanguageProvider from './i18n/LanguageProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SiteLayout from './pages/SiteLayout';
import { AboutPage, CategoryPage, ContactPage, DisclaimerPage, FaqPage, NotFoundPage, PortfolioPage, ProductPage, QuotePage, SupportPage } from './pages/ContentPages';

export default function App() {
 return <LanguageProvider><BrowserRouter><Routes><Route element={<SiteLayout/>}>
 <Route index element={<LandingPage/>}/>
 <Route path="personal" element={<CategoryPage group="Personal"/>}/>
 <Route path="business" element={<CategoryPage group="Business"/>}/>
 <Route path="agriculture" element={<CategoryPage group="Agriculture"/>}/>
 <Route path="portfolio" element={<PortfolioPage/>}/>
 <Route path="insurance/:slug" element={<ProductPage/>}/>
 <Route path="claims" element={<SupportPage key="claim" type="claim"/>}/>
 <Route path="renewals" element={<SupportPage key="renewal" type="renewal"/>}/>
 <Route path="about" element={<AboutPage/>}/>
 <Route path="contact" element={<ContactPage/>}/>
 <Route path="get-a-quote" element={<QuotePage/>}/>
 <Route path="faq" element={<FaqPage/>}/>
 <Route path="disclaimer" element={<DisclaimerPage/>}/>
 <Route path="*" element={<NotFoundPage/>}/>
 </Route></Routes></BrowserRouter></LanguageProvider>;
}
