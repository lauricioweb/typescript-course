## instalando typescript
 
 ```typescript
 npm i typescript -D //dev dependence

 ```

 ```text
module mode e script mode

module indica que serão usados variaveis e funções em outros arquivos

scipt indica que seus script sera considerado unico em todo o seu projeto, nao permitindo usar nomes de funções e variaveis
no mo mesmo projeto. 
 ```

## instalando tsx e configurando code runner

```bash
npm i tsx -D 

```
```md
crie a pasta .vscode para definir configurações locais ao projeto

dentro insira

settings.json

{
  "code-runner.executorMap": {
    "typescript": "tsx"
  },
  "code-runner.runInTerminal": true
}


```
