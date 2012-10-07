/*
 * File: app/controller/AccountRegistration.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Sencha.controller.AccountRegistration', {
    extend: 'Ext.app.Controller',

    views: [
        'AccountRegistrationForm'
    ],

    refs: [
        {
            ref: 'formAccountRegistration',
            selector: 'accountregistrationform',
            xtype: 'form'
        }
    ],

    onSubmitClick: function(button, e, options) {
        var form = button.up('form').getForm();

        /* Normally we would submit the form to the server here and handle the response...
        form.submit({
        clientValidation: true,
        url: 'register.php',
        success: function(form, action) {
        //...
    },
    failure: function(form, action) {
        //...
    }
            });
            */

            if (form.isValid()) {
    Ext.Msg.alert('Submitted Values', form.getValues(true));
            }
    },

    onFormFieldValidityChange: function(form) {
        this.updateErrorState();
    },

    onFormFieldErrorChange: function(form) {
        this.updateErrorState();
    },

    onCheckboxfieldBoxLabelClick: function() {
        Ext.create('Sencha.view.TermsOfUse');
    },

    onDeclineClick: function(button, e, options) {
        button.up('window').close();
        this.getFormAccountRegistration().down('[name=acceptTerms]').setValue(false);
    },

    onAcceptClick: function(button, e, options) {
        button.up('window').close();
        this.getFormAccountRegistration().down('[name=acceptTerms]').setValue(true);
    },

    updateErrorState: function() {
        var me = this.getFormAccountRegistration(),
        errorCmp, fields, errors;

        if (me.hasBeenDirty || me.getForm().isDirty()) { //prevents showing global error when form first loads
            errorCmp = me.down('formErrorState');
            fields = me.getForm().getFields();
            errors = [];
            fields.each(function(field) {
                Ext.Array.forEach(field.getErrors(), function(error) {
                    errors.push({name: field.getFieldLabel(), error: error});
                });
            });
            errorCmp.setErrors(errors);
            me.hasBeenDirty = true;
        }
    },

    init: function(application) {
        this.control({
            "accountregistrationform button[action=submit]": {
                click: this.onSubmitClick
            },
            "accountregistrationform": {
                fieldvaliditychange: this.onFormFieldValidityChange,
                fielderrorchange: this.onFormFieldErrorChange
            },
            "accountregistrationform checkboxfield[name=acceptTerms]": {
                boxLabelClick: this.onCheckboxfieldBoxLabelClick
            },
            "termsofuse button[action=decline]": {
                click: this.onDeclineClick
            },
            "termsofuse button[action=accept]": {
                click: this.onAcceptClick
            }
        });
    }

});