# Curso de JavaScript do Curso em Video

## Anotações

### tipos em JavaScript

![image](https://user-images.githubusercontent.com/55638524/234966889-2b063998-2d53-4b98-8b95-3b4a262228c8.png)


### Operadores '+' em JavaScript

O operador mais no JavaScript ele serve para adição tanto para concatenação de string ou seja para somar e preciso ser do tipo number então fazer `Number + Number` e para concatenar basta ser do tipo string então fazer `String + String`.

``` javascript
   var n1 = '3'
   var n2 = '5'
   
   n1 + n2
  // "35"
  
  var n1 = 3
  var n2 = 5
   
  n1 + n2
  // 8
```

### Funções do javascript

- `typeof`: ve o tipo da variavel em questão.

``` javascript
  var n = 200
  typeof n
  // 'number'
  
  var n = "Google"
  typeof n
  // 'string'
```

- `alert("")`: vai mostrar um alerta em tela
- `confirm("")`: vai pedir para o usuario confirmar ou n uma informação em tela.
- `prompt("")`: vai pedir para o usuario inserir um dado em tela.
- `document.write(""):`: escreve no documento HTML.

##### Conversão de tipo

- `parserInt(n)`: converte uma string para inteiro
- `parseFloat(n)`: converte uma string para Float (Ou seja um ponto flutuante).
- `Number(n)`: converte para o tipo numero ou seja o javascripit ira se virar para saber se e inteiro ou float a informação que vc esta convertendo de string para number.
- `String(n)` ou `n.toString()`: converte um numero em String.

##### Formatando Strings

  As veses queremos colocar uma informação a mas na nossa string para isso podemos usar o operador de concatenação "+":
  
  ``` javascript
    var nome = "Natan";
    var idade = 23;
    
    "Ola" + nome + " seja bem-vindo. Você tem " + idade + " anos."
  ```
 
Podemos ver que e um pouco confuso esse abre e fecha aspas por isso existe outra forma usando crase e a simbologia `${}`.
    
  ``` javascript
    var nome = "Natan";
    var idade = 23;
    
    `Ola ${nome} seja bem-vindo. Você tem ${idade} anos.`
```

#### Manipulando Strings

- `.length`: retorna a quantidade de caracteres da String.
- `.toUpperCase()`: String retorna em maiuscula.
- `.toLowerCase()`: String retorna em minuscula.


### Manipulando Number

- `.toFixed(n)`: vai dizer quantas casas depois da virgula vc quer na variavel n.
- `replace('n','m')`: vai trocar uma coisa por outra no caso trocar n por m.
  
