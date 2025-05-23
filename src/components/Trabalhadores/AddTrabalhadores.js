import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddTrabalhadores = () => {
    const [trabalhador, setTrabalhador] = useState({
        nome: '',
        funcao: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setTrabalhador((prev) => ({...prev, [e.target.name]: e.target.value})); 
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8081/trabalhadores', trabalhador);
            navigate('/trabalhadores');
        } catch (err) {
            console.error(err);
        }
    };

  return (
    <div className='container'>
        <h2 className='w-100 d-flex justify-content-center p-3'>Adicionar Trabalhador</h2>
        <div className='row'>
            <div className='col-md-12'>
                <form>
                    <div className='mb-3'>
                        <label htmlFor='nome' className='form-label'>Nome:</label>
                        <input type='text' className='form-control' id='nome' name='nome' onChange={handleChange} placeholder='Digite o nome do trabalhador' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='funcao' className='form-label'>Função</label>
                        <input type='text' className='form-control' id='funcao' name='funcao' onChange={handleChange} placeholder='Digite a função do trabalhador' />
                    </div>
                    <div className="d-flex gap-2 mb-2">
                        <button type="submit" className="btn btn-success" onClick={handleClick}>Adicionar</button>
                        <button type="button" className="btn btn-secondary" onClick={() => navigate('/trabalhadores')}>Voltar</button>
                        <button type="reset" className="btn btn-danger">Limpar</button>
                    </div>
                </form>
            </div>
    </div>
    </div>
  )
}

export default AddTrabalhadores