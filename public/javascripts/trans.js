$(document).ready(( ) => {
    //set a listener on the textbox
    $( `#input` ).on("change", (evt) => {
       let text = $( `input` ).val();
       // the { text: text } sends a parameter named text with the
        $.get(`/shout`, { text: text })
            .done((data) => {
                console.log(data);
                $(`#results`).prepend(`<li>` + data['result'] + '<li>');
                $(`#input`).val(``);
            })
            .fail((xhr) => {
               alert('Problem contacting server');
               console.log(xhr);
            });
    });
});