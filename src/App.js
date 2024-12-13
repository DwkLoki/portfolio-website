import ProjectItem from './components/ProjectItem';
import ExperienceSection from './components/ExperienceSection';
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";

function App() {
  return (
    <div className="App font-inter">
      <section className='relative h-screen mx-20'>
        <div className='flex flex-col h-full justify-center'>
          <p className="text-4xl text-gray-500 mb-4">
            👋 Hai! Saya john doe ...
          </p>
          <h1 className="text-6xl font-bold w-3/4 leading-[4.5rem]">
            saya mampu mengkonversi desain yang rumit menjadi halaman web yang fungsional
          </h1>
          <div className='my-10'>
            <a href='https://drive.google.com/file/d/16YAMedh2aRPEUuL2xUjxNyMeqOYQb8fn/view?usp=sharing' class="relative font-medium top-0 left-0 bg-yellow-200 py-3 px-10 border-2 border-black rounded-lg transition-all duration-300 before:absolute before:top-0 before:left-0 before:-z-[1] before:h-full before:w-full before:bg-black before:rounded-lg before:transition-all before:content-[''] hover:-top-1 hover:-left-1 before:hover:top-1 before:hover:left-1 before:hover:h-[46px] before:hover:w-[142px] before:duration-300">
              Resume
            </a>
          </div>
        </div>
        <div className='absolute w-4/5 top-0 -right-10'>
          <img src='./images/lampu-sorott.svg' alt='lampu sorot'/>
        </div>
      </section>

      <section className='mx-24 my-16'>
        <div className='flex space-x-5'>
          <div className='text-8xl'>
            💪
          </div>
          <h2 className="text-5xl font-bold w-1/2">
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

      <section className='mx-24 my-44'>
        <div className='flex space-x-5'>
          <div className='text-8xl'>
            🗂️
          </div>
          <h2 className="text-5xl font-bold w-1/3">
            Daftar proyek penting lainnya.
          </h2>
        </div>
        <div className='my-24 text-left'>
          <table className='w-full'>
            <thead>
              <tr>
                <th className='w-1/6 px-8 pt-4 pb-6'>Nama proyek</th>
                <th className='w-2/6 px-8 pt-4 pb-6'>Keterangan</th>
                <th className='w-2/6 px-8 pt-4 pb-6'>Tech stack</th>
                <th className='w-1/6 px-8 pt-4 pb-6'>Link</th>
              </tr>
            </thead>
            <tbody className='divide-y-2'>
              <tr>
                <td className='px-8 pt-4 pb-8'>Indiana</td>
                <td className='px-8 pt-4 pb-8'>dhfjdsh idufisn ifsiufj jfsi fjssd jkdsfkjsdk kfjsdk f kdsfjskd</td>
                <td className='px-8 pt-4 pb-8'>
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
                <td className='px-8 pt-4 pb-8 flex space-x-5 text-xl'>
                  <a href='#' target='_blank' rel='noreferrer noopener'><FiGithub /></a>
                  <a href='#' target='_blank' rel='noreferrer noopener'><FiExternalLink /></a>
                </td>
              </tr>
              <tr>
                <td className='px-8 pt-4 pb-8'>Ohio</td>
                <td className='px-8 pt-4 pb-8'>Columbus</td>
                <td className='px-8 pt-4 pb-8'>Indiana</td>
                <td className='px-8 pt-4 pb-8'>Indianapolis</td>
              </tr>
              <tr>
                <td className='px-8 pt-4 pb-8'>Michigan</td>
                <td className='px-8 pt-4 pb-8'>Detroit</td>
                <td className='px-8 pt-4 pb-8'>Indiana</td>
                <td className='px-8 pt-4 pb-8'>Indianapolis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='relative mx-24 h-screen'>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-8xl my-6'>
            🤝
          </div>
          <h2 className="text-5xl font-bold">
            Hubungi saya.
          </h2>
        </div>
        <p className='text-justify my-8 w-2/3 mx-auto'>
          Meskipun saya masih seorang junior dengan pengalaman terbatas, saya memiliki semangat dan minat yang besar terhadap frontend web development dan tekad untuk terus belajar serta berkembang. Saya sadar bidang ini cepat berubah, karena itu saya berkomitmen untuk terus meningkatkan keterampilan saya.
          <br/><br/>
          Saya memahami bahwa memberikan kesempatan kepada saya mungkin sebuah tantangan, tetapi saya percaya bahwa dengan potensi dan dedikasi saya, saya bisa menjadi junior frontend web developer terbaik yang pernah Anda rekrut.
        </p>
        <ul className='flex space-x-5 my-6 text-2xl justify-center'>
          <li className='bg-yellow-200 p-2 rounded-lg'>
            <a href='http://linkedin.com/in/dwiky-darmawansyah-1221a0200' target='_blank' rel='noreferrer noopener'><FaLinkedinIn /></a>
          </li>
          <li className='bg-yellow-200 p-2 rounded-lg'>
            <a href='mailto:dwiky.darmawansyah@gmail.com' target='_blank' rel='noreferrer noopener'><FiMail /></a>
          </li>
          <li className='bg-yellow-200 p-2 rounded-lg'>
            <a href='http://github.com/DwkLoki' target='_blank' rel='noreferrer noopener'><FiGithub /></a>
          </li>
        </ul>
        <div className='absolute w-1/3 -top-16 -right-6'>
          <img src='./images/pesawat-kertas.svg' alt='pesawat kertas'/>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-2xl font-bold text-center mb-6">My Work Experience</h1>
        <ExperienceSection />
      </div>
    </div>
  );
}

export default App;
