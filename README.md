# Omnichat API com Docker
Repositório com arquivos para "dockerizar" o sistema Omnichat API: códigos para criar "images" e "containers" do sistema Omnichat API utilizando-se do Docker

## Comandos para utilização do docker neste projeto 

> **Nota**
> - Instale o Docker e o Docker Compose na sua máquina para utilizar este projeto https://www.docker.com/

### Como usar
Este projeto deve ser utilizado para a montagem e execução data api Omnichat em um ambiente configurado com os serviços oferecidos pelo Docker. 

Para usar este projeto e montar api Omnichat em sua máquina execute apenas quatro passos principais

> - **Baixe o projeto**
```cmd
git clone https://github.com/jeordanecarlosbatista/omnichat-api.git
```
> - **Monte as imagens**
```
docker-compose build
```

> - **Execute os containers**
```
docker-compose up
```

> - **Acesse a aplicação**
```
http://localhost:3000/docs
```

### Contato
E-mail: jeordane.batista@hotmail.com
Linkedin: https://www.linkedin.com/in/jeordane-carlos-batista-4a7b70117/
