import React, { useState, useEffect } from 'react';
import { Form, InputGroup, Button, Row } from 'react-bootstrap'

const initialState = { forecasts: [], loading: true, selectedCity: null };
const formInitialValues = {}
const Calculate = () => {
  const [state, setState] = useState(initialState);
  const { forecasts, loading, selectedCity } = state;
  const [formData, setFormData] = useState({
    cityId: null,
    extra: [],
    area: 0
  })
  const [price, setPrice] = useState(0);
  useEffect(() => {
    fetch('api/')
      .then(response => response.json())
      .then(data => {
        setState({ forecasts: data, loading: false, selectedCity: data[0] })
        setFormData({ ...formData, cityId: data[0].id });
      });
  }, [])
  const handleChange = (e) => {
    setPrice(0);
    const id = e.target.value;
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    if (name === "city") {
      setState({ ...state, selectedCity: { ...forecasts.filter(x => x.id === Number(id))[0] } })
      setFormData({ cityId: Number(value), extra: [], area: 0 })
      document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);

    } else if (name == "extra") {
      if (checked) {
        setFormData({ ...formData, extra: [...formData.extra, Number(value)] })
      } else {
        setFormData({ ...formData, extra: [...formData.extra.filter((x) => x !== Number(value))] })
      }
    } else if (name === "area") {
      setFormData({ ...formData, area: Number(value) })
    }
  };
  const handleServerCalc = (e) => {
    e.preventDefault();
    fetch(`api/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setPrice(data);
      })

  }
  const renderFetchedData = (forecasts, selectedId) => {
    return (
      <div className="w-100 h-100 d-flex align-items-center justify-content-center">
        <Form onSubmit={handleServerCalc} className="h-75 w-75">
          <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label>Välja din Stad</Form.Label>
            <Form.Control as="select" size="sm" custom onChange={handleChange} name="city">
              {
                state.forecasts.map(({ id, name }) => <option value={id} key={id}>{name}</option>)
              }
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            {state.selectedCity.extra.map(({ name, id }, index) => <Form.Check key={index} type="checkbox" label={`${name}`} name="extra" value={id} onChange={handleChange} />)}
          </Form.Group>
          <Form.Group controlId="formBasicRange">
            <Form.Label>Antal Kvadratmeter : {formData.area} m2</Form.Label>
            <Form.Control type="range" min={0} max={500} name="area" onChange={handleChange} value={formData.area} />
          </Form.Group>
          <Form.Group>
            <h4> Ditt uppskattade pris : {price !== 0 ? `${price} kr` : ''}</h4>
          </Form.Group>
          <Button type="submit">Räkna</Button>

        </Form>

      </div>
    );
  };
  let contents = state.loading
    ? <p><em>Loading...</em></p>
    : renderFetchedData(state.forecasts, state.selectedId);

  return (
    <div className="h-100 d-flex align-items-center flex-column">
      <h1>Uppgifter om din bostad</h1>
      <p>Släpp kraven på att fixa det perfekta hemmet. Överlåt det till ett proffs! Vi hjälper dig gärna med hemstädning </p>
      {contents}
    </div>
  );

}
export default Calculate;
