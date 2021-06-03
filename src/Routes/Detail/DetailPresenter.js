import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
    result,
    error,
    loading,
}) => 
    null;

SearchPresenter.propTypes = {
   result: PropTypes.object,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired

};

export default SearchPresenter;