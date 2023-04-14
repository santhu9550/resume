import openReachProj from "../Logo/openreach.png";
import glokalProj from "../Logo/glokal.png";
import simplyBargainsProj from "../Logo/glokal1.png";
import ProfilePic from "../Logo/santhosh.jpg";
import btGroupJpg from "../Logo/btgroup.jpg";
import btBrandPng from "../Logo/btbrand.png";
import openReachLogo from "../Logo/Openreach.webp";
function calculate_years(intialDate) {
  var diff_ms = Date.now() - intialDate.getTime();
  var age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const profileData = {
  profile: {
    name: "Santhosh Gunda",
    roles: ["WEB DEVELOPER", "MOBILE APP DEVELOPER"],
    photo: ProfilePic,
    age: calculate_years(new Date("1996-10-10")),
    phone: "+919550924668",
    email: "santhugunda7@gmail.com",
    city: "Hyderabad, India",
    cityHref: "https://goo.gl/maps/aKoAEUG1WDiXmndr9",
    itExp: calculate_years(new Date("2019-02-01")),
    nationality: "Indian",
    languages: "English, Telugu, Hindi",
    description: `A full stack developer with extensive experience in the design, development, and deployment of web & mobile applications. Strong background in software engineering principles and a solid understanding of web development technologies. Able to work in fast paced environments and deliver secure and high quality  code under tight deadlines.`,
  },
  skills: [
    { title: "REACTJS", rate: 4.5 },
    { title: "NODEJS", rate: 4.5 },
    { title: "REDUX", rate: 4 },
    { title: "REACTNATIVE", rate: 4 },
    { title: "NEXTJS", rate: 3.5 },
    { title: "JAVASCRIPT", rate: 4 },
    { title: "MONGODB", rate: 3 },
    { title: "AWS", rate: 3 },
    { title: "AUTH 0", rate: 4 },
    { title: "SELENIUM", rate: 4 },
    { title: "PYTHON", rate: 3 },
    { title: "PLSQL", rate: 3 },
    { title: "GIT", rate: 4 },
    { title: "HTML", rate: 4.5 },
    { title: "CSS", rate: 3.5 },
    { title: "JAVA", rate: 3.5 },
    { title: "SQL", rate: 3.5 },
    { title: "ANGULAR", rate: 3 },
  ],
  tools: [
    { title: "VSCODE", rate: 4.5 },
    { title: "POSTMAN", rate: 4.5 },
    { title: "MSOFFICE", rate: 4 },
    { title: "ATOM", rate: 4 },
    { title: "ECLIPSE", rate: 3.5 },
    { title: "GITHUB", rate: 4.5 },
    { title: "BITBUCKET", rate: 3.5 },
    { title: "GITLAB", rate: 4 },
    { title: "JIRA", rate: 3.5 },
    { title: "HYPER", rate: 4 },
    { title: "PUTTY", rate: 4 },
  ],
  carrer: [
    {
      title: "Virtusa Consulting Services",
      desc: "FULL TIME - ENGINEER TECHNOLOGY",
      body: `Here I worked for multiple clients like BRITISH TELECOM, OPENREACH, E&E which are well known network/broadband providers  in the united kingdom. I'm responsible for creating or developing user interfaces , api's according to the requirement. I'm also part of the deployment here. In recognition of my efforts, I got an onsite opportunity (London -united kingdom) and multiple awards (PIRL AWARD, DREAM TEAM AWARD, VCHALLENGE AWARD).`,
      duration: "MAR 2021 - ONGOING",
      location: "HYDERABAD,INDIA",
      type: "company",
    },
    {
      title: "Glokal Private Limited",
      desc: "FULL TIME - FULL STACK WEB DEVELOPER",
      body: `After my graduation, I started working with glokal, Here I worked on an ecommerce project where users can bid higher to get the product. I'm responsible for creating user interfaces, backend api's based on the requirements using technologies like nextjs, reactjs, react-native, mongodb, aws, auth0 etc..`,
      duration: "MAR 2019 - MAR 2021",
      location: "MUMBAI,INDIA",
      type: "company",
    },
    {
      title: "FULL STACK WEB DEVELOPMENT (UDEMY)",
      desc: "ONLINE COURSE",
      body: `Learned the latest technologies, including JavaScript, ReactJS, NodeJS , MongoDB, Express,  Html5, Css3, Bootstrap, MaterialUI etc.. Also created a real time application to store notes.`,
      duration: "FEB 2019 - MAR 2019",
      location: "REMOTE",
      type: "education",
    },
    {
      title: "INSTITUTE OF AERONAUTICAL ENGINEERING",
      desc: "FULL TIME - BTech",
      body: `I completed my graduation with a bachelor of technology degree in civil engineering. Here I learned a few subjects like structural analysis, design of steel structures,Foundation engineering,Hydraulic Engineering,Geotechnical Engineering,Water resources Engineering,Autocad etc..I also learned few programming languages such as c , java etc..`,
      duration: "JUN 2015 - MAR 2019",
      location: "HYDERABAD,INDIA",
      type: "education",
    },
    {
      title: "ALPHORES JUNIOR COLLEGE",
      desc: "FULL TIME - 12'TH STANDARD",
      body: `I Graduated 12th standard with 90 percent from Telangana State Board of Intermediate Education Examination. Here I learnt Maths, Physics, Chemistry. during my time in college I started learning computer language`,
      duration: "JUN 2013 - APR 2015",
      location: "KARIMNAGAR,INDIA",
      type: "education",
    },
    {
      title: "ALPHORES HIGH SCHOOL",
      desc: "FULL TIME - HIGH SCHOOL",
      body: `I Graduated high school with a secondary school certification of 9.3 GPA. Here I enjoyed learning Maths, Science and Biology. I also used to participate in co-extra curricular activities such as football and cricket etc. `,
      duration: "JAN 2002 - MAY 2013",
      location: "KARIMNAGAR,INDIA",
      type: "education",
    },
  ],
  projects: [
    {
      images: [btGroupJpg, btBrandPng],
      title: "BT- NAYAN APPLE DEVICE ENROLMENT",
      desc: `This project is a microservice which interacts with Apple TV Provider using the api's. Client will share the list of apple device Id's on daily/weekly basis. Upon receiving the devices are verified whether they belong to the allowed product or not. Upon successful validation the devices will be assigned to the target profile (Simply called Device Enrolment).`,
      client: "BRITISH TELECOM (BT)",
      tech: ["REACTJS", "NODEJS", "SQL"],
      redirect: {
        url: null,
        tooltip: "Sorry,Private VPN Access Required!",
      },
      code: {
        url: null,
        tooltip: "Sorry,Private",
      },
    },
    {
      images: [openReachProj, openReachLogo],
      title: "IMPERIUM OR",
      desc: `This project is a kind of ETL (EXTRACT, TRANSFORM, LOAD) Tool where end user can create/schedule a migration from source system to target system based on a canvas user interface. Source/Target system may be a File, Database, Queue. Also user can monitor the migration from the user interface and able to trigger a notification mail upon any event such as Error, Success`,
      client: "OPENREACH",
      tech: ["REACTJS", "NODEJS", "SQL", "PYTHON", "KAFKA", "RABBITMQ"],
      redirect: {
        url: null,
        tooltip: "Sorry,Private VPN Access Required!",
      },
      code: {
        url: null,
        tooltip: "Sorry,Private",
      },
    },
    {
      images: [btGroupJpg, btBrandPng],
      title: "BT- OCS MIGRATION",
      desc: `BRITISH TELECOM is well known network/broadband provider in the United Kingdom.
      So the data they deal is so huge, It is very much important to keep the data secure.
      So the data is migrated from one system (Say source ) to another system based (Say Target) based on the validations or requirements from the business.  `,
      client: "BRITISH TELECOM (BT)",
      tech: ["REACTJS", "NODEJS", "SQL"],
      redirect: {
        url: null,
        tooltip: "Sorry,Private VPN Access Required!",
      },
      code: {
        url: null,
        tooltip: "Sorry,Private",
      },
    },
    {
      images: [btGroupJpg, btBrandPng],
      title: "BT MOIOMS-WFMT MIGRATION",
      desc: `BRITISH TELECOM is well known network/broadband provider in the United Kingdom.
      So the data they deal is so huge, It is very much important to keep the data secure.
      So the data is migrated from MOIOMS (Say source ) to WFMT System (Say Target) based on the validations or requirements from the business.  `,
      client: "BRITISH TELECOM (BT)",
      tech: ["REACTJS", "NODEJS", "SQL"],
      redirect: {
        url: null,
        tooltip: "Sorry,Private VPN Access Required!",
      },
      code: {
        url: null,
        tooltip: "Sorry,Private",
      },
    },
    {
      images: [glokalProj],
      title: "CAMPAIGN MANAGEMENT",
      desc: `This project was an advertising application, where a user or company or an organisation can create their campaign. Creating campaign need  single/multiple location or places (Example -Bus stop, Railway station, Malls, Tower etc..) .Client will charged based on the place/location and type of campaign(Ex: Hordings,Banner ) and it's size. `,
      client: "GLOKAL ADVERTISING PVT LTD.",
      tech: [
        "REACTJS",
        "NODEJS",
        "NEXTJS",
        "MONGODB",
        "AUTH0",
        "REACT NATIVE",
        "AWS",
      ],
      redirect: {
        url: null,
        tooltip: "link unavailable",
      },
      code: {
        url: `https://github.com/santhu9550/backend_glokal`,
        tooltip: "Open Code",
      },
    },
    {
      images: [simplyBargainsProj],
      title: "SImply Bargains",
      desc: `SimplyBargains - It's all about saving money. With lots of brands offering deals & offer on their products they promote the same on other coupon providing apps by selling coupon for a nominal cost or giving you cashback on online purchase. This app is currently available on google play store`,
      client: "GLOKAL ADVERTISING",
      tech: ["REACT NATIVE", "NODEJS", "MONGODB", "AWS"],
      redirect: {
        url: `https://play.google.com/store/apps/details?id=com.simplybargains.app&hl=en_IN&gl=US`,
        tooltip: "Open Site",
      },
      code: {
        url: null,
        tooltip: "Sorry, Private",
      },
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/santhosh-gunda-3a157595/",
    github: "https://github.com/santhu9550",
    whatsapp: " https://wa.me/919550924668",
    instagram: "https://www.instagram.com/santhu_gunda/",
    mail: "santhugunda7@gmail.com",
  },
};

export { profileData };
