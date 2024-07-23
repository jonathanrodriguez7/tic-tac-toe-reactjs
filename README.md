# tic-tac-toe-reactjs

Ajustes para rodar o projeto:

Inserir o seguinte script no package.json

"scripts": {
  "start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
  "build": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts build",
  "test": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts test",
  "eject": "react-scripts eject"
}

Removido todos os devDependencies do package.json 
Rodar o projeto com node instalado
Terminal> npm install > npm start 
