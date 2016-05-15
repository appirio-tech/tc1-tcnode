$(document).ready(function() {   
    
    /* @param lType - The programming language ID value in related radio button */
    function getMode(lType) {
        var lMode = "text/x-java";
        lType = lType ? lType : '1';
        switch(lType) {
            case "1":
                lMode = 'text/x-java';
                break;
            case "3":
                lMode = 'text/x-c++src';
                break;
            case "4":
                lMode = 'text/x-csharp';
                break;
            case "5":
                lMode = 'text/x-vb';
                break;
            case "6":
                lMode = {
                    name: "python",
                    version: 2,
                    singleLineStringErrors: false
                };
                break;
        }
        return lMode;
    }

    var myCodeMirror;
    var $codeArea = $('#submissionArea');

    
    if ($('#longContestSubmit').length) {
        if ($codeArea.length) {
            myCodeMirror = CodeMirror.fromTextArea(document.getElementById("submissionArea"), {
                lineNumbers: true,
                matchBrackets: true,
                mode: getMode($('input:radio[name="lid"]:checked').val())
            });
        }

        $('input:radio[name="lid"]').click(function() {
            if (myCodeMirror) {
                myCodeMirror.setOption("mode", getMode($(this).val()));
            }
        });
    
        $('form').submit(function() {
            if (myCodeMirror) {
                myCodeMirror.save();
            }
        });
    }

    
    if ($('#longContestViewSolution').length) {
        var container = $('#codeMirrorContainer');
        if (container.length) {
            myCodeMirror = CodeMirror(container.get(0),
            {
                value: $('#problemTextOriginal').val(),
                lineNumbers: true,
                matchBrackets: true,
                viewportMargin: Infinity,
                readOnly: true,
                mode: getMode($('#lid').val())
            });
            $('.problemText').hide();
        }
    }
});