import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, Spinner } from 'react-bootstrap';

const BASE_URL = 'https://fullstackassignment1-ew61.onrender.com';
const fallbackImage = "https://via.placeholder.com/400x200?text=No+Image";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://fullstackassignment1-ew61.onrender.com/project/api')
      .then((res) => {
        console.log('Fetched Projects:', res.data);
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Row className="g-4">
            {projects.map((project) => (
              <Col md={4} key={project._id}>
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={`${BASE_URL}${project.imageUrl || ''}` || fallbackImage} 
                    alt={project.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <p><strong>Tech:</strong> {project.technology.join(', ')}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Live Demo
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </section>
  );
};

export default Projects;
