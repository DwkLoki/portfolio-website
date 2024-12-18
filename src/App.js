import ProjectItem from './components/ProjectItem';
import ExperienceSection from './components/ExperienceSection';
import Navbar from './components/Navbar';
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

function App() {
  return (
    <div className="App font-inter">
      {/* <Navbar /> */}
      <section className='relative h-screen xl:mx-20 lg:mx-12 sm:mx-10 mx-5'>
        <div className='flex flex-col pt-40'>
          <p className="lg:text-4xl text-gray-500 lg:mb-4 md:text-3xl sm:text-xl text-lg">
            👋 Hai! Saya Dwiky Darmawansyah ...
          </p>
          <h1 className="lg:text-6xl font-bold xl:w-3/4 lg:leading-[4.5rem] lg:w-[90%] md:text-5xl md:leading-[3.5rem] text-4xl leading-[2.75rem]">
            saya mampu mengkonversi desain yang rumit menjadi halaman web yang fungsional
          </h1>
          <div className='my-10'>
            <a href='https://drive.google.com/file/d/16YAMedh2aRPEUuL2xUjxNyMeqOYQb8fn/view?usp=sharing' class="relative font-medium top-0 left-0 bg-yellow-200 py-3 px-10 border-2 border-black rounded-lg transition-all duration-300 before:absolute before:top-0 before:left-0 before:-z-[1] before:h-full before:w-full before:bg-black before:rounded-lg before:transition-all before:content-[''] hover:-top-1 hover:-left-1 before:hover:top-1 before:hover:left-1 before:hover:h-[46px] before:hover:w-[142px] before:duration-300">
              Resume
            </a>
          </div>
        </div>
        <div className='absolute w-4/5 top-0 -right-10 hidden xl:block'>
          <img src='./images/lampu-sorott.svg' alt='lampu sorot'/>
        </div>
      </section>

      <section id='story' className='xl:mx-24 pt-16 mt-56 lg:mt-0 lg:mx-12 sm:mx-10 mx-5'>
        <div className='flex items-center space-x-5'>
          <div className='md:text-8xl text-6xl'>
            😎
          </div>
          <h2 className="md:text-5xl font-bold w-fit text-3xl">
            Tentang saya.
          </h2>
        </div>
        <div className="lg:mt-16 flex lg:flex-row mt-10 flex-col">
          <div className='flex flex-col space-y-3 lg:w-2/3 text-justify w-full'>
            <p>
              Hai! Nama saya Dwiky. Saya merupakan lulusan teknik informatika dan saat ini fokus di bidang frontend web development. 
              Saya memiliki minat mendalam terhadap web development dan sangat menikmati hal-hal seperti menciptakan sesuatu yg berguna di internet atau mengimplementasikan desain UI/UX menjadi web yang fungsional.
            </p>
            <p>
              Sejauh ini, saya belum pernah memiliki pengalaman kerja full time. Walau begitu, saya cukup beruntung semasa kuliah saya pernah bekerja secara part-time serta memiliki pengalaman praktik melalui proyek pribadi, kampus dan bootcamp. 
              Karena itu saya memiliki pengetahuan yang mumpuni dalam membangun web modern.
            </p>
            <p>
              Fokus saya saat ini adalah berusaha tetap update terhadap perkembangan di bidang frontend web development, baik dari sisi pengetahuan maupun keterampilan teknis.
            </p>
            <p>
              Berikut beberapa teknologi yang saya gunakan baru-baru ini:
            </p>
            <ul className=''>
              <li className='relative text-justify pl-8 mb-3 before:absolute before:content-["‣"] before:left-0 before:-top-2 before:text-3xl before:text-sky-500'>JavaScript (ES6+)</li>
              <li className='relative text-justify pl-8 mb-3 before:absolute before:content-["‣"] before:left-0 before:-top-2 before:text-3xl before:text-sky-500'>React</li>
              <li className='relative text-justify pl-8 mb-3 before:absolute before:content-["‣"] before:left-0 before:-top-2 before:text-3xl before:text-sky-500'>Tailwind</li>
              <li className='relative text-justify pl-8 mb-3 before:absolute before:content-["‣"] before:left-0 before:-top-2 before:text-3xl before:text-sky-500'>WordPress</li>
            </ul>
          </div>
          <div className='lg:w-1/3 md:w-2/5 w-2/3 mx-auto'>
            <img src='./images/foto-profil.png' alt='foto profil'/>
          </div>
        </div>
      </section>

      <section id='experience' className='xl:mx-24 lg:pt-16 my-20 lg:mx-12 sm:mx-10 pt-10 mx-5'>
        <div className='flex items-center space-x-5'>
          <div className='md:text-8xl text-6xl'>
            ✨
          </div>
          <h2 className="md:text-5xl font-bold w-1/2 text-3xl">
            Pengalaman kerja.
          </h2>
        </div>
        <div className="md:mt-24 lg:px-16 md:px-10 sm:px-10 px-2 mt-10">
          <ExperienceSection />
        </div>
      </section>

      <section id='project' className='xl:mx-24 lg:pt-16 my-20 lg:mx-12 sm:mx-10 pt-10 mx-5'>
        <div className='flex space-x-5 items-center'>
          <div className='md:text-8xl text-6xl'>
            💪
          </div>
          <h2 className="md:text-5xl font-bold lg:w-1/2 text-3xl">
            Berkontribusi dalam beberapa proyek.
          </h2>
        </div>
        <ProjectItem 
          projectItem = {{
            title : 'JALIN',
            subTitle : 'Final Project SYNRGY Academy Batch 2',
            desc : 'Mengusung tema “Gamification in Banking: How Banks Make Their Apps Engaging”. Dalam proyek ini, saya berperan sebagai frontend developer. JALIN adalah aplikasi perbankan dengan fitur gamifikasi.',
            techStack : 'ReactJS, SASS, Reactstrap, Bootstrap, React Router, Redux, Echarts',
            link : {
              gitlab : 'https://gitlab.com/binarxsynrgy-2_mainbootcamp/finalprojectsynrgy/team-c/frontend',
              preview : 'https://bankjalin.vercel.app'
            },
            image : 'mockup-project1.png'
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
            image : 'mockup-project2.png'
          }}
        />
        <ProjectItem 
          projectItem = {{
            title : 'Sistem Penjadwalan Perkuliahan Universitas Handayani Makassar',
            subTitle : 'Proyek Kampus',
            desc : 'Sistem ini hadir untuk mengatasi berbagai permasalahan penjadwalan perkuliahan pada Universitas Handayani Makassar yang masih dilakukan secara manual. Jadwal yang dihasilkan dengan cara manual, memerlukan waktu kurang lebih 3 hari dan memungkinkan terjadinya kesalahan dengan intensitas yang cukup banyak',
            techStack : 'HTML, CSS, Javascript, Bootstrap, JQuery',
            link : {
              github : 'https://github.com/DwkLoki/jadwal-uhm-pso',
              preview : 'http://sistem-penjadwalan-uhm.vercel.app'
            },
            image : 'mockup-project3.png'
          }}
        />
      </section>

      <section className='xl:mx-24 lg:pt-16 lg:mx-12 sm:mx-10 pt-10 mx-5'>
        <div className='flex items-center space-x-5'>
          <div className='md:text-8xl text-6xl'>
            🗂️
          </div>
          <h2 className="md:text-5xl font-bold xl:w-1/3 lg:w-2/4 md:w-2/3 text-3xl">
            Daftar proyek penting lainnya.
          </h2>
        </div>
        <div className='md:my-24 text-left my-10'>
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
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3'>Indiana</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>dhfjdsh idufisn ifsiufj jfsi fjssd jkdsfkjsdk kfjsdk f kdsfjskd</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>
                  <ul className='flex flex-wrap text-xs'>
                    <li className='after:content-["‣"] after:mx-2'>HTML</li>
                    <li className='after:content-["‣"] after:mx-2'>CSS</li>
                    <li className='after:content-["‣"] after:mx-2'>Javascript</li>
                    <li className='after:content-["‣"] after:mx-2'>React</li>
                    <li className='after:content-["‣"] after:mx-2'>Jquery</li>
                    <li className='after:content-["‣"] after:mx-2'>Jquery</li>
                    <li className='after:content-["‣"] after:mx-2'>Jquery</li>
                    <li>Jquery</li>
                  </ul>
                </td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 flex space-x-5 text-xl'>
                  <a className='hover:text-sky-500' href='#' target='_blank' rel='noreferrer noopener'><FiGithub /></a>
                  <a className='hover:text-sky-500' href='#' target='_blank' rel='noreferrer noopener'><FiExternalLink /></a>
                </td>
              </tr>
              <tr>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3'>Ohio</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>Columbus</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>Indiana</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3'>Indianapolis</td>
              </tr>
              <tr>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3'>Michigan</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>Detroit</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3 md:table-cell hidden'>Indiana</td>
                <td className='md:px-8 md:pt-4 md:pb-6 px-5 pt-2 pb-3'>Indianapolis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id='contact' className='relative xl:mx-24 py-16 lg:mt-40 lg:mx-12 sm:mx-10 mt-20 mx-5'>
        <div className='flex flex-col justify-center items-center'>
          <div className='md:text-8xl my-6 text-6xl'>
            🤝
          </div>
          <h2 className="md:text-5xl font-bold text-3xl">
            Hubungi saya.
          </h2>
        </div>
        <p className='text-justify my-8 md:w-2/3 md:mx-auto'>
          Meskipun saya masih seorang junior dengan pengalaman terbatas, saya memiliki semangat dan minat yang besar terhadap frontend web development dan tekad untuk terus belajar serta berkembang.
          <br/><br/>
          Saya memahami bahwa memberikan kesempatan kepada saya mungkin sebuah tantangan bagi anda, tetapi saya percaya bahwa dengan potensi dan dedikasi saya, serta komitmen untuk terus meningkatkan keterampilan saya. saya bisa menjadi junior frontend web developer yang bisa anda andalkan.
        </p>
        <ul className='flex space-x-5 my-6 text-2xl justify-center'>
          <li className='cursor-pointer bg-yellow-200 p-2 rounded-lg relative top-0 left-0 border-2 border-black transition-all duration-300 before:absolute before:top-0 before:left-0 before:-z-[1] before:h-full before:w-full before:bg-black before:rounded-lg before:transition-all before:content-[""] hover:-top-1 hover:-left-1 before:hover:top-1 before:hover:left-1 before:hover:h-[42px] before:hover:w-[42px] before:duration-300'>
            <a href='http://linkedin.com/in/dwiky-darmawansyah-1221a0200' target='_blank' rel='noreferrer noopener'><FaLinkedinIn /></a>
          </li>
          <li className='cursor-pointer bg-yellow-200 p-2 rounded-lg relative top-0 left-0 border-2 border-black transition-all duration-300 before:absolute before:top-0 before:left-0 before:-z-[1] before:h-full before:w-full before:bg-black before:rounded-lg before:transition-all before:content-[""] hover:-top-1 hover:-left-1 before:hover:top-1 before:hover:left-1 before:hover:h-[42px] before:hover:w-[42px] before:duration-300'>
            <a href='mailto:dwiky.darmawansyah@gmail.com' target='_blank' rel='noreferrer noopener'><FiMail /></a>
          </li>
          <li className='cursor-pointer bg-yellow-200 p-2 rounded-lg relative top-0 left-0 border-2 border-black transition-all duration-300 before:absolute before:top-0 before:left-0 before:-z-[1] before:h-full before:w-full before:bg-black before:rounded-lg before:transition-all before:content-[""] hover:-top-1 hover:-left-1 before:hover:top-1 before:hover:left-1 before:hover:h-[42px] before:hover:w-[42px] before:duration-300'>
            <a href='http://github.com/DwkLoki' target='_blank' rel='noreferrer noopener'><FiGithub /></a>
          </li>
        </ul>
        <div className='absolute lg:w-1/3 lg:-top-3 lg:-right-6 sm:top-4 sm:-right-6 sm:w-2/5 sm:block hidden'>
          <img src='./images/pesawat-kertas.svg' alt='pesawat kertas'/>
        </div>
      </section>
    </div>
  );
}

export default App;
