      
/**
  * Author: TCSASSEMBLER
  * Version: 1.0 (Release Assembly - TopCoder Password Recovery Revamp v1.0)
  * Copyright (C) 2010 - 2013 TopCoder Inc., All Rights Reserved.
  *
  * Description: The password reset javascript.
  * 
  */

/**
 * Show error meassage after the text input field if its validation fails.
 */
function showError(/*String*/ message, /*Object*/ dom){
    $(dom).after('<span class="bigRed">'+ message +'</span>');
}

/**
 * Validate the input field to update or create a second email.
 */
function validateAddSecondEmail( /*Object*/ inputControl){
    $('.bigRed').remove();

    var EMAIL_REGEX_CHECKER = new RegExp(".+@[^\\.]+(\\.[^\\.]+)*");
    
    if( !nonEmptyValidate($(inputControl).val()) ){
        showError("Please enter the email to continue.", inputControl);
        return false;
    }

    if( ! EMAIL_REGEX_CHECKER.test( $(inputControl).val() ) ){
        showError("The email has a bad format.", inputControl);
        return false;
    }

    return true;
}

/**
 * Validate the find user input field.
 */
function validateFindUserField(/*Object*/ inputControl){
    
    $('.bigRed').remove();
    
    if( !nonEmptyValidate($(inputControl).val()) ){
        showError("Please input something to search.", inputControl);
        return false;
    }

    return true;
}
/**
 * Validate the email type radio, which is to select the password recovery email account.
 */
function validateEmailTypeRadio(/*Object*/ emailTypeRadioTable){    
    $('.emailTypeRadioMessage', emailTypeRadioTable).remove();
    var selected = $('input[type="radio"]:checked',emailTypeRadioTable);
    if( selected.length == 0 ){
        showEmailTypeRadioError( emailTypeRadioTable, "Please select one email to continue." );
        return false;
    }

    return true;
}

/**
 * This code is used in recoverByEmail.jsp to show error message when the email type is not selected correctly.
 */
function showEmailTypeRadioError(/*Object*/ emailTypeRadioTable, /*String*/ message ){
    $('tbody', emailTypeRadioTable).prepend('<tr class="emailTypeRadioMessage"><td colspan="2"><span class="bigRed">'+ message +'</span></td></tr>');
}

/*
 * Do not-empty validation.
 */
function nonEmptyValidate(/*String*/ query){
    return $.trim(query).length != 0;
}
/**
 * Check the password's length is between [ min, max ].
 */
function checkPasswordLength(/*String*/ password, /*int*/ min, /*int*/ max){
    return password.length >= min && password.length <= max;
}
/**
 * Check the input password contains only valid chars, which is defined in passwordAlphabet.
 */
function basicPasswordValidate(/*String*/ password, /*String*/ passwordAlphabet){
    for(var i = 0; i < password.length; i++){
        var appear = false;
        for(var j = 0; j < passwordAlphabet.length; j++){
            if(password.charAt(i) == passwordAlphabet.charAt(j)){
                appear = true;
            }
        }
        if(!appear)return false;
    }
    return true;
}
