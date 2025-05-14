import { useState, useRef } from 'react'
import './style.css'
import api from './services/api.js'
import { useEffect } from 'react'


function Home() {
  let [users, setUsers] = useState([])

  let inputName = useRef()
  let inputAge = useRef()
  let inputEmail = useRef()

  async function getUsers() {
    let usersFromApi = await api.get('/users')

    setUsers(usersFromApi.data)
  }
  async function createUsers() {
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    })

    getUsers()

  }

  async function deleteUsers(id) {
      await api.delete(`/users/${id}`, {
      })

      getUsers()

    }



  useEffect(() => {
    getUsers()
  }, [])

  return (

    <div className='container'>
      <form>
        <h1> Cadastro </h1>
        <p>Digite os dados do usuário nos campos abaixo</p>
        <label For="Nome">Nome</label>
        <input name="nome" type='text' placeholder='Digite o nome' ref={inputName} />
        <label For="Idade">Idade</label>
        <input name="idade" type='number' placeholder='Digite a idade' ref={inputAge} />
        <label For="E-mail">E-mail</label>
        <input name="email" type='email' placeholder='Digite o E-mail' ref={inputEmail} />
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>


      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
