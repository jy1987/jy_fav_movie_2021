import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
    padding: 0px 10px;`

const TVPresenter = ({airingToday,
    popular,
    topRated,
    error,
    loading}) => 
    
        loading ? <Loader/> : (
            <Container>
                {popular && popular.length >0 && (
                <Section title="Popular" children = {popular.map(tv => tv.name)}></Section>)}

                {airingToday && airingToday.length >0 && (
                <Section title="Airing Today" children = {airingToday.map(tv => tv.name)}></Section>)}

                {topRated && topRated.length >0 && (
                <Section title="topRated" children = {topRated.map(tv => tv.name)}></Section>)}

            </Container>
        )
    

TVPresenter.propTypes = {
    airingToday: PropTypes.array,
popular: PropTypes.array,
topRated: PropTypes.array,
error: PropTypes.string,
loading: PropTypes.bool.isRequired
};

export default TVPresenter;

