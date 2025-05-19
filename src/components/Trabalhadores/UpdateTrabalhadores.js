import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateTrabalhadores = () => {
    const {id} = useParams();
    const [trabalhador, setTrabalhador] = useState({
        nome: '',
        funcao: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setTrabalhador((prev) => ({...prev, [e.target.name]: e.target.value})); 
    };
    useEffect(() => {
        axios.get(`http://localhost:8081/trabalhadores/`+id)
        .then((res) => {
            setTrabalhador(res.data);
        })
        .catch(err => console.log(err));
    },[id]);
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/trabalhadores/`+id, trabalhador);
            navigate('/trabalhadores');
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className='container'>
            <h2 className='w-100 d-flex justify-content-center p-3'>Editar Trabalhador</h2>
            <form>
                <div className='mb-3'>
                    <label htmlFor='nome' className='form-label'>Nome:</label>
                    <input type='text' className='form-control' id='nome' name='nome' value={trabalhador.nome} onChange={handleChange} placeholder='Digite o nome do trabalhador' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='funcao' className='form-label'>Função</label>
                    <input type='text' className='form-control' id='funcao' name='funcao' value={trabalhador.funcao} onChange={handleChange} placeholder='Digite a função do trabalhador' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='createdAt' className='form-label'>Criado em</label>
                    <input type='text' className='form-control' id='createdAt' name='createdAt' value={trabalhador.createdAt ? new Date(trabalhador.createdAt).toLocaleDateString() : ''} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor='updatedAt' className='form-label'>Atualizado em</label>
                    <input type='text' className='form-control' id='updatedAt' name='updatedAt' value={trabalhador.updatedAt ? new Date(trabalhador.updatedAt).toLocaleDateString() : ''} disabled />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Atualizar</button>
                <br />
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/trabalhadores')}>Voltar</button>
                <button type="reset" className="btn btn-danger" onClick={() => setTrabalhador({nome: '', funcao: ''})}>Limpar</button>
            </form>
        </div>
    )
}

export default UpdateTrabalhadores;
