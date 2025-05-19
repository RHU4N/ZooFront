import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ReadAnimais = () => {
    const {id} = useParams();
    const [animais, setAnimais] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8081/animais/`+id)
        .then((res) => {
            console.log(res);
            setAnimais(res.data);
        })
        .catch(err => console.log(err));
    },[id]);
  return (
    <div className='container'>
        <h2 className='w-100 d-flex justify-content-center p-3'>Detalhes do Animal</h2>
        <div className='row'>
            <div className='col-md-12'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Espécie</th>
                            <th scope='col'>Quantidade</th>
                            <th scope='col'>Habitate</th>
                            <th scope='col'>Criado em</th>
                            <th scope='col'>Atualizado em</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={animais.id_animais}>
                            <td>{animais.id_animais}</td>
                            <td>{animais.especie}</td>
                            <td>{animais.quantidade}</td>
                            <td>{animais.habitate}</td>
                            <td>{new Date(animais.createdAt).toLocaleDateString()}</td>
                            <td>{new Date(animais.updatedAt).toLocaleDateString()}</td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>Voltar</button>
            </div>
        </div>
    </div>
  )
}

export default ReadAnimais