# Cooperado Onboarding

Aplicação Angular para onboarding de cooperados, com foco em arquitetura limpa, acessibilidade e boas práticas de desenvolvimento frontend.

## ✨ Tecnologias Utilizadas

- Angular Standalone Components
- Angular Material
- RxJS
- TypeScript
- SCSS
- Jasmine + Karma (para testes)

## 📦 Estrutura

```
src/
├── app/
│   ├── layout/
│   │   ├── sidebar/
│   │   ├── header/
│   │   └── footer/
│   ├── models/
│   ├── services/
│   ├── shared/
│   └── pages/
│       └── cooperado/
│       └── cpf-check/
```

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Rodar a aplicação
ng serve
```

## 🧪 Testes

```bash
# Executar testes unitários com relatório de cobertura
ng test --code-coverage
```

Relatório será gerado em `/coverage/index.html`.

## 📄 Padrões Adotados

- Clean Code e responsabilidade única por componente
- Testes cobrindo estrutura e comportamento dos componentes
- Estrutura desacoplada e reutilizável com uso de `@Input()` e serviços

## 📁 Diretórios-chave

- `layout/`: componentes estruturais como header, sidebar e footer
- `services/`: lógicas de negócios e configuração dinâmica
- `models/`: interfaces e tipos usados na comunicação de componentes
- `shared/`: componentes reutilizáveis como `card`, `stepper`, `form`

---

