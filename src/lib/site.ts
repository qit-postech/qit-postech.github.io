import info from '../data/site.json';
export type Lang = 'en' | 'ko';
export const sections = ['home','research','people','publications','news','join','contact'];
export const labels = { en: ['Home','Research','People','Publications','News','Join Us','Contact'], ko: ['홈','연구','구성원','논문','소식','연구실 참여','연락처'] };
export const review = import.meta.env.PUBLICATION_MODE !== 'public';
export const asset = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
export const url = (lang: Lang, section = 'home') => asset(`${lang}/${section === 'home' ? '' : section+'/'}`);
export const t = (lang: Lang, en: string, ko: string) => lang === 'ko' ? ko : en;
export { info };
