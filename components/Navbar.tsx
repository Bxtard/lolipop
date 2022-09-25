import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Image src={'/lolipop.png'} height={40} width={40} alt={'logo'} />
        <span className='navbar-brand'>Lolipop</span>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor02'
          aria-controls='navbarColor02'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarColor02'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <Link href='/'>
                <a className='nav-link'>Home</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/pricing'>
                <a className='nav-link'>Pricing</a>
              </Link>
            </li>
          </ul>
          <div className='d-flex'>
            <button className='btn btn-danger logout' onClick={() => signOut()}>
              logout
            </button>
            <button
              className='profileImage'
              onClick={() => router.push('/profile')}
            >
              <Image
                src={session?.user?.image || ''}
                height={35}
                width={35}
                layout='fixed'
                alt={'logo'}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
