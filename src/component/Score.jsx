import React from 'react'
import { styled } from 'styled-components'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Score = ({ rating }) => {

    return (
        <Container>

            <CircularProgressbar value={rating} maxValue={1} text={`${rating * 100}%`} />;


        </Container>
    )
}

export default Score


const Container = styled.div`
    



`
