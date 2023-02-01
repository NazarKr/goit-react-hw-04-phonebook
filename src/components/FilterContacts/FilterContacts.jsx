import React from 'react';
import { Formik, Field, Form } from 'formik';
import { FilterContainer, FilterLabel, FilterField, SearchIcon } from './FilterContact.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange, handleBlur }) => (
    <FilterContainer>
        <Formik>
            <Form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "80%"
                }}>
                <FilterLabel>
                    <SearchIcon />
                    Find contacts by name
                    <Field
                        onBlur={handleBlur}
                        as={FilterField}
                        type="text"
                        placeholder="Search"
                        value={value}
                        onChange={onChange} />
                </FilterLabel>
            </Form>
        </Formik>
    </FilterContainer>
);

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func,
}