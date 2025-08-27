import { useState, useEffect, useRef } from "react";
import ProjectItem from './components/ProjectItem';
import ExperienceSection from './components/ExperienceSection';
import Navbar from './components/Navbar';
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 } // Elemen dianggap terlihat jika 10% masuk viewport
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return [ref, isVisible];
};

function App() {
  const [isLoad, setIsLoad] = useState(false);
  const [section2Ref, section2Visible] = useScrollAnimation();
  const [section3Ref, section3Visible] = useScrollAnimation();
  const [section4Ref, section4Visible] = useScrollAnimation();
  const [section5Ref, section5Visible] = useScrollAnimation();
  const [section6Ref, section6Visible] = useScrollAnimation();
  
  useEffect(() => {
    // Setelah komponen dimuat, atur isLoad menjadi true untuk memulai animasi fade-in
    setIsLoad(true);
    console.log(`${window.scrollY} = useeffect app1`);
  }, []);

  return (
    <div className="App font-inter">
      <Navbar />
      <section className='relative h-screen xl:mx-20 lg:mx-12 sm:mx-10 mx-5'>
        <div className='flex flex-col lg:pt-40 pt-32'>
          <p className={`lg:text-4xl text-gray-500 lg:mb-4 md:text-3xl sm:text-xl text-lg transition-all duration-1000 ease-out transform delay-[1400ms] ${isLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            👋 Hai! Saya Dwiky Darmawansyah ...
          </p>
          <h1 className={`lg:text-6xl font-bold xl:w-3/4 lg:leading-[4.5rem] lg:w-[90%] md:leading-[3.5rem] text-5xl leading-[3rem] transition-all duration-1000 ease-out transform delay-[1600ms] ${isLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            saya mampu mengkonversi desain yang rumit menjadi halaman web yang fungsional
          </h1>
          <div className={`my-10 transition-all duration-1000 ease-out transform delay-[1800ms] ${isLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            <a href='https://drive.google.com/file/d/1NZiGpsa5nPQZ-TbAC6Q8_EbbQKmYF29L/view?usp=sharing' class="relative font-medium top-0 left-0 bg-yellow-200 py-3 px-10 border-2 border-black rounded-lg transition-all duration-300 before:absolute before:top-0 before:left-0 before:-z-[1] before:h-full before:w-full before:bg-black before:rounded-lg before:transition-all before:content-[''] hover:-top-1 hover:-left-1 before:hover:top-1 before:hover:left-1 before:hover:h-[46px] before:hover:w-[142px] before:duration-300">
              Resume
            </a>
          </div>
        </div>
        <div className={`absolute w-4/5 top-0 -right-10 z-20 hidden xl:block pointer-events-none transition-all duration-1000 ease-out transform delay-[2000ms] ${isLoad ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <img src='./images/lampu-sorott.svg' alt='lampu sorot'/>
        </div>
      </section>

      <section ref={section2Ref} id='story' className='xl:mx-24 xl:mt-10 pt-16 mt-16 lg:mt-40 lg:mx-12 sm:mx-10 mx-5'>
        <div className={`flex items-center space-x-5 transition-all duration-1000 ease-out transform delay-500 ${section2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <div className='md:text-8xl text-6xl'>
            😎
          </div>
          <h2 className="md:text-5xl font-bold w-fit text-3xl">
            Tentang saya.
          </h2>
        </div>
        <div className={`lg:mt-16 flex lg:flex-row mt-10 flex-col transition-all duration-1000 ease-out transform delay-1000 ${section2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <div className='flex flex-col space-y-3 lg:w-2/3 text-justify w-full'>
            <p>
              Hai! Nama saya Dwiky. Saya merupakan lulusan
                <span className='relative group'> 
                  <span> </span>
                  <span className='text-sky-500 underline'>Teknik Informatika</span>
                  <span> </span>
                  <img
                    src="./images/wisuda.jpg"
                    alt="gambar terhover"
                    className="absolute left-20 -top-40 invisible group-hover:visible opacity-0 group-hover:opacity-100 transform transition-all duration-300"
                  />
                </span>
              dan saat ini fokus di bidang frontend web development. 
              Saya memiliki minat mendalam terhadap web development dan sangat menikmati hal-hal seperti menciptakan sesuatu yg berguna di internet atau mengimplementasikan desain UI/UX menjadi web yang fungsional.
            </p>
            <p>Setelah lulus pada Desember 2023, saya merasa kemampuan saya sebagai frontend developer masih belum siap untuk industri. Karena itu, saya memutuskan untuk memperkuat skill terlebih dahulu. Di tengah proses belajar, saya mendapat tawaran untuk bekerja sebagai staf gudang di Telkomsel Warehouse (melalui Kantor Pos) selama satu tahun. Walaupun peran ini berada di luar bidang teknologi, pengalaman tersebut membantu saya mengembangkan disiplin kerja profesional dan manajemen waktu, sambil tetap melanjutkan pembelajaran dan mengerjakan proyek sampingan di waktu luang.</p>
            <p>Sejak Februari 2025, setelah kontrak kerja selesai, saya sepenuhnya fokus mengembangkan karier sebagai frontend web developer dengan membangun berbagai proyek, memperkuat portofolio, dan mempelajari teknologi modern agar selalu relevan dengan kebutuhan industri.</p>
            {/* <p>
              Sejauh ini, saya belum pernah memiliki pengalaman kerja full time sebagai Frontend Web Developer. Walau begitu, saya <span className='bg-sky-200'>memiliki pengalaman praktik</span> melalui proyek pribadi, kampus dan bootcamp serta <span className='bg-sky-200'>pernah bekerja secara part-time</span> semasa kuliah. 
              Karena itu saya memiliki pengetahuan yang mumpuni dalam membangun web modern.
            </p>
            <p>
              Fokus saya saat ini adalah berusaha tetap update terhadap perkembangan di bidang frontend web development, baik dari sisi pengetahuan maupun keterampilan teknis serta <span className='bg-sky-200'>mencari kesempatan untuk berkontribusi pada transformasi digital dan perkembangan perusahaan.</span>
            </p> */}
            <p>
              Berikut beberapa teknologi yang saya gunakan baru-baru ini:
            </p>
            <div className="flex space-x-8">
                <ul>
                    <li className='relative text-justify pl-8 mb-3 before:absolute before:content-["‣"] before:left-0 before:-top-2 before:text-3xl before:text-sky-500'>JavaScript (ES6+)</li>
                    <li className='relative text-justify pl-8 mb-3 before:absolute before:content-["‣"] before:left-0 before:-top-2 before:text-3xl before:text-sky-500'>TypeScript</li>
                    <li className='relative text-justify pl-8 mb-3 before:absolute before:content-["‣"] before:left-0 before:-top-2 before:text-3xl before:text-sky-500'>React</li>
                    <li className='relative text-justify pl-8 mb-3 before:absolute before:content-["‣"] before:left-0 before:-top-2 before:text-3xl before:text-sky-500'>NextJS</li>
                </ul>
                <ul>
                    <li className='relative text-justify pl-8 mb-3 before:absolute before:content-["‣"] before:left-0 before:-top-2 before:text-3xl before:text-sky-500'>TailwindCSS</li>
                    <li className='relative text-justify pl-8 mb-3 before:absolute before:content-["‣"] before:left-0 before:-top-2 before:text-3xl before:text-sky-500'>WordPress</li>
                    <li className='relative text-justify pl-8 mb-3 before:absolute before:content-["‣"] before:left-0 before:-top-2 before:text-3xl before:text-sky-500'>Vite</li>
                </ul>
            </div>
          </div>
          <div className='lg:w-1/3 md:w-2/5 w-2/3 mx-auto'>
            <img src='./images/foto-profil.png' alt='foto profil'/>
          </div>
        </div>
      </section>

      <section ref={section4Ref} id='project' className='xl:mx-24 lg:pt-16 my-20 lg:mx-12 sm:mx-10 pt-10 mx-5'>
        <div className={`flex space-x-5 items-center transition-all duration-1000 ease-out transform delay-500 ${section4Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <div className='md:text-8xl text-6xl'>
            💪
          </div>
          <h2 className="md:text-5xl font-bold lg:w-1/2 text-3xl">
            Berkontribusi dalam beberapa proyek.
          </h2>
        </div>
        <ProjectItem 
          projectItem = {{
            title : 'Betewe',
            subTitle : 'Proyek Pribadi',
            desc : 'BETEWE adalah platform diskusi online yang dirancang khusus untuk mahasiswa S1. Di sini, mahasiswa bisa saling bertanya, berbagi jawaban, dan berdiskusi layaknya forum akademik modern. BETEWE hadir untuk membantu mahasiswa menemukan solusi dari permasalahan kuliah, mengasah kemampuan berpikir kritis, sekaligus membangun komunitas belajar yang kolaboratif.',
            techStack : 'React, TailwindCSS, Axios, React Router, React Lucide, Lexical, Node.js, Express.js, PostgreSQL, Sequelize, JWT, Bcrypt, Multer',
            link : {
              github : 'https://github.com/DwkLoki/betewe',
              preview : 'https://betewe.vercel.app'
            },
            image : 'mockup-project4.png',
            animation : section4Visible
          }}
        />
        <ProjectItem 
          projectItem = {{
            title : 'Sistem Penjadwalan Perkuliahan Universitas Handayani Makassar',
            subTitle : 'Proyek Pribadi',
            desc : 'Sistem ini hadir untuk mengatasi berbagai permasalahan penjadwalan perkuliahan pada Universitas Handayani Makassar yang masih dilakukan secara manual. Jadwal yang dihasilkan dengan cara manual, memerlukan waktu kurang lebih 3 hari dan memungkinkan terjadinya kesalahan dengan intensitas yang cukup banyak',
            techStack : 'Typescript, React, TailwindCSS, Reactstrap, React Router, Redux',
            link : {
              github : 'https://github.com/DwkLoki/penjadwalan-perkuliahan-uhm-v2-using-typescript',
              preview : 'https://penjadwalan-perkuliahan-uhm-v2.vercel.app'
            },
            image : 'mockup-project3.png',
            animation : section4Visible
          }}
        />
        <ProjectItem 
          projectItem = {{
            title : 'JALIN',
            subTitle : 'Final Project SYNRGY Academy Batch 2',
            desc : 'Mengusung tema “Gamification in Banking: How Banks Make Their Apps Engaging”. Dalam proyek ini, saya berperan sebagai frontend developer. JALIN adalah aplikasi perbankan dengan fitur gamifikasi.',
            techStack : 'React, SASS, Reactstrap, Bootstrap, React Router, Redux, Echarts',
            reward : [
              <span className='relative group'> 
                <span className='text-black'>Reward: 🏆 </span>
                <span className='text-sky-500 underline'>Tim Terbaik</span>
                <img
                  src="./images/reward-synrgy.png"
                  alt="gambar terhover"
                  className="absolute left-20 -top-40 invisible group-hover:visible opacity-0 group-hover:opacity-100 transform transition-all duration-300"
                />
              </span>
            ],
            link : {
              gitlab : 'https://gitlab.com/binarxsynrgy-2_mainbootcamp/finalprojectsynrgy/team-c/frontend',
              preview : 'https://bankjalin.vercel.app'
            },
            image : 'mockup-project1.png',
            animation : section4Visible
          }}
        />
        <ProjectItem 
          projectItem = {{
            title : 'DO.IT',
            subTitle : 'Final Project SIB Dicoding X Kampus Merdeka Batch 2',
            desc : 'Web App productivity untuk mengelola goals dan kegiatan harian. Proyek ini menggabungkan beberapa fitur dari berbagai aplikasi productivity sejenis, seperti fitur membuat goals, daily todo list, focus timer, daily report, dan daily motivation.',
            techStack : 'HTML, CSS, Javascript, Bootstrap, Webpack, SASS',
            link : {
              github : 'https://github.com/DwkLoki/doit-SibCapstoneProject',
              preview : 'http://doit-sib-project.web.app'
            },
            image : 'mockup-project2.png',
            animation : section4Visible
          }}
        />
      </section>

      <section ref={section5Ref} className='xl:mx-24 lg:pt-16 lg:mx-12 sm:mx-10 pt-10 mx-5'>
        <div className={`flex items-center space-x-5 transition-all duration-1000 ease-out transform delay-500 ${section5Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <div className='md:text-8xl text-6xl'>
            🗂️
          </div>
          <h2 className="md:text-5xl font-bold xl:w-1/3 lg:w-2/4 md:w-2/3 text-3xl">
            Daftar proyek penting lainnya.
          </h2>
        </div>
        <div className={`md:my-24 text-left my-10 transition-all duration-1000 ease-out transform delay-1000 ${section5Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <table className='w-full'>
            <thead>
              <tr>
                <th className='md:w-1/6 md:px-8 md:pt-4 md:pb-6 w-4/6 px-5 pt-2 pb-3'>Nama proyek</th>
                <th className='md:w-2/6 md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>Keterangan</th>
                <th className='md:w-2/6 md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>Tech stack</th>
                <th className='md:w-1/6 md:px-8 md:pt-4 md:pb-6 w-2/6 px-5 pt-2 pb-3'>Link</th>
              </tr>
            </thead>
            <tbody className='divide-y-2'>
                <tr>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3'>Just For Fun Projects</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>Kumpulan proyek kecil yang dibuat secara mandiri di waktu luang. Sebagian besar bersifat eksperimental, menyenangkan, dan menjadi wadah untuk menjelajahi berbagai tools, library, atau ide-ide acak.</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>
                  <ul className='flex flex-wrap text-xs'>
                    <li className='after:content-["‣"] after:mx-2'>TypeScript</li>
                    <li className='after:content-["‣"] after:mx-2'>React</li>
                    <li className='after:content-["‣"] after:mx-2'>TailwindCSS</li>
                    <li className='after:content-["‣"] after:mx-2'>React Lucide</li>
                    <li className='after:content-["‣"] after:mx-2'>React Router</li>
                    <li className='after:content-["‣"] after:mx-2'>React Confetti</li>
                    <li className='after:content-["‣"] after:mx-2'>Html2Canvas</li>
                    <li>Vercel</li>
                  </ul>
                </td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 text-xl'>
                  <div className="flex space-x-5">
                    <a className='hover:text-sky-500' href='https://github.com/DwkLoki/just-for-fun-projects' target='_blank' rel='noreferrer noopener'><FiGithub /></a>
                    <a className='hover:text-sky-500' href='https://just-for-fun-projects.vercel.app' target='_blank' rel='noreferrer noopener'><FiExternalLink /></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3'>Info Covid</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>cari tahu semua tentang covid termasuk pantau statistik covid di wilayah indonesia</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>
                  <ul className='flex flex-wrap text-xs'>
                    <li className='after:content-["‣"] after:mx-2'>Javascript</li>
                    <li className='after:content-["‣"] after:mx-2'>React</li>
                    <li className='after:content-["‣"] after:mx-2'>React icons</li>
                    <li>Vercel</li>
                  </ul>
                </td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 text-xl'>
                  <div className="flex space-x-5">
                    <a className='hover:text-sky-500' href='https://github.com/DwkLoki/covid-info-app' target='_blank' rel='noreferrer noopener'><FiGithub /></a>
                    <a className='hover:text-sky-500' href='https://infocovidapp.vercel.app' target='_blank' rel='noreferrer noopener'><FiExternalLink /></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3'>Bookshelf app</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>Aplikasi untuk menyimpan daftar buku dan menandai yang sudah dibaca</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>
                  <ul className='flex flex-wrap text-xs'>
                    <li className='after:content-["‣"] after:mx-2'>Javascript</li>
                    <li className='after:content-["‣"] after:mx-2'>Vercel</li>
                    <li>Browser local storage</li>
                  </ul>
                </td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 text-xl'>
                  <div className="flex space-x-5">
                    <a className='hover:text-sky-500' href='https://github.com/DwkLoki/bookshelfApp' target='_blank' rel='noreferrer noopener'><FiGithub /></a>
                    <a className='hover:text-sky-500' href='https://bookshelf-app-zeta.vercel.app' target='_blank' rel='noreferrer noopener'><FiExternalLink /></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3'>Kelurahan Berua</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>Web profil kelurahan berua</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>
                  <ul className='flex flex-wrap text-xs'>
                    <li className='after:content-["‣"] after:mx-2'>Javascript</li>
                    <li className='after:content-["‣"] after:mx-2'>React</li>
                    <li>Vercel</li>
                  </ul>
                </td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 text-xl'>
                  <div className="flex space-x-5">
                    <a className='hover:text-sky-500' href='https://github.com/DwkLoki/profil-kelurahan-berua' target='_blank' rel='noreferrer noopener'><FiGithub /></a>
                    <a className='hover:text-sky-500' href='https://kelurahanberua.vercel.app' target='_blank' rel='noreferrer noopener'><FiExternalLink /></a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section ref={section3Ref} id='experience' className='xl:mx-24 lg:pt-16 my-20 lg:mx-12 sm:mx-10 pt-10 mx-5'>
        <div className={`flex items-center space-x-5 transition-all duration-1000 ease-out transform delay-500 ${section3Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <div className='md:text-8xl text-6xl'>
            ✨
          </div>
          <h2 className="md:text-5xl font-bold w-1/2 text-3xl">
            Pengalaman kerja.
          </h2>
        </div>
        <div className={`md:mt-24 lg:px-16 md:px-10 sm:px-10 px-2 mt-10 transition-all duration-1000 ease-out transform delay-1000 ${section3Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <ExperienceSection />
        </div>
      </section>

      <section ref={section6Ref} id='contact' className='relative xl:mx-24 py-16 lg:mt-40 lg:mx-12 sm:mx-10 mt-20 mx-5'>
        <div className={`flex flex-col justify-center items-center transition-all duration-1000 ease-out transform delay-500 ${section6Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <div className='md:text-8xl my-6 text-6xl'>
            🤝
          </div>
          <h2 className="md:text-5xl font-bold text-3xl">
            Hubungi saya.
          </h2>
        </div>
        <p className={`text-justify my-8 md:w-2/3 md:mx-auto transition-all duration-1000 ease-out transform delay-1000 ${section6Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          Meskipun saya masih seorang junior dengan pengalaman terbatas, saya memiliki semangat dan minat yang besar terhadap frontend web development dan tekad untuk terus belajar serta berkembang.
          <br/><br/>
          Saya memahami bahwa memberikan kesempatan kepada saya mungkin sebuah tantangan bagi anda, tetapi saya percaya bahwa dengan potensi dan dedikasi saya, serta komitmen untuk terus meningkatkan keterampilan saya. saya bisa menjadi junior frontend web developer yang bisa anda andalkan.
        </p>
        <ul className={`flex space-x-5 my-6 text-2xl justify-center transition-all duration-1000 ease-out transform delay-[1500ms] ${section6Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <li className='cursor-pointer bg-yellow-200 p-2 rounded-lg relative top-0 left-0 border-2 border-black transition-all duration-300 before:absolute before:top-0 before:left-0 before:-z-[1] before:h-full before:w-full before:bg-black before:rounded-lg before:transition-all before:content-[""] hover:-top-1 hover:-left-1 before:hover:top-1 before:hover:left-1 before:hover:h-[42px] before:hover:w-[42px] before:duration-300'>
            <a href='http://linkedin.com/in/dwikydarmawansyah' target='_blank' rel='noreferrer noopener'><FaLinkedinIn /></a>
          </li>
          <li className='cursor-pointer bg-yellow-200 p-2 rounded-lg relative top-0 left-0 border-2 border-black transition-all duration-300 before:absolute before:top-0 before:left-0 before:-z-[1] before:h-full before:w-full before:bg-black before:rounded-lg before:transition-all before:content-[""] hover:-top-1 hover:-left-1 before:hover:top-1 before:hover:left-1 before:hover:h-[42px] before:hover:w-[42px] before:duration-300'>
            <a href='mailto:dwiky.darmawansyah@gmail.com' target='_blank' rel='noreferrer noopener'><FiMail /></a>
          </li>
          <li className='cursor-pointer bg-yellow-200 p-2 rounded-lg relative top-0 left-0 border-2 border-black transition-all duration-300 before:absolute before:top-0 before:left-0 before:-z-[1] before:h-full before:w-full before:bg-black before:rounded-lg before:transition-all before:content-[""] hover:-top-1 hover:-left-1 before:hover:top-1 before:hover:left-1 before:hover:h-[42px] before:hover:w-[42px] before:duration-300'>
            <a href='http://github.com/DwkLoki' target='_blank' rel='noreferrer noopener'><FiGithub /></a>
          </li>
        </ul>
        <div className={`absolute lg:w-1/3 lg:-top-3 lg:-right-6 sm:top-4 sm:-right-6 sm:w-2/5 sm:block hidden transition-all duration-1000 ease-out transform delay-[1600ms] ${section6Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 translate-x-16"}`}>
          <img src='./images/pesawat-kertas.svg' alt='pesawat kertas'/>
        </div>
      </section>
    </div>
  );
}

export default App;
