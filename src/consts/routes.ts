import { Url } from "next/dist/shared/lib/router/router";

interface Route {
    title: string;
    route: Url;
}
export const routes: Route[] = [
    {
        title: 'Home',
        route: '/',
    },
    {
        title: 'My Approach',
        route: '/approach',
    },
    {
        title: 'Services',
        route: '/services',
    },
    {
        title: 'Client Portal',
        route: 'https://chrisitancoltonlpc.sessionshealth.com/',
    },
    {
        title: 'Group Therapy',
        route: '/groups',
    },
    {
        title: 'Contact',
        route: '/contact',
    },
    {
        title: 'Blog',
        route: '/blog',
    },

];