export interface IHomePageResponse {
  slider: FeaturedCategories | null;
  featuredCategories: FeaturedCategories | null;
  featuredBlogs: FeaturedBlogs | null;
  customSections: CustomSections | null;
  searchBox: SearchBox | null;
  contactUsForm: ContactUsForm | null;
  metaTags: MetaTags | null;
  settings: Settings | null;
}

export interface CustomSections {
  title: string;
  items: string[];
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

export interface FeaturedBlogs {
  seeMoreLink: SeeMoreLink;
  items: Item[];
  title: string;
}

export interface Item {
  creationDate?: Date;
  title: string;
  summary: null | string;
  thumbnailImage: string;
  linkUrl: string;
}

export interface SeeMoreLink {
  navigateUrl: string;
  text: string;
}

export interface FeaturedCategories {
  items: Item[];
  title: null | string;
}

export interface MetaTags {
  title: string;
  siteIcon: string;
  metaDescription: string;
  metaKeywords: string;
  metaType: string;
  metaImage: string;
}

export interface SearchBox {
  buttonText: string;
  placeholder: string;
}

export interface Settings {
  enableSearch: boolean;
  showHeroContactForm: boolean;
  showHomePageContactForm: boolean;
  enableSliderAutoPlay: boolean;
  sliderAutoPlayTiming: number;
  allowOtherLanguages: boolean;
}

export interface FeatureBlog {
  id: number;
  titleCMSName: string;
  blogSlug: string;
  creation_Date: Date;
  contentCMSName: string;
  featuredImage: string;
}

export interface ContactUsReq {
  name: string;
  countryCode: string;
  mobile: string;
  email: string;
  message: string;
  fkType: number;
}

export interface IToast {
  msg: string;
  title: string;
  icon: string;
  type: string;
}

export interface IResponse<T> {
  data: T;
  succeeded: boolean;
  errors: any[];
}

export interface IGlobalSettings {
  allowedImageTypes: string[];
  maxPhotoSize: number;
  itemsPerPage: number;
  recaptchaSiteKey: string;
  defaultLanguage: DefaultLanguage;
  enableSearch: boolean;
}

export interface DefaultLanguage {
  localName: string;
  shortName: string;
  cultureCode: string;
  isRightToLeft: boolean;
}
