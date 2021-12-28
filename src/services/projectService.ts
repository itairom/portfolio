
export interface Project {
    title: string,
    description: string,
    techs: string[],
    links: {
        github: string,
        url: string
    },
    date?: string
}

export const projects: Project[] = [
    {
        title: 'PetME',
        description: 'Petme is pet adoption app for explore and find your next life companion',
        techs: ['React', 'Javascript', 'Redux', 'Node.js', 'Socket.io', 'MongoDb'],
        links: {
            github: 'https://github.com/itairom/pet_me',
            url: 'https://petme21.herokuapp.com/#/'

        },
        date: '7.7.21'

    },
    {
        title: 'Sprinttify',
        description: 'Music Streaming platform for listening to your favorite music genres',
        techs: ['React Hooks', 'Redux Toolkit', 'Javascript', 'Audio API'],
        links: {
            github: 'https://github.com/itairom/Sprinttify',
            url: 'https://sprinttify.netlify.app/#/home'

        },
        date: '7.7.21'

    },
    {
        title: 'Trees Survey',
        description: 'Tool for Agronomist for Making a trees survey in the field and getting final survey.',
        techs: ['React Hooks', 'Redux Toolkit', 'Javascript', 'Sheet.js', 'BeutifulDnd', 'Node.js', 'MongoDb'],
        links: {
            github: 'https://github.com/itairom/trees',
            url: 'https://trees-survey.herokuapp.com/#/'

        },
        date: '7.7.21'

    },
    {
        title: 'Crypto',
        description: 'Crypto Tracker for your next investment ',
        techs: ['Angular', 'Typescript', 'chart.js'],
        links: {
            github: 'https://github.com/itairom/crypto',
            url: 'https://sprinttcrypto.netlify.app/#/home'

        },
        date: '7.7.21'

    },
    {
        title: 'Portfolio',
        description: 'Itai new portfolio!',
        techs: ['React Hooks', 'Typescript', 'Scss'],
        links: {
            github: 'https://github.com/itairom/portfolio',
            url: 'https://itairom.netlify.app/'
        },
        date: '7.7.21'

    },

]

// export module projectService {
//     projects
// }