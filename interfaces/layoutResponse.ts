export interface ILayoutResponse {
  header: Header;
  footer: Footer;
  settings: Settings;
}

export interface Footer {
  socialMediaSection: SocialMediaSection;
  blogsSection: SSection;
  servicesSection: SSection;
  contactsSection: ContactsSection;
  newsletterSection: NewsletterSection;
  contactUsForm: ContactUsForm;
  logoUrl: string;
  copyrightText: string;
  seoText: string;
}

export interface SSection {
  title: string;
  items: BlogsSectionItem[];
}

export interface BlogsSectionItem {
  navigateUrl: string;
  text: string;
}

export interface ContactUsForm {
  title: string;
  description: string;
  nameLabel: string;
  mobileNumberLabel: string;
  emailLabel: string;
  messageLabel: string;
  buttonText: string;
}

export interface ContactsSection {
  title: string;
  items: CallUsLink[];
}

export interface CallUsLink {
  navigateUrl: string;
  text: string;
  name: string;
}

export interface NewsletterSection {
  title: string;
}

export interface SocialMediaSection {
  title: string;
  items: SocialMediaSectionItem[];
}

export interface SocialMediaSectionItem {
  name: string;
  icon: string;
  linkUrl: string;
}

export interface Header {
  logoUrl: string;
  callUsLink: CallUsLink;
  signInLink: CallUsLink;
  searchBox: SearchBox;
  menus: Menu[];
  languages: Language[];
  selectedLanguage: SelectedLanguage;
}

export interface Language {
  text: string;
  value: string;
  selected: boolean;
}

export interface Menu {
  title: string;
  linkUrl: string;
  isBlank: boolean;
  children: string[];
}

export interface SearchBox {
  buttonText: string;
  placeholder: string;
}

export interface SelectedLanguage {
  localName: string;
  shortName: string;
  cultureCode: string;
  isRightToLeft: boolean;
}

export interface Settings {
  showNavigationMenu: boolean;
  showCallUs: boolean;
  showLogin: boolean;
  allowMultiLanguages: boolean;
  showPrivacyPolicy: boolean;
  showTermsOfService: boolean;
  showFooterBlogs: boolean;
  showFooterSeoText: boolean;
  showFooterContactForm: boolean;
}
