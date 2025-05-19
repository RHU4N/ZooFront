import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListTrabalhadores = () => {
    const [trabalhadores, setTrabalhadores] = useState([]);
    useEffect(()=>{
        const fetchAllTrabalhadores = async () => {
          try {
            const res = await axios.get('http://localhost:8081/trabalhadores');
            setTrabalhadores(res.data);
          }catch (err) {
            console.error(err);
          }
        };
        fetchAllTrabalhadores();
      }, [setTrabalhadores]);
    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:8081/trabalhadores/${id}`);
          window.location.reload();
        } catch (err) {
          console.error(err);
        }
      }
  return (
    <div className='container'>
        <h2 className='w-100 d-flex justify-content-center p-3'>Lista de Trabalhadores</h2>
        <div className='row'>
            <div className='col-md-12'>
                <p><Link to="/addTrabalhadores" className='btn btn-success'>Adicionar novo Trabalhador</Link></p>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Nome</th>
                            <th scope='col'>Funcao</th>
                            <th scope='col'>Data de Cadastro</th>
                            <th scope='col'>Data de Atualização</th>
                            <th scope='col'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trabalhadores.map((trabalhador) => {
                        return (
                            <tr key={trabalhador.id_trabalhadores}>
                                <td>{trabalhador.id_trabalhadores}</td>
                                <td>{trabalhador.nome}</td>
                                <td>{trabalhador.funcao}</td>
                                <td>{new Date(trabalhador.createdAt).toLocaleDateString()}</td>
                                <td>{new Date(trabalhador.updatedAt).toLocaleDateString()}</td>
                                <td>
                                    <Link to={`/readTrabalhadores/${trabalhador.id_trabalhadores}`} className='btn btn-primary'>Visualizar</Link>
                                    <Link to={`/updateTrabalhadores/${trabalhador.id_trabalhadores}`} className='btn btn-warning'>Editar</Link>
                                    <button className='btn btn-danger' onClick={() => handleDelete(trabalhador.id_trabalhadores)}>Deletar</button>
                                </td>
                            </tr>
                        )})
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ListTrabalhadores