# Plataforma de Cursos Online

Uma interface frontend moderna e responsiva para uma plataforma de cursos online, construída com React.

## Funcionalidades

### Página de Login
- Formulário de login com validação básica
- Feedback visual de loading
- Design responsivo e acessível
- Suporte a dark mode

### Área Interna do Curso
- Player de vídeo integrado com Vimeo
- Lista de aulas na sidebar
- Indicador de aulas concluídas
- Persistência de progresso no localStorage
- Design responsivo (desktop, tablet, mobile)
- Transições suaves entre aulas
- Dark mode opcional

## Tecnologias Utilizadas

- **React**: Framework para construção da interface
- **React Router**: Navegação entre páginas
- **CSS**: Estilização com Flexbox e Grid
- **Vimeo API**: Embed de vídeos
- **localStorage**: Persistência de dados

## Estrutura do Projeto

```
src/
├── App.js              # Componente principal com roteamento
├── Login.js            # Página de login
├── Login.css           # Estilos da página de login
├── CourseArea.js       # Área interna do curso
├── CourseArea.css      # Estilos da área do curso
├── ThemeContext.js     # Contexto para gerenciamento de tema
└── index.js            # Ponto de entrada da aplicação
```

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Funcionalidades Implementadas

- ✅ Página de login centralizada e responsiva
- ✅ Validação básica de formulário
- ✅ Área do curso com player Vimeo
- ✅ Lista de aulas clicáveis
- ✅ Indicador de progresso
- ✅ Persistência com localStorage
- ✅ Dark mode
- ✅ Design responsivo
- ✅ Transições suaves
- ✅ Componentização clara

## Próximos Passos

- Integração com API backend para autenticação real
- Carregamento dinâmico de cursos e aulas
- Controle de progresso mais avançado
- Sistema de comentários e avaliações
- Notificações push
- Suporte a múltiplos cursos

## Licença

Este projeto é para fins educacionais e pode ser usado livremente.(https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
