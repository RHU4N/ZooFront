import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddAnimais = () => {
    const [animais, setAnimais] = useState({
        especie: '',
        quantidade: '',
        habitate: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setAnimais((prev) => ({...prev, [e.target.name]: e.target.value})); 
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8081/animais', animais);
            navigate('/animais');
        } catch (err) {
            console.error(err);
        }
    };

  return (
    <div className='container'>
        <h2 className='w-100 d-flex justify-content-center p-3'>Adicionar Animal</h2>
        <div className='row'>
            <div className='col-md-12'>
                <form>
                    <div className='mb-3'>
                        <label htmlFor='especie' className='form-label'>Espécie:</label>
                        <input type='text' className='form-control' id='especie' name='especie' onChange={handleChange} placeholder='Digite a especie do animal' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='quantidade' className='form-label'>Quantidade</label>
                        <input type='number' className='form-control' id='quantidade' name='quantidade' onChange={handleChange} placeholder='Digite a quantidade de anaimais' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='habitate' className='form-label'>Habitate</label>
                        <input type='text' className='form-control' id='habitate' name='habitate' onChange={handleChange} placeholder='Digite o habitate desse animal' />
                    </div>
                    <div className="d-flex flex-wrap gap-2 justify-content-end mb-2">
                        <button type="submit" className="btn btn-success" onClick={handleClick}>Adicionar</button>
                        <button type="button" className="btn btn-secondary" onClick={() => navigate('/animais')}>Voltar</button>
                        <button type="reset" className="btn btn-danger">Limpar</button>
                    </div>
                </form>
            </div>
    </div>
    </div>
  )
}

export default AddAnimais