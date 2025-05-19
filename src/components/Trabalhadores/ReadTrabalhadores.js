import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReadTrabalhadores = () => {
    const {id} = useParams();
    const [trabalhador, setTrabalhador] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8081/trabalhadores/` + id)
        .then((res) => {
            setTrabalhador(res.data);
        })
        .catch(err => console.log(err));
    }, [id]);

    return (
        <div className='container'>
            <h2 className='w-100 d-flex justify-content-center p-3'>Detalhes do Trabalhador</h2>
            <div className='row'>
                <div className='col-md-12'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th scope='col'>ID</th>
                                <th scope='col'>Nome</th>
                                <th scope='col'>Função</th>
                                <th scope='col'>Criado em</th>
                                <th scope='col'>Atualizado em</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={trabalhador.id_trabalhador}>
                                <td>{trabalhador.id_trabalhador}</td>
                                <td>{trabalhador.nome}</td>
                                <td>{trabalhador.funcao}</td>
                                <td>{trabalhador.createdAt ? new Date(trabalhador.createdAt).toLocaleDateString() : ''}</td>
                                <td>{trabalhador.updatedAt ? new Date(trabalhador.updatedAt).toLocaleDateString() : ''}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>Voltar</button>
                </div>
            </div>
        </div>
    );
}

export default ReadTrabalhadores;