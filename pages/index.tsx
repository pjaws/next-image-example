import Image from 'next/image';

import styles from '../styles/images.module.css';
import localPic from '../images/photo-1670969548019-18ec1aae8abe.jpeg';

const fillItems = [
  {
    src: 'https://images.unsplash.com/photo-1671227498016-93aa927686f8',
    alt: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1670969548019-18ec1aae8abe',
    alt: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1671296368370-a24a6f9148cf',
    alt: '',
  },
];

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.fillItems}>
          {fillItems.map((fillItem, index) => (
            <div className={styles.fillItem} key={index}>
              <div className={styles.fillWrapper}>
                <Image
                  src={fillItem.src}
                  alt={fillItem.alt}
                  fill
                  sizes="(min-width: 48em) calc(50vw - 6rem), (min-width: 64em) calc(33vw - 6rem), (min-width: 79em) 375px, calc(100vw - 4rem)"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.intrinsicItem}>
          <Image
            src="https://images.unsplash.com/photo-1670969548019-18ec1aae8abe"
            alt=""
            width={800}
            height={533}
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.intrinsicItem}>
          <Image src={localPic} alt="" />
        </div>
      </div>
    </div>
  );
}
