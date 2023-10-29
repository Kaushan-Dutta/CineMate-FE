import Asset from '../assest';

import Video from '../assets/video.png';
import Create from '../assets/create.png';
import Blog from '../assets/blog.png';
import Price from  "../assets/price.png";

export const SubscribePlans=[
    {
        plan:"Basic",
        apiCredits:100,
        price:20,
        discover:[
            "API Credits","3 downloads per day","Share Video","Community Support"
        ]
    },
    {
        plan:"Premium",
        apiCredits:"Unlimited",
        price:50,
        discover:[
            "API Credits","Chat Support","Unlimited downloads ","Share Video","Mailing Address","Community Support","HD Quality"
        ]
    },
    {
        plan:"Gold",
        apiCredits:"Unlimited",
        price:100,
        discover:[
            "API Credits","Chat Support","Unlimited downloads ","Share Video","Mailing Address","Community Support","Mail Scan and Security","HD Quality","Create Groups"
        ]
    }
];
export const Category=[
    {
        image:Asset.event_category,
        name:"EVENT",
        className:"-translate-y-12 translate-x-28"
    },
    
    {
        image:Asset.sport_category,
        name:"SPORTS",
        className:"-translate-y-12 translate-x-28"

    },
    {
        image:Asset.tech_category,
        name:"TECHNOLOGY",
        className:"-translate-y-12 translate-x-20"

    },
    {
        image:Asset.nature_category,
        name:"NATURE",
        className:"-translate-y-12 translate-x-20"

    },
];
export const Gallery=[
    {
        video:Asset.video1,
        className:"col-span-1 row-span-2"
    },
    {
        video:Asset.video3,
        className:"col-span-2"
    },
    {
        video:Asset.video2,
        className:"col-span-1 row-span-2"
    },
    {
        video:Asset.video4,
        className:"col-span-1"
    },
    {
        video:Asset.video5,
        className:"col-span-1"
    },
    
    
];
export const Section=[
    {
        image:Video,
        title:'Get a live Demo',
        link:`/search`
    },
    {
        image:Price,
        title:'Subscribe for quality',
        link:`/pricing`
    },
    {
        image:Create,
        title:'Create videos',
        link:`/${window.localStorage.token?'user':'testmode'}/create`
    },
    {
        image:Blog,
        title:'Add your blogs',
        link:'/blog'
    }
    
];
export const Filters=[
    {
        label:'Orientation',
        inputs:["Horizontal", "Vertical","Square","Panoramic"]
    },
    {
        label:'License',
        inputs:["Free", "Premium","Gold"]
    },
    {
        label:'Style',
        inputs:["Water Color", "Cartoon","3D","Geometric","Gradient"]
    },
    
];