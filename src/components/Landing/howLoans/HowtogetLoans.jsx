import styles from './style.module.scss';
import { motion, useScroll, useTransform } from "framer-motion";

export function Howtogetloans() {
  return (
    <div className={styles.container}>
      <motion.div
        className="relative text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative inline-block">
        
          <h2 className="text-2xl md:text-5xl font-normal text-[#6D3078]">
            How to Get Loans?
          </h2>
         
        </div>
      </motion.div>

      <div className={styles.grid}>
        {projects.map((item, idx) => (
          <a key={idx} href={item.link} className={styles.card} target="_blank" rel="noopener noreferrer">
            <div className={styles.cardContent}>

              {/* Index Number Added Here */}
              <div className={styles.indexNumber}>
                {String(idx + 1).padStart(2, '0')}
              </div>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Apply for Loan",
    description: "Start by filling out the form below or visiting your nearest branch. Our expert loan managers are ready to guide you.",
    link: "#",
  },
  {
    title: "KYC & Due Diligence",
    description: "Complete the necessary documentation for compliance and review. We make the verification process simple and transparent.",
    link: "#",
  },
  {
    title: "Application Review",
    description: "Your application undergoes a seamless review process with minimal formalities, ensuring a quick and hassle-free approval.",
    link: "#",
  },
   {
    title: "Get Funding Fast",
    description: "Experience rapid funding with our streamlined process. Get the loan amount credited to your account the same day it's approved.",
    link: "#",
  }
];