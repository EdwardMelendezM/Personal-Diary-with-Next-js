import Link from 'next/link'
import styles from './Navigator.module.css'
interface LinkCustom{
  label:string;
  route:string
}
const links:Array<LinkCustom> = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Post',
    route: '/post'
  }
]
export default function Navigator () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
};
