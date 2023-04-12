import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=118a264c89874b5889a1e38e60b518cd&number=9`
    )
    const data = await api.json()
    setPopular(data.recipes)
    }

    return (
      <div>
        <Container>
        <h3>Popular Picks</h3>
        <Wrapper>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            gap: '1rem',
            breakpoints: {
              600: {
              },
            },
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <img src={recipe.image} alt={recipe.title} />
                  <p>{recipe.title}</p>
                  <p>{recipe.readyInMinutes} minutes</p>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
        </Container>
      </div>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  `;


const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 1rem;
justify-items: center;
`
const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 3rem 1rem;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: auto;
}
img {
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 5px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
p {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
`


export default Popular
