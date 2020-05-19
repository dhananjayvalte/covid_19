import {
    StatusBuilderAnnotationFactory, 
    RuleFactory,  
    FormElementsStatusHelper,
    WithName
} from 'rules-config/rules';

const filter = RuleFactory('0ee8eb70-ad57-47d7-b30d-a855d358270e', 'ViewFilter');
const WithStatusBuilder = StatusBuilderAnnotationFactory('programEnrolment', 'formElement');
const WithRegistrationStatusBuilder = StatusBuilderAnnotationFactory('individual', 'formElement');

@filter('4462303a-74d9-11ea-bc55-0242ac130003', 'CovidEnrolmentFormHandler', 100.0)
class CovidEnrolmentFormHandler {
    static exec(programEnrolment, formElementGroup, today) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new CovidEnrolmentFormHandler(), programEnrolment, formElementGroup, today);
    }       

    @WithName('Where was the contact')
    @WithStatusBuilder
    a1([], statusBuilder) {
            statusBuilder.show().when.valueInEnrolment('Any contact with a person who is COVID-19 positive')
            .containsAnswerConceptName("Yes");
    }
    

    @WithName('Travel Details')
    @WithStatusBuilder
    a3([], statusBuilder) {
            statusBuilder.show().when.valueInEnrolment('Travel outside India since Feb 1, 2020')
            .containsAnswerConceptName("Yes");
    }

    
    @WithName('Specimen for COVID-19 test collected today?')
    @WithName('Action taken based on symptom assessment')
    @WithName('Have you already been tested for COVID-19 earlier?')
    @WithStatusBuilder
    a5([], statusBuilder) {
            statusBuilder.show().when.valueInEnrolment('Current signs and symptoms').containsAnswerConceptName("Fever.")
            .or.when.valueInEnrolment('Current signs and symptoms').containsAnswerConceptName('Cough.')
            .or.when.valueInEnrolment('Current signs and symptoms').containsAnswerConceptName('Sore Throat.')
            .or.when.valueInEnrolment('Current signs and symptoms').containsAnswerConceptName('Shortness of breath.')
            .or.when.valueInEnrolment('Current signs and symptoms').containsAnswerConceptName('Myalgia/General weakness.')
            .or.when.valueInEnrolment('Current signs and symptoms').containsAnswerConceptName('Loss of taste (ageusia).')
            .or.when.valueInEnrolment('Current signs and symptoms').containsAnswerConceptName('Loss of sense of smell (anosmia).')
            .or.when.valueInEnrolment('Travel outside India since Feb 1, 2020').containsAnswerConceptName('Yes')
            .or.when.valueInEnrolment('Any contact with a person who is COVID-19 positive').containsAnswerConceptName('Yes');
    }  
    
    @WithName('Deselect the option')
    @WithStatusBuilder
    a6([], statusBuilder) {
            statusBuilder.show().when.valueInEnrolment('Current signs and symptoms')
            .containsAnswerConceptName("None of the above");
    }

//     @WithName('5) Specimen for COVID-19 test collected?')
//     @WithStatusBuilder
//     a8([], statusBuilder) {
//             statusBuilder.show().when.valueInEnrolment('Did you seek medical care?')
//             .containsAnswerConceptName("Yes");
//     }

//     @WithName('6) Action taken based on symptom assessment')
//     @WithStatusBuilder
//     a9([], statusBuilder) {
//             statusBuilder.show().when.valueInEnrolment('Did you seek medical care?').containsAnswerConceptName("No");
//     }

//     @WithName('6) Was the COVID-19 test performed?')
//     @WithStatusBuilder
//     a11([], statusBuilder) {
//             statusBuilder.show().when.valueInEnrolment('Specimen for COVID-19 test collected?')
//             .containsAnswerConceptName("Yes");
//     }

   
//     @WithName('7) Which COVID-19 test performed?')
//     @WithStatusBuilder
//     a12([], statusBuilder) {
//             statusBuilder.show().when.valueInEnrolment('Was the COVID-19 test performed?')
//             .containsAnswerConceptName("Yes");
//     }

    
    @WithName('Action taken based on positive COVID-19 result')
    @WithName('Official notification of person as COVID-19 positive sent?')
    @WithName('Did the process of identifying people who came in contact started?')
    @WithName('If COVID-19 positive, was test repeated after 14 days')
    @WithName('Outcome of repeat test')
    @WithStatusBuilder
    a13([], statusBuilder) {
            statusBuilder.show().when.valueInEnrolment('COVID-19 results for current infection')
            .containsAnswerConceptName("Positive");
    }

    @WithName('Outcome of repeat test')
    @WithName('Date on which the repeat test was performed?')
    @WithStatusBuilder
    a14([], statusBuilder) {
            statusBuilder.show().when.valueInEnrolment('If COVID-19 positive, was test repeated after 14 days')
            .containsAnswerConceptName("Yes");
    }

    @WithName('Deselect for suffer condition.')
    @WithStatusBuilder
    a15([], statusBuilder) {
            statusBuilder.show().when.valueInEnrolment('Do you suffer from any of the following conditions?')
            .containsAnswerConceptName("None");
    }

    @WithName('Which COVID-19 test was performed?')
    @WithName('What was result for the COVID-19 Test?')
    @WithStatusBuilder
    a16([], statusBuilder) {
            statusBuilder.show().when.valueInEnrolment('Have you already been tested for COVID-19 ?')
            .containsAnswerConceptName("Yes");
    }

    @WithName('Specimen for COVID-19 test collected today?')
    @WithStatusBuilder
    a17([], statusBuilder) {
            statusBuilder.show().when.valueInEnrolment('Have you already been tested for COVID-19 ?')
            .containsAnswerConceptName("No");
    }

    @WithName('Enter Name of the Hospital')
    @WithStatusBuilder
    a18([], statusBuilder) {
            statusBuilder.show().when.valueInEnrolment('Action taken based on positive COVID-19 result')
            .containsAnswerConceptName("Referred to hospital");
    }

    @WithName('Date on which the first test was performed?')
    @WithStatusBuilder
    a19([], statusBuilder) {
            statusBuilder.show().when.valueInEnrolment('Have you already been tested for COVID-19 ?')
            .containsAnswerConceptName("Yes");
    }


    
}




module.exports = {CovidEnrolmentFormHandler};