import logosvg from '../../svg/logo.svg'

export default function Header() {
  return (
    <>
      <header className='flex-space-between' >
        <div className='logo'>
          <img src={logosvg} alt=''></img>
        </div>

        <div className='search'>
          <input type='text' name='search' className='input-search'></input>
        </div>

        <ul className='menu'>
          <li className='nav-link'>
            <a href="">Início</a>
          </li>
          <li className='nav-link'>
            <a href="">Noticias</a>
          </li>
          <li className='nav-link'>
            <a href="">Contato</a>
          </li>
        </ul>
      </header>
    </>
  );
}

