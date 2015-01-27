;(function(){
    $.fn.datepicker.dates['pt'] = {
        days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"],
        daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
        daysMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        monthsShort: ["Jan", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        today: "Hoje",
        clear: "Apagar"
    };


    function date() {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                "date": "=",
                "onChangeDate": "&"
            },
            link: function(scope, element, attrs, controller){

                if(!controller) return;

                element.on('keyup', function(e){
                    var value = controller.$viewValue,
                        formated = value;

                    if(e.keyCode === 8){
                        return;
                    }

                    value = value.replace(/[/]/, '');

                    if(value.length == 2){
                            formated = value + '/';
                        }

                        if(value.length == 4){
                            formated = formated + '/';
                        }

                        if(value.length > 8){
                            formated = formated.slice(0,10);
                        }

                        controller.$viewValue = formated;
                        controller.$render();
                });

                controller.$parsers.push(function(value){
                    if(value){
                        return moment(value, "DD-MM-YYYY").format();
                    }else{
                        return '';
                    }
                });

                controller.$formatters.push(function(){
                    var modelValue = controller.$modelValue;

                    if(modelValue){
                        if(moment(modelValue, "DD-MM-YYYY").isValid()){
                            return moment(modelValue).format('DD/MM/YYYY');
                        }else{
                            return '';
                        }
                    }
                });

                controller.$formatters.push(function(){
                    element.datepicker('setDate', new Date(controller.$modelValue));
                    element.datepicker('update');
                });

                function datePickerInit(){
                    var datePicker = element.datepicker({
                        format: "dd/mm/yyyy",
                        language: 'pt'
                    });

                    datePicker.on('clearDate', function(e){
                        scope.ngModel = undefined;
                        scope.onChangeDate();
                    });

                    datePicker.on('changeDate', function(e){
                        scope.onChangeDate();
                    });
                }

                datePickerInit();
            }
        };
    }

    angular.module('angular-datepicker').directive('date', date);
})();