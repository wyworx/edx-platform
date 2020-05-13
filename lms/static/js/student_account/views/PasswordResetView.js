(function(define) {
    'use strict';
    define([
        'jquery',
        'js/student_account/views/FormView'
    ],
        function($, FormView) {
            return FormView.extend({
                el: '#password-reset-form',

                tpl: '#password_reset-tpl',

                events: {
                    'click .js-reset': 'submitForm',
                    'click .reset-help': 'toggleResetHelp',
                },

                formType: 'password-reset',

                requiredStr: '',
                optionalStr: '',

                submitButton: '.js-reset',

                preRender: function() {
                    this.element.show($(this.el));
                    this.element.show($(this.el).parent());
                    this.listenTo(this.model, 'sync', this.saveSuccess);
                },

                toggleResetHelp: function(event){
                  event.preventDefault();
                  var $help = $('#reset-help');
                  if ( $help.css('display') === "block") {
                    $help.css('display', 'none');
                  } else {
                    $help.css('display', 'block');
                  }
                },

                saveSuccess: function() {
                    this.trigger('password-email-sent');

                // Destroy the view (but not el) and unbind events
                    this.$el.empty().off();
                    this.stopListening();
                }
            });
        });
}).call(this, define || RequireJS.define);
