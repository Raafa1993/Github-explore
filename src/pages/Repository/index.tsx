import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import {Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
return (
  <>
    <Header>
      <img src={logoImg} alt="Github Explore"/>
      <Link to="/">
        <FiChevronLeft size={16} />
        voltar
      </Link>
    </Header>

    <RepositoryInfo>
      <header>
        <img src="https://acatars0.githubusercontent.com/u/28929274?v=4" alt="Rocketsear"/>
        <div>
          <strong>Rocketseat/uniform</strong>
          <p>descrição do repositorio</p>
        </div>
      </header>
      <ul>
        <li>
          <strong>1808</strong>
          <span>Starts</span>
        </li>
        <li>
          <strong>1808</strong>
          <span>Starts</span>
        </li>
        <li>
          <strong>1808</strong>
          <span>Starts</span>
        </li>
      </ul>
    </RepositoryInfo>

    <Issues>
      <Link to="asdasd">
        <div>
          <strong>adassda</strong>
          <p>dsasdadsdsa</p>
        </div>

        <FiChevronRight size={20} />
      </Link>
    </Issues>


  </>
  );
};

export default Repository;
