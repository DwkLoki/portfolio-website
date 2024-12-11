import lampuSorot from './images/lampu-sorott.svg'

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
            <a href='https://drive.google.com/file/d/16YAMedh2aRPEUuL2xUjxNyMeqOYQb8fn/view?usp=sharing' class="relative top-0 left-0 bg-yellow-200 py-3 px-10 border-2 border-black rounded-lg transition-all before:absolute before:top-0 before:left-0 before:-z-[1] before:h-full before:w-full before:bg-black before:rounded-lg before:transition-all before:content-[''] hover:-top-1 hover:-left-1 before:hover:top-1 before:hover:left-1 before:hover:h-[46px] before:hover:w-[142px]">
              Resume
            </a>
          </div>
        </div>
        <div className='absolute w-4/5 top-0 -right-10'>
          <img src={lampuSorot} alt='lampu sorot'/>
        </div>
      </section>
    </div>
  );
}

export default App;
