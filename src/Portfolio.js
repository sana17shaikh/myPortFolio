import aboutpic from "./img/mypic.jpeg"
const header ={
    homepage:'/',
    title: 'SS.'
}
const about = {
    photo: aboutpic,
    name: "SANA SHAIKH",
    role: "FRONTEND DEVELOPER",
    description: "A frontend focused Web Developer building the Frontend of Websites and Web Application that leads to the success of the overall products.",
    resume: "resume",
    social: {
        linkedin: "https://www.linkedin.com/in/sana-shaikh-8a4a89240",
        github: "https://github.com/sana17shaikh"
    }
}

const project = [
    {
        name: "Todo App",
        description: 'This project involves building a to-do list application using React',
        stack:"Html,CSS,JavaScript,ReactJs",
        sourceCode: "https://github.com/sana17shaikh/Todo-List.git",
        livePreview: "https://list-make.netlify.app/",
    },
    {
        name: "Ecommerce App",
        description: 'This project involves building a ecommerce application using React',
        stack:"Html,CSS,JavaScript,ReactJs, Redux",
        sourceCode: "https://github.com/sana17shaikh/E-CommerceSite.git",
        livePreview: "https://ecoshoppy.netlify.app/",
    },
    
]

    const skills = [
        'HTML',
        'CSS',
        'JAVASCRIPT',
        'REACT JS',
        'REDUX',
        'GIT',
        'FIREBASE',
        'BOOTSTRAP',
        'C',
        'C++',
    ]

    const contact = {
        email: 'sshaikh96493@gmail.com',
    }
export {header,about,project,skills,contact}