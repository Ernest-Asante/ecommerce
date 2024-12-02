import Image from 'next/image';

import * as motion from "framer-motion/client"

// Sample data for the stories
const storiesData = [
  {
    title: "Growing Sustainable Crops",
    description: "We are leading the industry with sustainable farming practices that are changing how the world grows food.",
    image: "https://picsum.photos/800/600?random=6", // Ensure these images exist in your public folder
  },
  {
    title: "Empowering Local Farmers",
    description: "Through our community programs, we are empowering local farmers to increase productivity and improve their livelihoods.",
    image: "https://picsum.photos/800/600?random=7",
  },
  {
    title: "Revolutionizing Agricultural Technology",
    description: "With cutting-edge agricultural technology, we are at the forefront of farming innovation.",
    image: "https://picsum.photos/800/600?random=8",
  },
  {
    title: "Innovating Water Conservation",
    description: "Our water conservation initiatives are reducing waste and enhancing crop yield.",
    image: "https://picsum.photos/800/600?random=9",
  },
  {
    title: "Expanding Food Security",
    description: "Through partnerships, we are working to ensure food security in underserved regions.",
    image: "https://picsum.photos/800/600?random=10",
  },
  {
    title: "Building Community Resilience",
    description: "We are supporting communities to build resilience against climate change.",
    image: "https://picsum.photos/800/600?random=11",
  }
];

// Styles for the page
const pageStyle = {
  padding: '20px',
  textAlign: 'center',
};

// Flex container styles
const storiesContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Wrap to a new line if the screen is too small
    gap: '10px', // Smaller space between cards
    justifyContent: 'space-between', // Space the cards evenly
    marginTop: '20px',
  };
  
  // Card layout: flex row
  const storyCardStyle = {
    flex: '0 1 calc(33% - 10px)', // Each card takes one-third of the row (minus the gap)
    display: 'flex',
    flexDirection: 'row', // Row layout for image and text
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', // Shadow for card
    border: '1px solid rgba(0, 0, 0, 0.2)', // Border to stand out
    textAlign: 'left',
    overflow: 'hidden',
    height:"160px"
  };
  
  // Style for the text container (60% width)
  const textContainerStyle = {
    flex: '0 0 60%', // Takes 60% width of the card
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Align title and description in the middle
    padding: '20px',
  };
  
  // Style for the image container (40% width)
  const imageContainerStyle = {
    flex: '0 0 40%', // Takes 40% width of the card
  };

// Next.js page component
const OurStoriesPage = () => {
  return (
    <div style={pageStyle}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          >
      <h1>Our Stories</h1>
      <h2>How We Are Making News Nowadays</h2>
      </motion.div>
      <div style={storiesContainerStyle}>
        {storiesData.map((story, index) => (
          <motion.div key={index} style={storyCardStyle}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          >
            <div style={textContainerStyle}>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </div>
            <div style={imageContainerStyle}>
              <img
                src={story.image}
                alt={story.title}
                width={120}
                height={160}
               
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurStoriesPage;
