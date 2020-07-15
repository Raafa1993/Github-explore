import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
  <>
    <img src={logoImg} alt="Github Explore"/>
    <Title>Explore repositorios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositorio" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
      <img src="https://avatars0.githubusercontent.com/u/37309024?s=460&u=a3fa5c6a24da1e1369bfe192e547223ae595f3cf&v=4"
           alt="Rafael Araujo"
      />
      <div>
        <strong>Raafa1993/NextLevelWeek</strong>
        <p>Ecoleta é uma forma de conectar empresas e entidades</p>
      </div>

      <FiChevronRight size={20} />
      </a>
      <a href="teste">
      <img src="https://avatars0.githubusercontent.com/u/37309024?s=460&u=a3fa5c6a24da1e1369bfe192e547223ae595f3cf&v=4"
           alt="Rafael Araujo"
      />
      <div>
        <strong>Raafa1993/NextLevelWeek</strong>
        <p>Ecoleta é uma forma de conectar empresas e entidades</p>
      </div>

      <FiChevronRight size={20} />
      </a>
      <a href="teste">
      <img src="https://avatars0.githubusercontent.com/u/37309024?s=460&u=a3fa5c6a24da1e1369bfe192e547223ae595f3cf&v=4"
           alt="Rafael Araujo"
      />
      <div>
        <strong>Raafa1993/NextLevelWeek</strong>
        <p>Ecoleta é uma forma de conectar empresas e entidades</p>
      </div>

      <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
  );
};

export default Dashboard;
