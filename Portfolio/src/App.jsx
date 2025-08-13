import { useEffect } from 'react'
import Photo from './assets/Photo.jpeg'
import pmanager from './assets/pmanager.png'
import Ienhancer from './assets/IEnhancer.png'
import Notesapp from './assets/Notes-app.png'
import spotify from './assets/Spotify.png'

function App() {
  useEffect(() => {
    const aboutIntro = document.querySelector('.about-intro');
    if (aboutIntro) {
      aboutIntro.classList.add('animate-slide-in-left');
    }

    const aboutImg = document.querySelector('.about-img');
    if (aboutImg) {
      aboutImg.classList.add('animate-slide-in-right');
    }
  }, [])



  useEffect(() => {
    const upArrow = document.querySelector('a[href="#navbar"]');
    if (upArrow) {
      upArrow.addEventListener('click', (e) => {
        e.preventDefault();
        const navbar = document.querySelector('#navbar');
        if (navbar) {
          navbar.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }, []);
  
  useEffect(() => {
    const about = document.querySelector('a[href="#about"]');
    if (about) {
      about.addEventListener('click', (e) => {
        e.preventDefault();
        const aboutsec = document.querySelector('#about');
        if (aboutsec) {
          aboutsec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }, []);

  useEffect(() => {
    const projects = document.querySelector('a[href="#projects"]');
    if (projects) {
      projects.addEventListener('click', (e) => {
        e.preventDefault();
        const projectssec = document.querySelector('#projects');
        if (projectssec) {
          projectssec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }, []);

  useEffect(() => {
    const contact = document.querySelector('a[href="#contact"]');
    if (contact) {
      contact.addEventListener('click', (e) => {
        e.preventDefault();
        const contactsec = document.querySelector('#contact');
        if (contactsec) {
          contactsec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }, []);

  return (
    <>
      <div id='navbar' className="NavBar z-50 m-0 w-full md:h-[8vh] sm:py-10 py-5 flex items-center justify-between relative pointer-events-auto">
        <div className="md:w-[30vw] sm:w-[25vw] px-5 sm:px-10 flex items-center justify-start">  
          <a href="https://github.com/Devasheesh2004" target="_blank" rel="noreferrer">
            <svg height="37" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="37" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
              <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
            </svg>
          </a>
        </div>

        <a href='/' className="sm:w-[50vw] opacity-0 sm:text-[150%] sm:opacity-100 p-0 md:w-[40vw] md:text-[200%] font-mono flex items-center justify-center font-extrabold bg-gradient-to-r from-[#FFF200] via-[#FF4500] to-[#FF1E3C] bg-clip-text text-shadow-xs text-transparent">Devasheesh Upreti</a>

        <div className="sm:w-[25vw] md:w-[30vw] flex items-center justify-end">
          <div className="flex gap-2 sm:text-[60%] text-[60%] sm:gap-1 font-mono md:text-[2vh] items-center md:h-[4vh] text-white">
            <a href='#about' className="cursor-pointer hover:text-amber-300 transition-colors duration-200 relative z-20 px-2 py-1 border border-transparent hover:border-amber-300 ">About</a>
            <a href='#projects' className="cursor-pointer hover:text-amber-300 transition-colors duration-200 relative z-20 px-2 py-1 border border-transparent hover:border-amber-300 ">Projects</a>
            <a href='#contact' className="cursor-pointer hover:text-amber-300 transition-colors duration-200 relative z-20 px-2 py-1 border border-transparent hover:border-amber-300 ">Contact</a>
          </div>
        </div>
      </div>
      <div className='w-full bg-black h-[2px]'></div>

      <div className="Content md:mx-[2vw] md:w-[95.24vw] h-auto m-0 sm:mt-0 mt-2">
        <section id='about' className="md:h-[91.6vh] sm:flex-col sm:h-[84vh] m-0 flex md:flex-row items-center flex-col justify-between">
          <div className="about-intro md:h-[80vh] h-[50vh] md:w-[60vw] flex items-center justify-center px-10">
            <p className=" h-[80%] text-shadow-md text-shadow-gray-600 content-center font-mono text-stone-200 md:text-[3vh] text-justify">
              I'm Devasheesh, a fresher full-stack web developer with a passion for crafting seamless and impactful digital solutions. Enthusiastic, ambitious, and committed to continuous learning, I aim to grow my skills while contributing meaningfully to the tech industry. I'm eager to work on real-world projects that challenge my creativity and push the boundaries of what's possible on the web.
            </p>
          </div>
          <div className="about-img h-[50vh] w-[70vw] md:h-[80vh] relative md:w-[45vw] sm:w-[100%] sm:h-[100%] flex items-center justify-center">
            <img className='absolute h-3/4 rounded-md shadow-2xl shadow-gray-800' src={Photo} alt="" />
          </div>
        </section>
        <div className="subContent bg-stone-200 rounded-xl shadow-2xl shadow-indigo-950 flex items-center flex-col">
          <section id='projects' className="flex flex-col items-center w-full gap-6">
            <h2 className='rounded-t-xl w-full md:h-[7vh] flex items-center justify-center font-mono md:text-[5vh] bg-orange-200'>My Projects</h2>
            <div className='md:h-[910px] w-full p-10 flex flex-col gap-5'>
              <div className='flex items-center gap-10'>
                <h3 className='md:text-[4vh] font-mono font-bold'>
                  Password Manager
                </h3>
                <a href="https://password-manager-mongodb-1.onrender.com/" target="_blank" rel="noreferrer">
                  <svg className="feather feather-external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                </a>
              </div>
              <div className='flex sm:flex-row flex-col items-center gap-10 w-full md:h-3/4 justify-center'>
                <div className='md:w-3/4 md:h-full text-center content-center bg-gradient-to-r from-rose-800 via-pink-600 to-amber-500 text-shadow-xs bg-clip-text text-transparent font-mono font-bold md:text-[3vh]'>
                  A full-stack Password Manager built using React + Vite on the frontend and Express.js + Node.js + MongoDB on the backend. The app allows users to securely store and manage their passwords in an intuitive UI. It is deployed on the cloud using Render.
                </div>
                <div className='md:w-3/4 md:h-full text-center content-center '>
                  <img src={pmanager} alt="" />
                </div>
              </div>
            </div>
            <div className='w-full bg-black h-[5px]'></div>

            <div className='md:h-[910px] w-full p-10 flex flex-col gap-5'>
              <div className='flex items-center gap-10'>
                <h3 className='md:text-[4vh] font-mono font-bold'>
                  Image Enhancer
                </h3>
                <a href="https://image-enhancer-krri.onrender.com/" target="_blank" rel="noreferrer">
                  <svg className="feather feather-external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                </a>
              </div>
              <div className='flex sm:flex-row flex-col items-center gap-10 w-full md:h-3/4 justify-center'>
                <div className='md:w-3/4 md:h-full text-center content-center bg-gradient-to-r from-rose-800 via-pink-600 to-amber-500 text-shadow-xs bg-clip-text text-transparent font-mono font-bold md:text-[3vh]'>
                  This is a simple web application that allows users to upload an image, send it to an external API for enhancement, and preview the enhanced version with a download option.
                </div>
                <div className='md:w-3/4 md:h-full text-center content-center '>
                  <img src={Ienhancer} alt="" />
                </div>
              </div>
            </div>
            <div className='w-full bg-black h-[5px]'></div>

            <div className='md:h-[910px] w-full p-10 flex flex-col gap-5'>
              <div className='flex items-center gap-10'>
                <h3 className='md:text-[4vh] font-mono font-bold '>
                  Notes App
                </h3>
                <a href="https://github.com/Devasheesh2004/Notes-App" target="_blank" rel="noreferrer">
                  <svg className="feather feather-external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                </a>
              </div>
              <div className='flex sm:flex-row flex-col items-center gap-10 w-full md:h-3/4 justify-center'>
                <div className='md:w-3/4 md:h-full text-center content-center bg-gradient-to-r from-rose-800 via-pink-600 to-amber-500 text-shadow-xs bg-clip-text text-transparent font-mono font-bold md:text-[3vh]'>
                  A clean and responsive note-taking web app built using: Express.js (backend framework), EJS (templating engine), Tailwind CSS (utility-first styling), Node.js local file system (to store notes).
                  <br />
                  This app lets users create, view, and edit notes — perfect for learning full-stack concepts or building a lightweight local note keeper.
                </div>
                <div className='md:w-3/4 md:h-full text-center content-center '>
                  <img src={Notesapp} alt="" />
                </div>
              </div>
            </div>
            <div className='w-full bg-black h-[5px]'></div>

            <div className='md:h-[910px] w-full p-10 flex flex-col gap-5'>
              <div className='flex items-center gap-10'>
                <h3 className='md:text-[4vh] font-mono font-bold '>
                  Spotify Clone
                </h3>
                <a href="https://github.com/Devasheesh2004/Spotify-Clone" target="_blank" rel="noreferrer">
                  <svg className="feather feather-external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                </a>
              </div>
              <div className='flex sm:flex-row flex-col items-center gap-10 w-full md:h-3/4 justify-center'>
                <div className='md:w-3/4 md:h-full text-center content-center bg-gradient-to-r from-rose-800 via-pink-600 to-amber-500 text-shadow-xs bg-clip-text text-transparent font-mono font-bold md:text-[3vh]'>
                  A web-based music player that mimics Spotify's interface with local music playback functionality.
                  <br />
                  Features : 1) 🎵 Local music playback,
                  2) 🔍 Search functionality, 
                  3) ⏯️ Play/Pause controls, 
                  4) 📊 Seek bar with progress tracking, 
                  5) 🎨 Modern Spotify-like UI.
                </div>
                <div className='md:w-3/4 md:h-full text-center content-center '>
                  <img src={spotify} alt="" />
                </div>
              </div>
            </div>
            <div className='w-full bg-black h-[5px]'></div>

          </section>
          <section id='contact' className="flex flex-col relative items-center w-full gap-6">
            <h2 className='rounded-t-xl w-full md:h-[7vh] flex items-center justify-center font-mono md:text-[5vh] bg-orange-200 rounded-lg'>
              Contact
            </h2>
            <div className='md:h-[910px] w-full p-10 flex justify-center items-center'>
              <div className='md:h-[500px] md:w-3/4 bg-white rounded-md shadow-2xl p-10 font-mono md:text-[3vh] flex sm:flex-row flex-col gap-10 items-center'>
                <p className='md:w-1/2 items-center'>
                  Email - <span className='md:text-[2.3vh]'>devasheesh.upreti@gmail.com</span>
                  <br />
                  Linkedin - <a className='md:text-[2.3vh]' href="https://www.linkedin.com/in/devasheesh-upreti-5b1b82256/" target='_blank' rel="noreferrer">in/devasheesh-upreti-5b1b82256/</a>
                  <br />
                  Phone Number - <span className='md:text-[2.3vh]'>8700732101</span>
                  <br />
                  Address - <span className='md:text-[2.3vh]'>14 B, Anukumpa Apartments, Abhay Khand 4, Indirapuram, GZB</span>
                </p>
                <iframe
                  className='md:h-full md:w-1/2'
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.189914865681!2d77.39034921439317!3d28.639112582435208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6044159d2f5%3A0xf740cc0a6aab6a39!2sAnukampa%20Apartments!5e0!3m2!1sen!2sin!4v1689541558739!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title='Google Maps'
                />
              </div>
            </div>
            <a className="h-[32px] w-[32px] absolute bottom-10 sm:bottom-1 right-10" href="#navbar" aria-label="Scroll to top">
              <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" className="fill-current text-black">
                <title>Scroll to top</title>
                <path d="M82.6074,62.1072,52.6057,26.1052a6.2028,6.2028,0,0,0-9.2114,0L13.3926,62.1072a5.999,5.999,0,1,0,9.2114,7.6879L48,39.3246,73.396,69.7951a5.999,5.999,0,1,0,9.2114-7.6879Z"/>
              </svg>
            </a>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
