import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const ListAnimais = () => {
    const [animais, setAnimais] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchAllAnimais = async () => {
          try {
            const res = await axios.get('http://localhost:8081/animais');
            setAnimais(res.data);
          }catch (err) {
            console.error(err);
          }
        };
        fetchAllAnimais();
      }, [setAnimais]);

const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:8081/animais/${id}`);
          window.location.reload();
        } catch (err) {
          console.error(err);
        }
      };

  return (
    <div className='container'>
      <h2 className='w-100 d-flex justify-content-center p-3 zoo-title'>Lista de Animais</h2>
      <div className='row mb-3'>
        <div className='col d-flex gap-2'>
          <Link to="/addAnimais" className='btn btn-success'>Adicionar novo Animal</Link>
          <button className="btn btn-zoo d-flex align-items-center" onClick={() => navigate('/trabalhadores')}>
            <span role="img" aria-label="trabalhador" style={{marginRight: 6}}>👷</span>Ver Trabalhadores
          </button>
        </div>
      </div>
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
                <th scope='col'>Ações</th>
              </tr>
            </thead>
            <tbody>
              {animais.map((animal) => (
                <tr key={animal.id_animais}>
                  <td>{animal.id_animais}</td>
                  <td>{animal.especie}</td>
                  <td>{animal.quantidade}</td>
                  <td>{animal.habitate}</td>
                  <td>{animal.createdAt ? new Date(animal.createdAt).toLocaleDateString() : ''}</td>
                  <td>{animal.updatedAt ? new Date(animal.updatedAt).toLocaleDateString() : ''}</td>
                  <td>
                    <Link to={`/readAnimais/${animal.id_animais}`} className='btn btn-primary'>Visualizar</Link>{' '}
                    <Link to={`/updateAnimais/${animal.id_animais}`} className='btn btn-warning'>Editar</Link>{' '}
                    <button className='btn btn-danger' onClick={() => handleDelete(animal.id_animais)}>Deletar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListAnimais