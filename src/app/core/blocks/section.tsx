'use client';

import styles from '../styles/TransportSolutions.module.css'

export default function TransportServices() {
  const services = [
    {
      title: 'Full Truckload (FTL)',
      description: 'Direct delivery with a dedicated truck and driver, ideal for large shipments.',
      image: '/FTL.jpg'
    },
    {
      title: 'Medical Equipment',
      description: 'Time-critical and temperature-controlled deliveries for healthcare and hospitals.',
      image: 'medical.jpg'
    },
    {
      title: 'Local Courier Deliveries',
      description: 'Same-day solutions for documents and small parcels.',
      image: 'local.jpg'
    },
    {
      title: 'Less-Than-Truckload (LTL)',
      description: 'Reliable and cost-efficient transport for smaller shipments.',
      image: 'LTL.jpg'
    },
    {
      title: 'Casino & Gaming Equipment',
      description: 'Secure, high-value freight handling with dedicated tracking.',
      image: 'casino.jpg',
    },
    {
      title: 'Door-to-Door Delivery',
      description: 'Convenient and reliable pickup and drop-off service anywhere in the U.S. and Canada.',
      image: 'door.jpg'
    },
    {
      title: 'Cross-Border Shipping',
      description: 'Seamless movement between the U.S. and Canada with customs support.',
      image: 'Border.jpg'
    },
    {
      title: 'Trade Shows & Events',
      description: 'On-time setup and breakdown deliveries for exhibitions and conventions.',
      image: 'trad.jpg'
    },
    {
      title: 'White Glove Service',
      description: 'Premium handling for fragile, high-value, or specialized freight.',
      image: 'glove.jpg'
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Transport Solutions That Work for You</h2>
          <p className={styles.subtitle}>
            No matter the load — we deliver safely, on time, and with full visibility.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={service.image}
                  alt={service.title}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
