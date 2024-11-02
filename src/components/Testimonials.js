// src/components/Testimonials.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Their expertise in DevOps and AI significantly improved our deployment processes.",
      author: "Jane Smith, CEO of TechCorp"
    },
    {
      id: 2,
      quote: "Ktaylconsult's team delivered exceptional results on our mobile app development project.",
      author: "Mark Johnson, Product Manager at InnovateX"
    },
    {
      id: 3,
      quote: "The automation solutions provided have streamlined our operations and boosted productivity.",
      author: "Sarah Lee, Operations Director at BuildIt"
    },
  ];

  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <Row>
          {testimonials.map(testimonial => (
            <Col md={4} sm={6} xs={12} key={testimonial.id} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column">
                  <Card.Text className="testimonial-quote">
                    “{testimonial.quote}”
                  </Card.Text>
                  <div className="mt-auto">
                    <hr />
                    <Card.Title className="testimonial-author">
                      - {testimonial.author}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Testimonials;
