import Post from '../Post';

export default function Article() {


  return (
    <section className='container '>
      <h3>Articles</h3>
      <div className='mt-5 container-posts'>
        <Post subtitle='tecnologia' title='O guia definitivo sobre o blog'>
          1-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Post>
        <Post subtitle='fotografia' title='Quais as melhores câmeras em 2022'>
          2-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Post>
        <Post subtitle='cinema' title='Os 10 filmes com maior bilheteria '>
          3-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Post>
      </div>
    </section>
  );
}

