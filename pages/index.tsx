import { signIn } from "next-auth/react";


const Home = () => {
  return <main className='h-screen w-full flex items-center justify-center'>
  <div
    onClick={() => 
      signIn('auth0') // hecho para la prueba 
    }
    className='h-[50px] w-[50px] rounded-full bg-[#8CFE68] cursor-pointer'>

  </div>
  </main>;
};

export default Home;
