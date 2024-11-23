const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Lê os dados do arquivo db.json
const middlewares = jsonServer.defaults();  // Configura middlewares padrão

// Adiciona middlewares no servidor
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Configurações para autenticação JWT
const SECRET_KEY = 'secret123';
const expiresIn = '1h';

// Mock de usuários
const users = [
  { id: 1, username: 'admin', password: 'admin', role: 'admin' },
  { id: 2, username: 'user', password: 'user', role: 'user' }
];

// Rota de login
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Usuário ou senha inválidos' });
  }
  const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn });
  res.status(200).json({ token });
});

// Middleware de autenticação
server.use((req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    try {
      jwt.verify(token, SECRET_KEY);
      next();
    } catch (err) {
      res.status(401).json({ message: 'Token inválido' });
    }
  } else {
    res.status(401).json({ message: 'Token não fornecido' });
  }
});

// Usar o roteador para manipular as rotas do db.json
server.use(router);

// Inicia o servidor na porta 3000
server.listen(3000, () => {
  console.log('JSON Server rodando na porta 3000');
});
