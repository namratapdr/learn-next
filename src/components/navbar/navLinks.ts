import {NavigationOption} from "@component/components/navbar/interface/navigation-option";
import {RequestMapperService} from "@component/request-mapper-service";

export class NavigationOptions {

    public static readonly _home: NavigationOption = {
        title: 'Home',
        route: RequestMapperService.BASE_RELATIVE_URL,
        selected: false
    };

    public static readonly _what: NavigationOption = {
        title: 'About',
        route: RequestMapperService.WHAT_IS_THIS_URL,
        selected: false
    };

    public static readonly _who: NavigationOption = {
        title: 'Who For',
        route: RequestMapperService.WHO_FOR_URL,
        selected: false
    };

    public static readonly _contact: NavigationOption = {
        title: 'Contact',
        route: RequestMapperService.CONTACT_US__URL,
        selected: false
    };


    private static readonly _options: NavigationOption[] = [
        NavigationOptions._home,
        NavigationOptions._what,
        NavigationOptions._who,
        NavigationOptions._contact
    ];

    public static get(): NavigationOption[] {
        return NavigationOptions._options;
    }
}
