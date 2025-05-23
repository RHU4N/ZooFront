import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateAnimais = () => {
    const {id} = useParams();
    const [animais, setAnimais] = useState({
        especie: '',
        quantidade: '',
        habitate: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setAnimais((prev) => ({...prev, [e.target.name]: e.target.value})); 
    };
    useEffect(() => {
        axios.get(`http://localhost:8081/animais/`+id)
        .then((res) => {
            setAnimais(res.data);
        })
        .catch(err => console.log(err));
    },[id]);
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8081/animais/`+id, animais);
            navigate('/animais');
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className='container'>
            <h2 className='w-100 d-flex justify-content-center p-3'>Editar Animal</h2>
            <form>
                <div className='mb-3'>
                    <label htmlFor='especie' className='form-label'>Espécie:</label>
                    <input type='text' className='form-control' id='especie' name='especie' value={animais.especie} onChange={handleChange} placeholder='Digite a especie do animal' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='quantidade' className='form-label'>Quantidade</label>
                    <input type='number' className='form-control' id='quantidade' name='quantidade' value={animais.quantidade} onChange={handleChange} placeholder='Digite a quantidade de anaimais' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='habitate' className='form-label'>Habitate</label>
                    <input type='text' className='form-control' id='habitate' name='habitate' value={animais.habitate} onChange={handleChange} placeholder='Digite o habitate desse animal' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='createdAt' className='form-label'>Criado em</label>
                    <input type='text' className='form-control' id='createdAt' name='createdAt' value={animais.createdAt ? new Date(animais.createdAt).toLocaleDateString() : ''} disabled />
                </div>
                <div className='mb-3'>
                    <label htmlFor='updatedAt' className='form-label'>Atualizado em</label>
                    <input type='text' className='form-control' id='updatedAt' name='updatedAt' value={animais.updatedAt ? new Date(animais.updatedAt).toLocaleDateString() : ''} disabled />
                </div>
                <div className="d-flex flex-wrap gap-2 justify-content-end mb-2">
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Atualizar</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate('/animais')}>Voltar</button>
                    <button type="reset" className="btn btn-danger" onClick={() => setAnimais({especie: '', quantidade: '', habitate: ''})}>Limpar</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateAnimais;