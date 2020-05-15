import VueRouter from 'vue-router'

const Overview = () => import('./views/Overview');

//Users
const Users = () => import('./views/Users/Index');
const UsersCreate = () => import('./views/Users/Create');
const UsersView = () => import('./views/Users/View');
const UsersUpdate = () => import('./views/Users/Update');

//Intro
const IntroView = () => import('./views/Intro/View');
const IntroCreate = () => import('./views/Intro/Create');
const IntroEdit = () => import('./views/Intro/Edit');

//About
const AboutView = () => import('./views/About/View');
const AboutCreate = () => import('./views/About/Create');
const AboutEdit = () => import('./views/About/Edit');

//Experience
const Experience = () => import('./views/Experience/Index');
const ExperienceView = () => import('./views/Experience/View');
const ExperienceCreate = () => import('./views/Experience/Create');
const ExperienceUpdate = () => import('./views/Experience/Edit');

//Skill
const Skills = () => import('./views/Skills/Index');
// const ExperienceView = () => import('./views/Experience/View');
const SkillCreate = () => import('./views/Skills/Create');
// const ExperienceUpdate = () => import('./views/Experience/Update');

//Projects
const Projects = () => import('./views/Projects/Index');
const ProjectView = () => import('./views/Projects/View');
const ProjectCreate = () => import('./views/Projects/Create');
const ProjectUpdate = () => import('./views/Projects/Edit');

const router = new VueRouter({
    mode: 'history',
    routes: [
        // Users
        { path: '/', name: 'overview', component: Overview },
        { path: '/users', name: 'users.index', component: Users },
        { path: '/users/create', name: 'users.create', component: UsersCreate },
        { path: '/users/:id/view', name: 'users.view', component: UsersView },
        { path: '/users/:id/edit', name: 'users.update', component: UsersUpdate },

        // Intro
        { path: '/intro', name: 'intro.index', component: IntroView },
        { path: '/intro/create', name: 'intro.create', component: IntroCreate },
        { path: '/intro/edit', name: 'intro.edit', component: IntroEdit },

        // About
        { path: '/about', name: 'about.index', component: AboutView },
        { path: '/about/create', name: 'about.create', component: AboutCreate },
        { path: '/about/edit', name: 'about.edit', component: AboutEdit },

         // Experience
        { path: '/experience', name: 'experience.index', component: Experience },
        { path: '/eperience/:id/view', name: 'experience.view', component: ExperienceView },
        { path: '/experience/create', name: 'experience.create', component: ExperienceCreate },
        { path: '/experience/:id/edit', name: 'experience.update', component: ExperienceUpdate },

          // Skill
        { path: '/skills', name: 'skills.index', component: Skills },
        //   { path: '/eperience/:id', name: 'experience.view', component: ExperienceView },
        { path: '/skills/create', name: 'skills.create', component: SkillCreate },
        //   { path: '/experience/:id/edit', name: 'experience.update', component: ExperienceUpdate },

         // Project
        { path: '/projects', name: 'projects.index', component: Projects },
        { path: '/projects/:id/view', name: 'projects.view', component: ProjectView },
        { path: '/projects/create', name: 'projects.create', component: ProjectCreate },
        { path: '/projects/:id/edit', name: 'projects.update', component: ProjectUpdate },
    ]
});

export default router;