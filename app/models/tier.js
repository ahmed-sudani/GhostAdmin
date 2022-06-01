import Model, {attr} from '@ember-data/model';
import ValidationEngine from '@tryghost/admin/mixins/validation-engine';

export default Model.extend(ValidationEngine, {
    validationType: 'tier',

    name: attr('string'),
    description: attr('string'),
    active: attr('boolean'),
    slug: attr('string'),
    welcomePageURL: attr('string'),
    visibility: attr('string', {defaultValue: 'none'}),
    type: attr('string', {defaultValue: 'paid'}),
    currency: attr('string'),
    monthlyPrice: attr('number'),
    yearlyPrice: attr('number'),
    benefits: attr('tier-benefits')
});
