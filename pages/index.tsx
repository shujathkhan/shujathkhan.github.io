import Head from 'next/head';
import styles from 'styles/home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faGithub, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";
import { faCode } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faGithub, faLinkedin, faStackOverflow, faCode, faFacebook, faTwitter);

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Shujath Khan</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <main className={styles.container}>
        <div className={styles.photoContainer}>
          <img src="https://user-images.githubusercontent.com/13440061/116815045-5fb4a980-ab79-11eb-9965-396d5e9a4b93.jpg" className={styles.photo}/>
        
        </div>
          
        <div className={styles.content} >
          <strong className={styles.introduction}>I'm Shujath Khan</strong>
          <article className={styles.about}>
            Full stack developer with over 3+ years of experience in developing web and mobile apps, with a keen interest in Software engineering, Webgl, Blockchain and Extended reality (XR). Currently working as a Full stack engineer (Frontend heavy) @<a href="https://ey.com" target="_blank" rel="noopener noreferrer" className={styles.links}>EY</a>.
          </article>
          <div className={styles.socialsConatainer}>
            <a href="https://facebook.com/shujath.live" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "facebook"]} className={styles.icon} /></a>
            <a href="https://twitter.com/khan_shujath" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "twitter"]} className={styles.icon} /></a>
            <a href="https://linkedin.com/in/shujath-khan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "linkedin"]} className={styles.icon} /></a>
            <a href="https://github.com/shujathkhan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "github"]} className={styles.icon} /></a>
            <a href="https://stackoverflow.com/story/shujath" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "stack-overflow"]} className={styles.icon} /></a>
            <a href="https://profile.codersrank.io/user/shujathkhan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={["fas", "code"]} className={styles.icon} /></a>
            
          </div>
          <div className={styles.warning}>
            <u>Note</u>: This portfolio is still under construction.
          </div>  
        </div>
 
      </main>

    </div>
  )
}
