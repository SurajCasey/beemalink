import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LanguageContext, type Language, type Translate } from './LanguageContext';
import translations from './ne.json';
const dictionary:Record<string,string>=translations;
export default function LanguageProvider({children}:{children:ReactNode}) {
 const [language,setLanguage]=useState<Language>(()=>{
   try { return localStorage.getItem('beemalink-language')==='ne'?'ne':'en'; } catch { return 'en'; }
 });
 useEffect(()=>{
   document.documentElement.lang=language;
   try {localStorage.setItem('beemalink-language',language);} catch { /* Storage may be unavailable in private browsers. */ }
 },[language]);
 const t:Translate=useCallback(<T,>(value:T):T=>{
   if(language==='en'||typeof value!=='string')return value;
   const key=value.trim();
   let result=dictionary[key];
   if(!result&&key.endsWith(' insurance')) {
     const name=key.slice(0,-10);
     if(dictionary[name]) result=`${dictionary[name]} बीमा`;
   }
   return (result?value.replace(key,result):value) as T;
 },[language]);
 const context=useMemo(()=>({language,setLanguage,t}),[language,t]);
 return <LanguageContext.Provider value={context}>{children}</LanguageContext.Provider>;
}
