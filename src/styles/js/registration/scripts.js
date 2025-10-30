// Função para inicializar o flatpickr para elementos com a classe .datetimepicker
function initializeDateTimePicker() {
   if (document.querySelector('.datetimepicker')) {
      flatpickr('.datetimepicker', {
         allowInput: true
      });
   }
}

// Função para inicializar o editor Quill para o elemento com o ID especificado
function initializeQuillEditor(elementId) {
   var quillElement = document.getElementById(elementId);

   if (quillElement) {
      new Quill('#' + elementId, {
         theme: 'snow' // Specify theme in configuration
      });
   }
}

// Função para inicializar o Choices para o elemento com o ID especificado
function initializeChoices(elementId) {
   const element = document.getElementById(elementId);

   if (element) {
      new Choices(element, {
         searchEnabled: false
      });
   }
}

// Função para inicializar as chamadas estáticas
function initializeStaticCalls() {
   initializeQuillEditor('description-house-edit');
   initializeQuillEditor('description-architectural-edit');
   initializeQuillEditor('description-topography-edit');
   initializeQuillEditor('description-zoning-edit');

   initializeChoices('estado');
   initializeChoices('addressStates');
   initializeChoices('notarialStates');
   initializeChoices('propriedade');
   initializeChoices('house');
   initializeChoices('architectural');
   initializeChoices('sistemageodesico');
   initializeChoices('zoning');

   initializeChoices('currency-venda');
   initializeChoices('currency-aluguel');

   if (document.getElementById('tags-comodos-edit')) {
      var tags = document.getElementById('tags-comodos-edit');
      const examples = new Choices(tags, {
         removeItemButton: true
      });
   }
}

// Função para inicializar a barra de rolagem personalizada (Scrollbar) em sistemas Windows
function initializeScrollbar() {
   var win = navigator.platform.indexOf('Win') > -1;
   if (win && document.querySelector('#sidenav-scrollbar')) {
      var options = {
         damping: '0.5'
      }
      Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
   }
}

// Função para atualizar informações após a mudança de slides
function updateInformationAfterSlideChange() {
   $(".watch-slider").each(function(index, element) {
      var prevArrowSelector = "#arrow-prev" + index;
      var nextArrowSelector = "#arrow-next" + index;

      function atualizar_informacoes() {
      }

      $(element).on('init', function() {
         atualizar_informacoes();
      });

      $(element).slick({
         infinite: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         centerMode: true,
         prevArrow: $(prevArrowSelector),
         nextArrow: $(nextArrowSelector),
         responsive: [{
            breakpoint: 640,
            settings: {
               slidesToShow: 1
            }
         }]
      });

      $(element).on('afterChange', function() {
         atualizar_informacoes();
      });
   });
}

// Chama as funções de inicialização
$(function() {
   initializeDateTimePicker();
   initializeStaticCalls();
   initializeScrollbar();
   updateInformationAfterSlideChange();
});
