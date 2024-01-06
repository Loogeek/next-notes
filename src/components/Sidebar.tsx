import { Suspense } from 'react';
import Link from 'next/link';
import SidebarNoteList from './SidebarNoteList';
import EditButton from './EditButton';
import Skeleton from './Skeleton';

export default async function Sidebar() {
  return (
    <section className='col sidebar'>
      <Link href='/'>
        <section className='sidebar-header'>
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className='logo'
              src='/logo.svg'
              width='22px'
              height='20px'
              alt=''
              role='presentation'
            />
          }
          <strong>React Notes</strong>
        </section>
      </Link>
      <section className='sidebar-menu' role='menubar'>
        <EditButton noteId={null}>New</EditButton>
      </section>
      <nav>
        <Suspense fallback={<Skeleton type='noteList' />}>
          <SidebarNoteList />
        </Suspense>
      </nav>
    </section>
  );
}
