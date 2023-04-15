export class RequestMapperService {

    public static readonly BASE_RELATIVE_URL: string = '';
    public static readonly ROOT_URL: string = '/';

    public static readonly PRODUCT_URL: string = 'product';
    public static readonly ABOUT_URL: string = 'about';
    public static readonly HOW_TO_GET_IN_URL: string = 'how-to-get-in';
    public static readonly WHO_PLAYS_IT_URL: string = 'who-plays-it';
    public static readonly WHAT_IS_THIS_URL: string = 'what-is-this';
    public static readonly WHO_FOR_URL: string = 'who-for';
    public static readonly COURSES_URL: string = 'courses';
    public static readonly COPY_WRITING_URL: string = 'copy-writing';
    public static readonly VISUAL_COMMUNICATION_URL: string = 'visual-communication';
    public static readonly STRATEGY_PLANNING_URL: string = 'strategy-planning';
    public static readonly DIGITAL_URL: string = 'digital';
    public static readonly FORM_URL: string = 'form';
    public static readonly CONTACT_US__URL: string = 'contact-us';
    public static readonly PRIVACY_POLICY_URL: string = 'legal-information';

    private constructor() { }

    public static getAbsoluteUrl(url: string): string {
        return RequestMapperService.ROOT_URL + url;
    }
}
