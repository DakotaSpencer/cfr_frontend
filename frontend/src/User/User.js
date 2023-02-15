import React, { useEffect } from 'react'
import userdata from '../userdummydata.json'
import './user.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moviedata from '../moviedummydata.json'
import MoviesList from '../MoviesList/MoviesList';
import reviews from "../../src/reviewdummydata.json"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Review from '../Components/Reivew/Review'

const User = () => {
  useEffect(()=>{
    console.log(moviedata)
  });

  return (
    <div className='pagediv'>
      <Container>
        <Row>
          <Col>
            <div className='col-4 userBio text-center rounded'>
              <div className='detail-block'>
                <h2>User Information</h2>
              </div>
              <div className='detail-block'>
                <img src={process.env.PUBLIC_URL + '/Images/picture.png'} style={{width:'100px'}} className='rounded'/>
                
                  <p style={{fontSize:'18px'}} className='m-2'>{userdata[0].username}</p>
                </div>
              <div className='detail-block'>

                <p> <LocationOnIcon/>{userdata[0].location}</p>
              </div>

              <div className='detail-block'>
                <p>{userdata[0].bio}</p>
              </div>
            </div>
            <div className='col-4 userButton text-center rounded'>
              <button>Edit User Information</button>
            </div>
            
          </Col>
          <Col xs={6}>
            <div className='reviewSection'>
              {reviews.map(review => (
                <Review review={review} />
              ))}
            </div>
            
          </Col>
          <Col xs={3}>
            <MoviesList moviedata={moviedata.results}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default User