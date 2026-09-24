import { createContext, useContext } from 'react';
export type Language = 'en' | 'ne';
export type Translate = <T>(value:T)=>T;
export const LanguageContext=createContext<{language:Language;setLanguage:(value:Language)=>void;t:Translate}>({language:'en',setLanguage:()=>{},t:value=>value});
export const useLanguage=()=>useContext(LanguageContext);
