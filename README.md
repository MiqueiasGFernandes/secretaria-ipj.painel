# 📌 Portal de Secretaria de Igreja Presbiteriana de Jundiaí

Este frontend foi desenvolvido em **React Admin** com **Vite**, proporcionando uma interface moderna, rápida e intuitiva para a gestão de membros e solicitações da igreja.  
Ele integra-se diretamente com a API de backend, garantindo **controle completo de dados** e **facilidade de uso** para administradores.

---

## 🚀 Funcionalidades

- ✅ **Autenticação completa de administradores**  
  - Login seguro via tokens da API backend (Laravel Sanctum)  
  - Controle de acesso por perfil de usuário  

- ✅ **Link de autocadastro de membros da igreja**  
  - Permite que novos membros se registrem diretamente

- ✅ **Gestão completa de membros**  
  - Criação, leitura, atualização de dados dos membros da igreja
  - Exibição de informações detalhadas, incluindo dados pessoais, contatos e histórico de participação  

- ✅ **Aprovação ou rejeição de solicitações de cadastro**  
  - Interface intuitiva para gerenciar solicitações pendentes  
  - Marcação rápida de status aprovado/rejeitado  

- ✅ **Indicadores estratégicos em dashboard**  
  - Número de solicitações pendentes  
  - Total de membros cadastrados  
  - Membros que optaram por **não exibir sua imagem pessoal**  conforme garante a LGPD
  - Facilita acompanhamento e tomada de decisão  

---

## 📂 Estrutura de Telas e Funcionalidades

| Tela / Seção                  | Descrição de Valor |
|-------------------------------|-----------------|
| Login Admin                   | Protege o sistema e garante acesso apenas a administradores autorizados |
| Dashboard                     | Exibe indicadores essenciais de forma clara e visual |
| Membros                       | CRUD completo com filtros e ordenação avançada |
| Solicitações                  | Aprovação ou rejeição rápida, com histórico e detalhes |
| Link de Auto-Cadastro          | Permite novos membros se registrarem sem intervenção administrativa |

---

## 🔐 Autenticação e Segurança

- Integração com **Laravel Sanctum** do backend para autenticação baseada em token  
- Controle de acesso por perfil de administrador  
- React Admin garante navegação segura e consistente entre as telas  

---

## 🛠️ Tecnologias Utilizadas

- [React Admin](https://marmelab.com/react-admin/) → Framework para administração de dados  
- [Vite](https://vitejs.dev/) → Build rápido e moderno para frontend  
- JavaScript / TypeScript → Tipagem opcional para segurança e produtividade  
- Axios / React Query → Comunicação com API backend  
- Tailwind / Material UI → Interface responsiva e consistente  

---

## ▶️ Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/MiqueiasGFernandes/secretaria-ipj.painel
cd secretaria-ipj.painel

# Instale as dependências
npm install

# Copie o .env de exemplo e configure a URL da API backend
cp .env.example .env

# Inicie o servidor de desenvolvimento
npm run dev
