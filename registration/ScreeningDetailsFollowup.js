const moment = require("moment");
const _ = require("lodash");
import {
    FormElementsStatusHelper,
    RuleFactory,
    StatusBuilderAnnotationFactory,
    complicationsBuilder as ComplicationsBuilder,
    WithName
} from 'rules-config/rules';
import lib from '../lib';

const COVIDFollowupViewFilter = RuleFactory("e693842f-b664-4c65-a09e-7f7a71a4e319", "ViewFilter");
const WithStatusBuilder = StatusBuilderAnnotationFactory('programEncounter', 'formElement');

@COVIDFollowupViewFilter("739be522-7596-11ea-bc55-0242ac130003", "COVID Followup View Filter", 14.0, {})
class COVIDFollowupViewFilterHandler {
    static exec(programEncounter, formElementGroup, today) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new COVIDFollowupViewFilterHandler(), programEncounter, formElementGroup, today);
    }

    @WithName('Where was the contact')
    @WithStatusBuilder
    F1([], statusBuilder) {
            statusBuilder.show().when.valueInEncounter('Any contact with a person who is COVID-19 positive')
            .containsAnswerConceptName("Yes");
    }

    @WithName('9) Co-morbidities')
    @WithName('10) Action taken based on positive COVID-19 result')
    @WithName('11) Official notification of person as COVID-19 positive')
    @WithName('12) Contact tracing initiated')
    @WithName('13) If COVID-19 positive, was test repeated after 14 days')
    @WithName('14) Outcome of repeat test')
    @WithName('Complete official notification form.')
    @WithStatusBuilder
    F2([], statusBuilder) {
            statusBuilder.show().when.valueInEncounter('COVID-19 results for current infection')
            .containsAnswerConceptName("Positive");
    }

    @WithName('Travel Details')
    @WithStatusBuilder
    F3([], statusBuilder) {
            statusBuilder.show().when.valueInEncounter('Travel outside India since Feb 1, 2020')
            .containsAnswerConceptName("Yes");
    }

    @WithName('Trigger transport to hospital.')
    @WithStatusBuilder
    F4([], statusBuilder) {
            statusBuilder.show().when.valueInEncounter('Action taken based on symptom assessment')
            .containsAnswerConceptName("Referral to hospital");
    }

    @WithName('7) Which COVID-19 test performed?')
    @WithName('8) COVID-19 results for current infection')
    @WithStatusBuilder
    F5([], statusBuilder) {
            statusBuilder.show().when.valueInEncounter('Specimen Collected')
            .containsAnswerConceptName("Yes");
    }

    @WithName('14) Outcome of repeat test')
    @WithStatusBuilder
    F6([], statusBuilder) {
            statusBuilder.show().when.valueInEncounter('If COVID-19 positive, was test repeated after 14 days')
            .containsAnswerConceptName("Yes");
    }

    @WithName('4) Did you seek medical care?')
    @WithStatusBuilder
    F7([], statusBuilder) {
            statusBuilder.show().when.valueInEncounter('3) Current signs and symptoms')
            .containsAnswerConceptName("Fever")
            .or.containsAnswerConceptName('Cough')
            .or.containsAnswerConceptName('Sore Throat')
            .or.containsAnswerConceptName('Shortness of breath')
            .or.containsAnswerConceptName('Myalgia/General weakness')
            .or.containsAnswerConceptName('Loss of taste (ageusia)')
            .or.containsAnswerConceptName('Loss of sense of smell (anosmia)');
    }

    @WithName('5) Specimen for COVID-19 test collected?')
    @WithStatusBuilder
    F8([], statusBuilder) {
            statusBuilder.show().when.valueInEncounter('4) Did you seek medical care?')
            .containsAnswerConceptName("Yes");
    }

    @WithName('6) Action taken based on symptom assessment')
    @WithStatusBuilder
    F8([], statusBuilder) {
            statusBuilder.show().when.valueInEncounter('4) Did you seek medical care?')
            .containsAnswerConceptName("No");
    }


}


module.exports = {COVIDFollowupViewFilterHandler};
