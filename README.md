# POC-4---Fetch

## Alunos:
* Caio Sampaio. RA: 10381053;
* Guilherme Picoli. RA: 10389843;
* Caio Filardi. RA: 10341128;

## Enunciado:

Criar uma POC que mostre o funcionamento do método assíncrono fetch, no javascript.
  
Para isso, consulte o material de aula:
* https://bragafilho.craft.me/async
Busque uma API que seja simples o suficiente para a POC. Como sugestão de APIs, acesse:
* https://github.com/public-apis/public-apis
Exemplo de POC:
* https://github.com/phcacique/webmobile2024/tree/main/poc4_api

## Chamadas assíncrona

  Chamadas assíncronas em JavaScript permitem que operações sejam executadas de forma concorrente, sem bloquear o fluxo principal da aplicação. Isso é particularmente útil em situações onde uma operação pode demorar para ser
  concluída, como operações de I/O (entrada/saída), requisições de rede, ou consultas de banco de dados. Em vez de esperar que a operação seja concluída antes de continuar, JavaScript permite que o restante do código seja
  executado enquanto a operação assíncrona está em andamento.

### Promise: 

O conceito de Promises (promessas) é uma das principais formas de lidar com operações assíncronas. Uma promise representa um valor que pode estar disponível agora, no futuro, ou nunca. Uma promessa pode estar em três estados:

* Pending (Pendente): A operação ainda não foi concluída.
* Fulfilled (Concluída): A operação foi concluída com sucesso e o resultado está disponível.
* Rejected (Rejeitada): Ocorreu um erro durante a operação.

```javascript
let promessa = new Promise((resolve, reject) => {
    let sucesso = true;

    if (sucesso) {
        resolve("A operação foi bem-sucedida.");
    } else {
        reject("Ocorreu um erro.");
    }
});

promessa
    .then((resultado) => console.log(resultado))  // Caso a operação tenha sucesso
    .catch((erro) => console.log(erro));          // Caso ocorra um erro
