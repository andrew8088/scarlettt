import Link from 'next/link';
import Head from '../components/Head';
import withFirebase from '../components/withFirebase';

const Index = ({ user, logout }) => <div>
  <Head />
  <div className='container'>
    <section>
      sidebar
    </section>

    <section>
      {user ?
        <p>{user.email} <button onClick={logout}> Log Out </button></p> : 

        <Link href="/login"><a>Login</a></Link>}
    </section>
  </div>
  <style jsx>{`
    .container {
        display: grid;
        grid-template-columns: 220px 1fr;
        grid-template-rows: 100%;
    }

    .container section {
      padding: 10px;
    }
  `}</style>
</div>;

export default withFirebase(Index)
