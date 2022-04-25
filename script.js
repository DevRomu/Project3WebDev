/*
** Rhomill Orina
** Description: Validate thes contact form and more
** Date: 04/24/2022
** Creation: 04/24/2022
 */

/*Took it from the lecture, module 8 form validation.*/

/*
*
* Handles the submit event of the contact form.
*
* param e : A reference to the submit event
* return  : True if no validation errors; False if the form has validation errors.
 */
function validate(e){
    // Hides all error elements on the page.
    hideAllErrors();

    // Determine if the form has errors.
    if(formHasErrors()){
        e.preventDefault();
        return false;
    }
    return true;
}

/*
*
* Handles the reset event for the form.
*
* Param e: A reference to the reset event.\
* return : True allows the reset to happen; False prevents the browser from resetting the form.
*/
function resetForm(e){
    // Confirms that the user wants to clear the form.
    if(confirm('Clear Form?')){

        //Ensure all the error fields are hidden
        hideAllErrors();

        //Set focus to the first text field on the page
        document.getElementById("name").focus();

        return true;
    }

    //prevents the form from resetting
    e.preventDefault();

    return false;
}


/*
*
*  Does the error checking for the form.
*  return: True if the error is found. False if no errors are found
*/
function formHasErrors(){
    let errorFlag = false;
    let emailAddress = new RegExp(/\S+@\S+\.\S+/);
    let phoneNumber = new RegExp(/^[0-9()-]+$/);
    let enteredPhoneNumber = document.getElementById("phone").value;
    let emailAddressEntered = document.getElementById("Email").value;
    let errorFields = ["name","message", "phone"];
    hideAllErrors();

    for(let i = 0; i < errorFields.length; i++){
       let textbox = document.getElementById(errorFields[i]);
       textbox.value = textbox.value.trim();
       if(textbox.value == null || textbox.value == ""){
           document.getElementById(errorFields[i] + "_error").style.display = "block";
           if(!errorFields){
               textbox.focus();
               textbox.select();
           }
           errorFlag = true;
       }

    }

    if(!emailAddress.test(emailAddressEntered)){
        document.getElementById("email_error").style.display = "block";
        document.getElementById("email_error").style.visibility= "visible"

        if(!errorFlag){
            document.getElementById("Email").focus();
            document.getElementById("Email").select();
        }

        errorFlag = true;
    }

    if(!phoneNumber.test(enteredPhoneNumber)){
        document.getElementById("phone_error").style.display = "block";
        document.getElementById("phone_error").style.visibility = "visible";

        if(!errorFlag){
            document.getElementById("phone").focus();
            document.getElementById("Email").select();
        }

    }

    return errorFlag

}

/*
* Hides the error messages on the contact page.
 */
function hideAllErrors(){
    let error = document.getElementsByClassName("error");
    for(let i = 0; i < error.length; i++){
        error[i].style.display = "none";
    }
}

/*
*
* Determines if a text field element has an input
*
*/


function load(){
    hideAllErrors();

    document.getElementById("contact-form").addEventListener("submit", validate);
    document.getElementById("clear").addEventListener("click", resetForm);


}

document.addEventListener("DOMContentLoaded", load);