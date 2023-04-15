import {NavigationOption} from "@component/components/navbar/interface/navigation-option";
import {RequestMapperService} from "@component/request-mapper-service";

export class NavigationOptions {

    public static readonly _what: NavigationOption = {
        title: 'What is this',
        route: RequestMapperService.WHAT_IS_THIS_URL,
        selected: false
    };

    public static readonly _who: NavigationOption = {
        title: 'Who For',
        route: RequestMapperService.WHO_FOR_URL,
        selected: false
    };

    public static readonly _courses: NavigationOption = {
        title: 'Courses',
        route: RequestMapperService.COURSES_URL,
        selected: false
    };

    public static readonly _play: NavigationOption = {
        title: 'Who plays it',
        route: RequestMapperService.WHO_PLAYS_IT_URL,
        selected: false
    };

    public static readonly _how: NavigationOption = {
        title: 'How to get in',
        route: RequestMapperService.HOW_TO_GET_IN_URL,
        selected: false
    };

    public static readonly _blog: NavigationOption = {
        title: 'theblogcircle',
        route: RequestMapperService.BASE_RELATIVE_URL,
        selected: false
    };

    public static readonly _contact: NavigationOption = {
        title: 'Contact',
        route: RequestMapperService.CONTACT_US__URL,
        selected: false
    };


    private static readonly _options: NavigationOption[] = [
        NavigationOptions._what,
        NavigationOptions._who,
        NavigationOptions._courses,
        NavigationOptions._play,
        NavigationOptions._how,
        NavigationOptions._blog,
        NavigationOptions._contact
    ];

    public static get(): NavigationOption[] {
        return NavigationOptions._options;
    }
}
