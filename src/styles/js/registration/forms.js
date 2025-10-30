// Função para submissão assíncrona do formulário de localização geográfica
function submitGeolocationForm() {
   $(document).on('submit', '#localizacao_geografica', function(e) {
      e.preventDefault();
      var formUrl = $(this).data('form-url');

      $.ajax({
         type: 'POST',
         url: formUrl,
         data: {
            pais: $("#pais").val(),
            estado: $("#estado").val(),
            municipio: $("#municipio").val(),
            bairro: $("#bairro").val(),
            rua: $("#rua").val(),
            quadra: $("#quadra").val(),
            lote: $("#lote").val(),
            cep: $("#cep").val(),
            numero: $("#numero").val(),
            latitude: $("#latitude").val(),
            longitude: $("#longitude").val(),
            categoria: $("#propriedade").val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
         },
         success: function(response) {
            // Aqui você pode manipular a resposta da sua view, se necessário
            Swal.fire({
               title: "Sucesso!",
               text: "Dados da localização geográfica salvos.",
               icon: "success"
            });
         },
         error: function(xhr, errmsg, err) {
            // Se houver erros, exiba um alerta do SweetAlert com as mensagens de erro
            var errors = xhr.responseJSON.errors;
            var errorMessage = Object.values(errors).join('<br>');
            Swal.fire({
               title: 'Aviso!',
               html: errorMessage,
               icon: 'warning'
            });
         }
      });
   });
}

function submitPrefeituraForm() {
   $(document).on('submit', '#prefeitura', function(e) {
      e.preventDefault();
      var formUrl = $(this).data('form-url');

      $.ajax({
         type: 'POST',
         url: formUrl,
         data: {
            pais: $("#addressCountry").val(),
            estado: $("#addressStates").val(),
            municipio: $("#municipality").val(),
            bairro: $("#neighborhood").val(),
            rua: $("#street").val(),
            quadra: $("#block").val(),
            lote: $("#lot").val(),
            iptuRegistration: $("#iptuRegistration").val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
         },
         success: function(response) {
            // Aqui você pode manipular a resposta da sua view, se necessário
            Swal.fire({
               title: "Sucesso!",
               text: "Dados da prefeitura salvos.",
               icon: "success"
            });
         },
         error: function(xhr, errmsg, err) {
            // Se houver erros, exiba um alerta do SweetAlert com as mensagens de erro
            var errors = xhr.responseJSON.errors;
            var errorMessage = Object.values(errors).join('<br>');
            Swal.fire({
               title: 'Aviso!',
               html: errorMessage,
               icon: 'warning'
            });
         }
      });
   });
}

function submitNotarialForm() {
    $(document).on('submit', '#oficio_notarial', function(e) {
        e.preventDefault();
        var formUrl = $(this).data('form-url');

        $.ajax({
            type: 'POST',
            url: formUrl,
            data: {
                pais: $("#notarialCountry").val(),
                estado: $("#notarialStates").val(),
                municipio: $("#notarialMunicipality").val(),
                bairro: $("#notarialNeighborhood").val(),
                rua: $("#notarialStreet").val(),
                quadra: $("#notarialBlock").val(),
                lote: $("#notarialLot").val(),
                notarialRegistration: $("#notarialRegistration").val(),
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(response) {
                // Aqui você pode manipular a resposta da sua view, se necessário
                Swal.fire({
                    title: "Sucesso!",
                    text: "Dados do ofício notarial salvos.",
                    icon: "success"
                });
            },
            error: function(xhr, errmsg, err) {
                // Se houver erros, exiba um alerta do SweetAlert com as mensagens de erro
                var errors = xhr.responseJSON.errors;
                var errorMessage = Object.values(errors).join('<br>');
                Swal.fire({
                    title: 'Aviso!',
                    html: errorMessage,
                    icon: 'warning'
                });
            }
        });
    });
}

function submitTopografoForm() {
    $(document).on('submit', '#topografo', function(e) {
        e.preventDefault();
        var formUrl = $(this).data('form-url');

        $.ajax({
            type: 'POST',
            url: formUrl,
            data: {
                nome: $("#nomeTopografo").val(),
                rg: $("#rgTopografo").val(),
                cpf: $("#cpfTopografo").val(),
                nomeFantasia: $("#nomeFantasiaTopografo").val(),
                cnpj: $("#cnpjTopografo").val(),
                registro: $("#registroTopografo").val(),
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(response) {
                // Aqui você pode manipular a resposta da sua view, se necessário
                Swal.fire({
                    title: "Sucesso!",
                    text: "Dados do topógrafo salvos.",
                    icon: "success"
                });
            },
            error: function(xhr, errmsg, err) {
                // Se houver erros, exiba um alerta do SweetAlert com as mensagens de erro
                var errors = xhr.responseJSON.errors;
                var errorMessage = Object.values(errors).join('<br>');
                Swal.fire({
                    title: 'Aviso!',
                    html: errorMessage,
                    icon: 'warning'
                });
            }
        });
    });
}

function submitEngenheiroForm() {
    $(document).on('submit', '#engenheiro', function(e) {
        e.preventDefault();
        var formUrl = $(this).data('form-url');

        $.ajax({
            type: 'POST',
            url: formUrl,
            data: {
                nome: $("#nomeEngenheiro").val(),
                rg: $("#rgEngenheiro").val(),
                cpf: $("#cpfEngenheiro").val(),
                nomeFantasia: $("#nomeFantasiaEngenheiro").val(),
                cnpj: $("#cnpjEngenheiro").val(),
                registro: $("#registroEngenheiro").val(),
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(response) {
                // Aqui você pode manipular a resposta da sua view, se necessário
                Swal.fire({
                    title: "Sucesso!",
                    text: "Dados do engenheiro(a) salvos.",
                    icon: "success"
                });
            },
            error: function(xhr, errmsg, err) {
                // Se houver erros, exiba um alerta do SweetAlert com as mensagens de erro
                var errors = xhr.responseJSON.errors;
                var errorMessage = Object.values(errors).join('<br>');
                Swal.fire({
                    title: 'Aviso!',
                    html: errorMessage,
                    icon: 'warning'
                });
            }
        });
    });
}

function submitAdvogadoForm() {
    $(document).on('submit', '#advogado', function(e) {
        e.preventDefault();
        var formUrl = $(this).data('form-url');

        $.ajax({
            type: 'POST',
            url: formUrl,
            data: {
                nome: $("#nomeAdvogado").val(),
                rg: $("#rgAdvogado").val(),
                cpf: $("#cpfAdvogado").val(),
                nomeFantasia: $("#nomeFantasiaAdvogado").val(),
                cnpj: $("#cnpjAdvogado").val(),
                registro: $("#registroAdvogado").val(),
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(response) {
                // Aqui você pode manipular a resposta da sua view, se necessário
                Swal.fire({
                    title: "Sucesso!",
                    text: "Dados do advogado(a) salvos.",
                    icon: "success"
                });
            },
            error: function(xhr, errmsg, err) {
                // Se houver erros, exiba um alerta do SweetAlert com as mensagens de erro
                var errors = xhr.responseJSON.errors;
                var errorMessage = Object.values(errors).join('<br>');
                Swal.fire({
                    title: 'Aviso!',
                    html: errorMessage,
                    icon: 'warning'
                });
            }
        });
    });
}

function submitFotosDoImovelForm() {
   $(document).on('submit', '#fotos_do_imovel', function(e) {
      e.preventDefault();
      var formUrl = $(this).data('form-url');

      $.ajax({
         type: 'POST',
         url: formUrl,
         data: {
            precoVenda: $("#precoVenda").val(),
            currencyVenda: $("#currency-venda").val(),
            precoAluguel: $("#precoAluguel").val(),
            currencyAluguel: $("#currency-aluguel").val(),
            categoria: $("#house").val(),
            comodos: $("#tags-comodos-edit").val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
         },
         success: function(response) {
            // Aqui você pode manipular a resposta da sua view, se necessário
            Swal.fire({
               title: "Sucesso!",
               text: "Dados do imóvel salvos.",
               icon: "success"
            });
         },
         error: function(xhr, errmsg, err) {
            // Se houver erros, exiba um alerta do SweetAlert com as mensagens de erro
            var errors = xhr.responseJSON.errors;
            var errorMessage = Object.values(errors).join('<br>');
            Swal.fire({
               title: 'Aviso!',
               html: errorMessage,
               icon: 'warning'
            });
         }
      });
   });
}

function submitPlanoArquitetonicoForm() {
   $(document).on('submit', '#plano_arquitetonico', function(e) {
      e.preventDefault();
      var formUrl = $(this).data('form-url');

      $.ajax({
         type: 'POST',
         url: formUrl,
         data: {
            metros_quadrados: $("#latitude").val(),
            art_numero: $("#longitude").val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
         },
         success: function(response) {
            // Aqui você pode manipular a resposta da sua view, se necessário
            Swal.fire({
               title: "Sucesso!",
               text: "Dados do plano arquitetônico salvos.",
               icon: "success"
            });
         },
         error: function(xhr, errmsg, err) {
            // Se houver erros, exiba um alerta do SweetAlert com as mensagens de erro
            var errors = xhr.responseJSON.errors;
            var errorMessage = Object.values(errors).join('<br>');
            Swal.fire({
               title: 'Aviso!',
               html: errorMessage,
               icon: 'warning'
            });
         }
      });
   });
}

function submitTopografiaForm() {
   $(document).on('submit', '#topografia', function(e) {
      e.preventDefault();
      var formUrl = $(this).data('form-url');

      $.ajax({
         type: 'POST',
         url: formUrl,
         data: {
            zona_utm: $('input[name=zona_utm]').val(),
            meridiano_central: $('input[name=meridiano_central]').val(),
            latitude_utm: $('input[name=latitude_utm]').val(),
            longitude_utm: $('input[name=longitude_utm]').val(),
            sistema_geodesico: $('select[name=sistema_geodesico]').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
         },
         success: function(response) {
            // Aqui você pode manipular a resposta da sua view, se necessário
            Swal.fire({
               title: "Sucesso!",
               text: "Dados de topografia salvos.",
               icon: "success"
            });
         },
         error: function(xhr, errmsg, err) {
            // Se houver erros, exiba um alerta do SweetAlert com as mensagens de erro
            var errors = xhr.responseJSON.errors;
            var errorMessage = Object.values(errors).join('<br>');
            Swal.fire({
               title: 'Aviso!',
               html: errorMessage,
               icon: 'warning'
            });
         }
      });
   });
}

function submitZoningPlanForm() {
   $(document).on('submit', '#plano_de_zoneamento', function(e) {
      e.preventDefault();
      var formUrl = $(this).data('form-url');

      $.ajax({
         type: 'POST',
         url: formUrl,
         data: {
            zoning: $("#zoning").val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
         },
         success: function(response) {
            // Aqui você pode manipular a resposta da sua view, se necessário
            Swal.fire({
               title: "Sucesso!",
               text: "Plano de zoneamento salvo.",
               icon: "success"
            });
         },
         error: function(xhr, errmsg, err) {
            // Se houver erros, exiba um alerta do SweetAlert com as mensagens de erro
            var errors = xhr.responseJSON.errors;
            var errorMessage = Object.values(errors).join('<br>');
            Swal.fire({
               title: 'Aviso!',
               html: errorMessage,
               icon: 'warning'
            });
         }
      });
   });
}

function submitAllForms() {
    // Collect data from all forms
    var formData = {};
    $('form').each(function() {
        var formName = $(this).attr('id'); // Get the form's ID attribute
        var formFields = {};
        $(this).find('input, select, textarea').each(function() {
            var fieldName = $(this).attr('id'); // Get the field's ID attribute
            var fieldValue = $(this).val(); // Get the field's value
            if (fieldName !== undefined) {
                formFields[fieldName] = fieldValue;
            }
        });
        formData[formName] = formFields;
    });

    // Send data to Django view via AJAX
    $.ajax({
        type: 'POST',
        url: 'generate_document',
        data: JSON.stringify(formData), // Convert data to JSON string
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('X-CSRFToken', $('input[name=csrfmiddlewaretoken]').val()); // Set CSRF token in request headers
        },
        xhrFields: {
        responseType: 'blob' // Set the response type to 'blob'
        },
        success: function(response) {
            if (response instanceof Blob) {
            // Create a blob URL for the PDF content
            var blobUrl = URL.createObjectURL(response);

            // Create a temporary link element
            var link = document.createElement('a');
            link.href = blobUrl;
            link.download = 'escritura.pdf'; // Specify the filename for download

            // Trigger a click event on the link to initiate the download
            document.body.appendChild(link);
            link.click();

            // Cleanup: remove the link and revoke the blob URL
            document.body.removeChild(link);
            URL.revokeObjectURL(blobUrl);
            console.log('Document Generated')
            } else {
                console.error("Invalid response format: expected Blob object");
            }
        },
        error: function(xhr, errmsg, err) {
            // Handle error response
            console.error('Error generating document:', errmsg);
        }
    });
}

// Function to handle click event of the "Generate Document" button
$(document).on('click', '#botaoGerar', function() {
    // Call the function to submit all forms
    submitAllForms();
});


// Chama as funções de inicialização
$(function() {
   submitGeolocationForm();
   submitPrefeituraForm();
   submitNotarialForm();
   submitTopografoForm();
   submitEngenheiroForm();
   submitAdvogadoForm();
   submitFotosDoImovelForm();
   submitPlanoArquitetonicoForm();
   submitTopografiaForm();
   submitZoningPlanForm();
});