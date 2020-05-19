  import {
    RuleFactory,
    FormElementsStatusHelper,
    StatusBuilderAnnotationFactory,
    WithName
  } from 'rules-config/rules';


  const WithRegistrationStatusBuilder = StatusBuilderAnnotationFactory('individual', 'formElement');
  const RegistrationViewFilter = RuleFactory("952d7f10-a521-416e-aaff-3b974b267e14", "ViewFilter");


  @RegistrationViewFilter("44622bb2-74d9-11ea-bc55-0242ac130003", "Covid Registration View Filter", 100.0, {})
  class RegistrationViewHandlerSample {
    static exec(individual, formElementGroup) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new RegistrationViewHandlerSample(), individual, formElementGroup);
  }

  @WithName("Occupation Details")
  @WithRegistrationStatusBuilder
  j1([], statusBuilder) {
        statusBuilder.show().when.valueInRegistration("Occupation")
            .containsAnswerConceptName("Other");
  }

 }

   module.exports = {RegistrationViewHandlerSample};
