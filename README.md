# tic-tac-toe-reactjs

Ajustes para rodar o projeto:

Inserir o seguinte script no package.json

"scripts": {
  "start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
  "build": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts build",
  "test": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts test",
  "eject": "react-scripts eject"
}

Passos para Corrigir o Problema
1. Excluir package-lock.json
Remova os arquivos de lock para garantir que as versões das dependências serão reavaliadas.

2. Excluir node_modules
Remova a pasta node_modules para garantir que todas as dependências serão reinstaladas do zero.

4. Remover babel-eslint das Dependências
Abra o seu arquivo package.json e remova qualquer referência ao babel-eslint nas seções dependencies ou devDependencies.

5. Reinstalar Dependências
Depois de remover os arquivos e pacotes necessários, reinstale as dependências:

Para npm:
npm install
npm start

Verifique no local 
