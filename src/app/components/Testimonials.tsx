import React from 'react';
import styles from '../styles/Testimonials.module.css';

function Testimonials() {
  return (
    <div className={styles.testCont}>
      <div className={styles.left}>
        <h2>TESTIMONIALS</h2>
        <p>
          What people say <br /> about our blog
        </p>
        <div className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quisquam. Eius possimus non earum velit, ut porro voluptas obcaecati nisi in architecto impedit sunt cum veritatis optio, dolorem eligendi dolores.
          Sed ex, molestias qui necessitatibus perferendis voluptates dicta praesentium! Officia blanditiis harum, praesentium sed ad est, at velit illo voluptatem consequuntur iusto officiis assumenda similique quis incidunt quod corrupti nostrum.
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.para1}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vitae, quidem id velit repellat dicta voluptatibus fugiat quae dolores commodi atque facere ullam veniam hic. Possimus sint sed at accusamus!
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.about}>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Testimonial Author"
              className={styles.profileImg}
            />
            <p className={styles.name}>
              John Doe <br />
              New York <br />
              USA
            </p>

          <div className={styles.buttons}>
            <button className={styles.arrowBtn}>←</button>
            <button className={styles.arrowBtn}>→</button>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Testimonials;
