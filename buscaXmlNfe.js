var xmlNota = '';
//chama servido para obter o xml da NFe 
var initWvemlc = {
   servico: 'wvemlc',
   metodo: 'buscaXmlNf',
   opcoes: {
      pcodfil: $scope.regSelec[0].codfil,
      pseqctr: $scope.regSelec[0].seqctr,
   }
};

Global.init(initWvemlc)
//dispara chamada ao servidor
.callService(function(data){
   var wvemlc = Global.callbackCallServiceSuccess(data);
   if (wvemlc.retorno[0].tipret !== 'err') {
      //$scope.vemlc = wvemlc.dados[0];

      xmlNota = wvemlc.dados[0].xmlurl + wvemlc.dados[0].nomarq;

      $.ajax({type: "GET",
         url: xmlNota,
         dataType: "xml",
         success: function(data){
            console.log('Dados do XML lido:', data);
         }
      });

   }

});
