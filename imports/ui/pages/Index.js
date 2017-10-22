import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Index = () => (
  
    <Jumbotron className="text-center">
      <div className="container-fluid bg-3 text-center">
      <h3>Easy and Fast way to creat your Proyect!</h3>
      <div className="row">
        <div className="col-sm-3">
          <p>Create your own CardWork!</p>
            <img src="/img/create-card-work.jpg" className="img-responsive" />
              </div>
              <div className="col-sm-3">
                <p>Find the perfect person who work with you!</p>
                  <img src="/img/find.jpg" className="img-responsive"  />
              </div>
              <div className="col-sm-3">
                <p>Make a Deal!</p>
                  <img src="/img/make-deal.jpg" className="img-responsive"  />
              </div>
                  <div className="col-sm-3">
                    <p>Creat your Networking!</p>
                      <img src="/img/make-networking.jpg" className="img-responsive" />
                  </div>
              </div>
            </div>
    </Jumbotron>
  
);

export default Index;
