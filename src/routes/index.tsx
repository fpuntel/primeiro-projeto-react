import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  // Utiliza o exact para testar exatamente a /
  // caso contrário todas as outras rotas entrariam no
  // dashbord
  // Switch garante que apenas uma rota seja exibida
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
