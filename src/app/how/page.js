import Image from 'next/image';
import * as motion from "framer-motion/client"

// Sample data for the cards
const cardsData = [
  {
    title: "Sustainable Farming",
    description: "We employ sustainable farming practices to ensure a greener, healthier planet.",
    image: "/images/s1.jpeg", // Ensure these images exist in your public folder
  },
  {
    title: "Innovative Techniques",
    description: "Utilizing modern techniques to improve crop yield and quality.",
    image: "/images/s5.jpeg",
  },
  {
    title: "Community support",
    description: "We support local farmers and communities to improve their livelihood.",
    image: "/images/s4.jpeg",
  }, 
];

// Styles for the page
const pageStyle = {
  padding: '20px',
  textAlign: 'center',
  marginTop:"20px"
};

// Styles for the card container
const cardsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
  gap: '20px', 
  width:"100%",
  height:"360px",
  flex:"1"// Space between the cards
};

// Styles for individual card
const cardStyle = {
  flex: '1',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', // Shadow around the card
  border: '1px solid rgba(0, 0, 0, 0.1)', // Border that stands out
  textAlign: 'center',
};

const imageStyle = {
  borderRadius: '10px',
  marginBottom: '20px',
};

// Next.js page component
const NourishPage = () => {
  return (
    <div style={pageStyle}>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
           
            transition={{ duration: 1 }} 


          
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
           
            >
      <h1>How We Are Working To Nourish The World</h1>
      </motion.div>
      <div style={cardsContainerStyle}>
        {cardsData.map((card, index) => (
          <motion.div key={index} style={cardStyle} 
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          >
            <Image
              src={card.image}
              alt={card.title}
              //layout="fill" // This makes the image fill the container
              //objectFit="cover"
              width={280}
              height={180}
              style={imageStyle}
            />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NourishPage;
