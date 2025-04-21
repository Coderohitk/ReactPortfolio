import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner, Card, Row, Col } from 'react-bootstrap';

const fallbackSkills = [
  { _id: '1', name: 'React', category: 'Frontend', proficiency: 'Advanced' },
  { _id: '2', name: 'Node.js', category: 'Backend', proficiency: 'Intermediate' },
  { _id: '3', name: 'MongoDB', category: 'Database', proficiency: 'Intermediate' },
  { _id: '4', name: 'Bootstrap', category: 'Frontend', proficiency: 'Advanced' },
];

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fullstackassignment1-ew61.onrender.com/skill/api') // ✅ full working API URL
      .then(res => {
        if (res.data && res.data.length > 0) {
            console.log('Fetched Skills:', res.data);
            setSkills(res.data);
        } else {
          setSkills(fallbackSkills);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching skills:', err);
        setSkills(fallbackSkills);
        setLoading(false);
      });
  }, []);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="secondary" />
          </div>
        ) : (
          Object.entries(groupedSkills).map(([category, skillsInCategory]) => (
            <div key={category} className="mb-4">
              <h4 className="text-primary mb-3">{category}</h4>
              <Row className="g-3">
                {skillsInCategory.map(skill => (
                  <Col md={4} sm={6} key={skill._id}>
                    <Card className="h-100 shadow-sm">
                      <Card.Body>
                        <Card.Title>{skill.name}</Card.Title>
                        <Card.Text>Proficiency: {skill.proficiency}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Skills;
