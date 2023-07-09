import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import sampleImage1 from './images/sampleImage1.jpg';
import sampleImage2 from './images/sampleImage2.jpg';
import sampleImage3 from './images/sampleImage3.jpg';
import sampleImage4 from './images/sampleImage4.jpg';
import sampleImage5 from './images/sampleImage5.jpg';
import sampleImage6 from './images/sampleImage6.jpg';

const HelpUsFind = () => {
  const lostItems = [
    {
      id: 1,
      title: 'Sample Item 1',
      category: 'Books',
      description: 'This is the description of sample item 1.',
      image: sampleImage1,
    },
    {
      id: 2,
      title: 'Sample Item 2',
      category: 'Cards',
      description: 'This is the description of sample item 2.',
      image: sampleImage2,
    },
    {
      id: 3,
      title: 'Sample Item 3',
      category: 'Electronic Devices',
      description: 'This is the description of sample item 3.',
      image: sampleImage3,
    },
    {
      id: 4,
      title: 'Sample Item 4',
      category: 'Cards',
      description: 'This is the description of sample item 4.',
      image: sampleImage4,
    },
    {
      id: 5,
      title: 'Sample Item 5',
      category: 'Others',
      description: 'This is the description of sample item 5.',
      image: sampleImage5,
    },
    {
      id: 6,
      title: 'Sample Item 6',
      category: 'Electronic Devices',
      description: 'This is the description of sample item 6.',
      image: sampleImage6,
    },
  ];

  return (
    <HelpUsFindContainer>
      <HelpUsFindTitle>Help Us Find</HelpUsFindTitle>
      {lostItems.length > 0 ? (
        <HelpUsFindItems>
          {lostItems.map((item) => (
            <HelpUsFindItem key={item.id}>
              {item.image && <HelpUsFindItemImage src={item.image} alt={item.title} />}
              <HelpUsFindItemTitle>{item.title}</HelpUsFindItemTitle>
              <HelpUsFindItemCategoryBox>{item.category}</HelpUsFindItemCategoryBox>
              <HelpUsFindItemDescription>{item.description}</HelpUsFindItemDescription>
              <ReportButton to={`/report-found/${item.id}`}>REPORT AS FOUND</ReportButton>
            </HelpUsFindItem>
          ))}
        </HelpUsFindItems>
      ) : (
        <p>No lost items found.</p>
      )}
    </HelpUsFindContainer>
  );
};

const HelpUsFindContainer = styled.div`
  padding: 20px;
`;

const HelpUsFindTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const HelpUsFindItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const HelpUsFindItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const HelpUsFindItemImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const HelpUsFindItemTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const HelpUsFindItemCategoryBox = styled.div`
  display: inline-block;
  background-color: #f5f5f5;
  color: #333;
  padding: 3px 8px; /* Adjust the padding values as per your preference */
  font-size: 14px; /* Adjust the font size as per your preference */
  border-radius: 3px; /* Adjust the border radius as per your preference */
  margin-bottom: 10px;
`;




const HelpUsFindItemDescription = styled.p`
  margin-bottom: 10px;
`;

const ReportButton = styled(Link)`
  display: inline-block;
  background-color: #4caf50;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export default HelpUsFind;
