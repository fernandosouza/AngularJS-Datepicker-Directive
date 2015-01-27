# AngularJS Datepicker Directive

Diretiva super simples de date picker exibindo no input a data no formato especificado e agravando no model o valor em formato ISO.

## Dependencias

- Bootstrap
- jQuery
- Bootstrap-datepicker ([Documentation](https://bootstrap-datepicker.readthedocs.org/en/release/ "Bootstrap-datepicker"))
- MomentJS ([Documentation](http://momentjs.com/ "MomentJS"))

## Como instalar

´bower install --save angular-datepicker´

## Como usar

1 - Atribua o modulo 'angular-datepicker' como dependencia do modulo principal da sua aplicação ou de qualquer outro modulo onde será utilizado. 

2 - Inclua a propriedade 'date' no input que receberá o datepicker. E enjoy. (Não esqueça que é necessário um model para esse input: ng-model="variavel")

## Métodos

`onChangeDate`: Esse método é executado sempre que o usuário escolhe uma data. Atribua essa propriedade ao input e em seu valor a função a ser executada.

`<input type="text" date ng-model="date" on-change-date="onChangeDateFn(date)" />`