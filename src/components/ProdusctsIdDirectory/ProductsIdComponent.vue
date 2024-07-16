<script setup="">
import {onMounted, ref} from 'vue'

// lodash
import _ from 'lodash'

// Pinia
import {storeToRefs} from 'pinia'
import {useStore} from '../../stores/index.js'

// Pinia.store
const {productId} = storeToRefs(useStore())

// Pinia.action
const {fetchIdProduct} = useStore()
// display
import {useDisplay} from 'vuetify'

const {name} = useDisplay()

// router
import {useRouter} from 'vue-router'

const router = useRouter()


//product
const productsList = ref([
  {
    id: 12554124,
    url: '#',
    mainPhoto: 'https://en.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/6/9/b/69b60312361e0e07e9425a06c583cdf80208b700/dezega_slide_5.jpg',
    photo: [
      'https://en.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/6/9/b/69b60312361e0e07e9425a06c583cdf80208b700/dezega_slide_5.jpg',
      'https://static.wixstatic.com/media/c26854_e78c04ecc3cd449e9e07ae82369f2787~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
      'https://ru.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/8/2/b/82bc56c4408e72961efe8a222a64a1b8ebf181c0/dezega_slide_7.jpg'
    ],
    title: 'DEZEGA self-contained self-rescuer CARBO 30',
    text: 'This self-rescuer is particularly suitable for short evacuation routes and has the lightest weight among the 30-minute...',
    textDescription: 'This self-rescuer is particularly suitable for short evacuation routes and has the lightest weight among the 30-minute self-rescuers by DEZEGA. It can be worn either on the waist belt or on the shoulder straps, providing comfortable breathing during evacuation. The activation procedure is identical to the CARBO 60, which has already established itself in the market. The starting device activates immediately upon lid removal, allowing the user to start breathing within the first few seconds after activation.',
    textDescripitonLi: [
      {
        textUl: 'Ergonomics during everyday carrying:',
        textLi: [
          'large area of contact with the user',
          'balanced weight distribution',
          'comfortable shoulder belt',
          'suitable for use with most types of waist belts',
        ],
      },
      {
        textUl: 'Comfortable breathing:',
        textLi: [
          'low heat capacity of the inhaled gas', 'low breathing resistance', 'low temperature of the inhaled gas'
        ],
      }
    ],
    textDescriptionP: [
      'An automatic starter that activates during lid removal',
      'The training unit is available for practicing donning and breathing techniques',
      'Elimination of initial loss of oxygen volume',
      'The layout method keeps the breathing system from being damaged or stuck together',
      'Starter operates in wide temperature ranges',
      'The relief valve is located in a protected place',
      'Elimination of leakage due to spring-loaded tensioning coupling straps',
      'Possibility to perform minor repairs directly at the mine (belt loops and bumpers replacement)',
      'There is a lightweight version available for use with a pouch.'
    ],
    feature: [
      {
        featureText: 'Rated duration in accordance with EN 13794:2002, IS 15803:2008 and AS/NZS 1716:2012 at lung ventilation, not less:',
        featureValue: '',
      },
      {
        featureText: '- 10 l/min',
        featureValue: '90 min',
      },
      {
        featureText: '- 35 l/min',
        featureValue: '30 min',
      },
      {
        featureText: 'Breathing resistance (at inhalation or exhalation) during operation, max',
        featureValue: '1,0 kPa',
      },
      {
        featureText: 'The temperature of the inhaled gas, °C, not more',
        featureValue: '50 °С',
      },
      {
        featureText: 'The volume of oxygen in the inhaled gas during the rated duration, not less',
        featureValue: '21%',
      },
      {
        featureText: 'The maximum volume fraction of carbon dioxide in the inhaled gas, not more',
        featureValue: '3%',
      },
      {
        featureText: 'The average volume fraction of carbon dioxide in the inhaled gas during the rated duration, not more',
        featureValue: '1,5%',
      },
      {
        featureText: 'The volume of the breathing bag, not less',
        featureValue: '6 L',
      },
      {
        featureText: 'Overall dimensions (without waist and shoulder straps or bag), standard configuration:',
        featureValue: '',
      },
    ],
    order: [
      {
        orderText: 'CARBO 30',
        orderValue: 'S-30MP1-ISG-EUENEU-WK(O)',
      },
      {
        orderText: 'CARBO-30T',
        orderValue: 'T-0MP0-ISG-EUENEU-WK',
      },
      {
        orderText: 'Shoulder belt',
        orderValue: 'SKTB.02.KPP.00.00.000-07',
      },
      {
        orderText: 'Waist belt',
        orderValue: 'DWB.45.00.000',
      },
      {
        orderText: 'Front bumper',
        orderValue: 'SKTB.02.CK5.00.00.006',
      },
      {
        orderText: 'Rear bumper',
        orderValue: 'SKTB.02.CK5.00.00.003',
      },
      {
        orderText: 'Belt loops',
        orderValue: 'SKTB.02.CK5.00.00.004',
      },
      {
        orderText: 'Belt loops fixators set',
        orderValue: 'SKTB.02.CK5.00.00.005, SKTB.02.CK5.00.00.005-01',
      }
    ],
  },
  {
    id: 91253672,
    url: '#',
    mainPhoto: 'https://en.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/5/3/3/53320b5c13d998c00c7de653d3f1d9c9888bb770/dezega_slide_6.jpg',
    photo: [
      'https://en.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/5/3/3/53320b5c13d998c00c7de653d3f1d9c9888bb770/dezega_slide_6.jpg',
      'https://static.wixstatic.com/media/c26854_e78c04ecc3cd449e9e07ae82369f2787~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
      'https://ru.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/8/2/b/82bc56c4408e72961efe8a222a64a1b8ebf181c0/dezega_slide_7.jpg'
    ],
    title: 'Compressed oxygen self-contained closed-circuit breathing apparatus DEZEGA P-70',
    text: 'The P-70 is a respiratory protection device - compressed oxygen self-contained closed-circuit breathing apparatus...',
    textDescription: 'The P-70 is a respiratory protection device - compressed oxygen self-contained closed-circuit breathing apparatus. P-70 is the next-generation positive pressure breathing apparatus designed based on new safety and production principles. With new materials and high-tech design solutions, DEZEGA has significantly improved the technical characteristics and reliability of the breathing apparatus.',
    textDescripitonLi: [
      {
        textUl: 'Ergonomics during everyday carrying:',
        textLi: [
          'Nominal working duration of 4 hours.',
          'Positive pressure in the breathing circuit',
          'Lightest and smallest on the market',
          'Robust casing',
          'Simple and reliable mechanical structure based on 37 years of experience',
          'Possible to change cooling elements without doffing the breathing apparatus',
          'Automatic control and alarm system',
          'Estimated duration time calculation',
          'Personal ID card, data collection and sharing',
          'Ergonomic harness system',
          'Does not require special tools for assembling and daily maintenance',
          'Low total cost of ownership'
        ],
      },
    ],
    textDescriptionP: [
      'Compressed oxygen self-contained closed-circuit breathing apparatus P-70 is enhanced by smart onboard electronics,',
      'which provides a self-checks, warnings and alarms when there is a risk for the user,',
      'monitors the team status via special RFID tags with unique code of the user,',
      'and also calculate the estimate working duration.',
      'With high contrast, full-color display, user data is visible even in the most difficult environments such as darkness,',
      'bright sunlight, or smoke.',
      'Design of breathing apparatus allows user to assemble,',
      'disassemble and maintain the unit without any tools.',
      'A special fireproof and comfortable harness system with lumbar rotation allows the user to choose the height of the waist belt,',
      'and rotate the belt to not shift the center of gravity and facilitate the work to the user.'
    ],
    feature: [
      {
        featureText: 'Rated duration in accordance with EN 13794:2002, IS 15803:2008 and AS/NZS 1716:2012 at lung ventilation, not less:',
        featureValue: '',
      },
      {
        featureText: '- 10 l/min',
        featureValue: '90 min',
      },
      {
        featureText: '- 35 l/min',
        featureValue: '30 min',
      },
      {
        featureText: 'Breathing resistance (at inhalation or exhalation) during operation, max',
        featureValue: '1,0 kPa',
      },
      {
        featureText: 'The temperature of the inhaled gas, °C, not more',
        featureValue: '50 °С',
      },
      {
        featureText: 'The volume of oxygen in the inhaled gas during the rated duration, not less',
        featureValue: '21%',
      },
      {
        featureText: 'The maximum volume fraction of carbon dioxide in the inhaled gas, not more',
        featureValue: '3%',
      },
      {
        featureText: 'The average volume fraction of carbon dioxide in the inhaled gas during the rated duration, not more',
        featureValue: '1,5%',
      },
      {
        featureText: 'The volume of the breathing bag, not less',
        featureValue: '6 L',
      },
      {
        featureText: 'Overall dimensions (without waist and shoulder straps or bag), standard configuration:',
        featureValue: '',
      },
    ],
    order: [
      {
        orderText: 'CARBO 30',
        orderValue: 'S-30MP1-ISG-EUENEU-WK(O)',
      },
      {
        orderText: 'CARBO-30T',
        orderValue: 'T-0MP0-ISG-EUENEU-WK',
      },
      {
        orderText: 'Shoulder belt',
        orderValue: 'SKTB.02.KPP.00.00.000-07',
      },
      {
        orderText: 'Waist belt',
        orderValue: 'DWB.45.00.000',
      },
      {
        orderText: 'Front bumper',
        orderValue: 'SKTB.02.CK5.00.00.006',
      },
      {
        orderText: 'Rear bumper',
        orderValue: 'SKTB.02.CK5.00.00.003',
      },
      {
        orderText: 'Belt loops',
        orderValue: 'SKTB.02.CK5.00.00.004',
      },
      {
        orderText: 'Belt loops fixators set',
        orderValue: 'SKTB.02.CK5.00.00.005, SKTB.02.CK5.00.00.005-01',
      }
    ],
  },
  {
    id: 53246346,
    url: '#',
    mainPhoto: 'https://image.ec21.com/image/dezega/oimg_GC09983402_CA09983414/DEZEGA-Compressed-Oxygen-Self-contained-Closed-circuit-Breathing-Apparatus--P-30EX.jpg',
    photo: [
      'https://image.ec21.com/image/dezega/oimg_GC09983402_CA09983414/DEZEGA-Compressed-Oxygen-Self-contained-Closed-circuit-Breathing-Apparatus--P-30EX.jpg',
      'https://ru.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/8/2/b/82bc56c4408e72961efe8a222a64a1b8ebf181c0/dezega_slide_7.jpg',
      'https://en.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/5/3/3/53320b5c13d998c00c7de653d3f1d9c9888bb770/dezega_slide_6.jpg',
    ],
    title: 'Compressed oxygen self-contained closed-circuit breathing apparatus DEZEGA CARBO-60',
    text: 'The CARBO-60 is a respiratory protection device - compressed oxygen self-contained closed-circuit breathing apparatus...',
    textDescription: 'The P-70 is a respiratory protection device - compressed oxygen self-contained closed-circuit breathing apparatus. P-70 is the next-generation positive pressure breathing apparatus designed based on new safety and production principles. With new materials and high-tech design solutions, DEZEGA has significantly improved the technical characteristics and reliability of the breathing apparatus.',
    textDescripitonLi: [
      {
        textUl: 'Ergonomics during everyday carrying:',
        textLi: [
          'Nominal working duration of 4 hours.',
          'Positive pressure in the breathing circuit',
          'Lightest and smallest on the market',
          'Robust casing',
          'Simple and reliable mechanical structure based on 37 years of experience',
          'Possible to change cooling elements without doffing the breathing apparatus',
          'Automatic control and alarm system',
          'Estimated duration time calculation',
          'Personal ID card, data collection and sharing',
          'Ergonomic harness system',
          'Does not require special tools for assembling and daily maintenance',
          'Low total cost of ownership'
        ],
      },
    ],
    textDescriptionP: [
      'Compressed oxygen self-contained closed-circuit breathing apparatus P-70 is enhanced by smart onboard electronics,',
      'which provides a self-checks, warnings and alarms when there is a risk for the user,',
      'monitors the team status via special RFID tags with unique code of the user,',
      'and also calculate the estimate working duration.',
      'With high contrast, full-color display, user data is visible even in the most difficult environments such as darkness,',
      'bright sunlight, or smoke.',
      'Design of breathing apparatus allows user to assemble,',
      'disassemble and maintain the unit without any tools.',
      'A special fireproof and comfortable harness system with lumbar rotation allows the user to choose the height of the waist belt,',
      'and rotate the belt to not shift the center of gravity and facilitate the work to the user.'
    ],
    feature: [
      {
        featureText: 'Rated duration in accordance with EN 13794:2002, IS 15803:2008 and AS/NZS 1716:2012 at lung ventilation, not less:',
        featureValue: '',
      },
      {
        featureText: '- 10 l/min',
        featureValue: '90 min',
      },
      {
        featureText: '- 35 l/min',
        featureValue: '30 min',
      },
      {
        featureText: 'Breathing resistance (at inhalation or exhalation) during operation, max',
        featureValue: '1,0 kPa',
      },
      {
        featureText: 'The temperature of the inhaled gas, °C, not more',
        featureValue: '50 °С',
      },
      {
        featureText: 'The volume of oxygen in the inhaled gas during the rated duration, not less',
        featureValue: '21%',
      },
      {
        featureText: 'The maximum volume fraction of carbon dioxide in the inhaled gas, not more',
        featureValue: '3%',
      },
      {
        featureText: 'The average volume fraction of carbon dioxide in the inhaled gas during the rated duration, not more',
        featureValue: '1,5%',
      },
      {
        featureText: 'The volume of the breathing bag, not less',
        featureValue: '6 L',
      },
      {
        featureText: 'Overall dimensions (without waist and shoulder straps or bag), standard configuration:',
        featureValue: '',
      },
    ],
    order: [
      {
        orderText: 'CARBO 30',
        orderValue: 'S-30MP1-ISG-EUENEU-WK(O)',
      },
      {
        orderText: 'CARBO-30T',
        orderValue: 'T-0MP0-ISG-EUENEU-WK',
      },
      {
        orderText: 'Shoulder belt',
        orderValue: 'SKTB.02.KPP.00.00.000-07',
      },
      {
        orderText: 'Waist belt',
        orderValue: 'DWB.45.00.000',
      },
      {
        orderText: 'Front bumper',
        orderValue: 'SKTB.02.CK5.00.00.006',
      },
      {
        orderText: 'Rear bumper',
        orderValue: 'SKTB.02.CK5.00.00.003',
      },
      {
        orderText: 'Belt loops',
        orderValue: 'SKTB.02.CK5.00.00.004',
      },
      {
        orderText: 'Belt loops fixators set',
        orderValue: 'SKTB.02.CK5.00.00.005, SKTB.02.CK5.00.00.005-01',
      }
    ],
  },
  {
    id: 12554125,
    url: '#',
    mainPhoto: 'https://en.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/6/9/b/69b60312361e0e07e9425a06c583cdf80208b700/dezega_slide_5.jpg',
    photo: [
      'https://en.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/6/9/b/69b60312361e0e07e9425a06c583cdf80208b700/dezega_slide_5.jpg',
      'https://static.wixstatic.com/media/c26854_e78c04ecc3cd449e9e07ae82369f2787~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
      'https://ru.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/8/2/b/82bc56c4408e72961efe8a222a64a1b8ebf181c0/dezega_slide_7.jpg'
    ],
    title: 'DEZEGA self-contained self-rescuer CARBO 30',
    text: 'This self-rescuer is particularly suitable for short evacuation routes and has the lightest weight among the 30-minute...',
    textDescription: 'This self-rescuer is particularly suitable for short evacuation routes and has the lightest weight among the 30-minute self-rescuers by DEZEGA. It can be worn either on the waist belt or on the shoulder straps, providing comfortable breathing during evacuation. The activation procedure is identical to the CARBO 60, which has already established itself in the market. The starting device activates immediately upon lid removal, allowing the user to start breathing within the first few seconds after activation.',
    textDescripitonLi: [
      {
        textUl: 'Ergonomics during everyday carrying:',
        textLi: [
          'large area of contact with the user',
          'balanced weight distribution',
          'comfortable shoulder belt',
          'suitable for use with most types of waist belts',
        ],
      },
      {
        textUl: 'Comfortable breathing:',
        textLi: [
          'low heat capacity of the inhaled gas', 'low breathing resistance', 'low temperature of the inhaled gas'
        ],
      }
    ],
    textDescriptionP: [
      'An automatic starter that activates during lid removal',
      'The training unit is available for practicing donning and breathing techniques',
      'Elimination of initial loss of oxygen volume',
      'The layout method keeps the breathing system from being damaged or stuck together',
      'Starter operates in wide temperature ranges',
      'The relief valve is located in a protected place',
      'Elimination of leakage due to spring-loaded tensioning coupling straps',
      'Possibility to perform minor repairs directly at the mine (belt loops and bumpers replacement)',
      'There is a lightweight version available for use with a pouch.'
    ],
    feature: [
      {
        featureText: 'Rated duration in accordance with EN 13794:2002, IS 15803:2008 and AS/NZS 1716:2012 at lung ventilation, not less:',
        featureValue: '',
      },
      {
        featureText: '- 10 l/min',
        featureValue: '90 min',
      },
      {
        featureText: '- 35 l/min',
        featureValue: '30 min',
      },
      {
        featureText: 'Breathing resistance (at inhalation or exhalation) during operation, max',
        featureValue: '1,0 kPa',
      },
      {
        featureText: 'The temperature of the inhaled gas, °C, not more',
        featureValue: '50 °С',
      },
      {
        featureText: 'The volume of oxygen in the inhaled gas during the rated duration, not less',
        featureValue: '21%',
      },
      {
        featureText: 'The maximum volume fraction of carbon dioxide in the inhaled gas, not more',
        featureValue: '3%',
      },
      {
        featureText: 'The average volume fraction of carbon dioxide in the inhaled gas during the rated duration, not more',
        featureValue: '1,5%',
      },
      {
        featureText: 'The volume of the breathing bag, not less',
        featureValue: '6 L',
      },
      {
        featureText: 'Overall dimensions (without waist and shoulder straps or bag), standard configuration:',
        featureValue: '',
      },
    ],
    order: [
      {
        orderText: 'CARBO 30',
        orderValue: 'S-30MP1-ISG-EUENEU-WK(O)',
      },
      {
        orderText: 'CARBO-30T',
        orderValue: 'T-0MP0-ISG-EUENEU-WK',
      },
      {
        orderText: 'Shoulder belt',
        orderValue: 'SKTB.02.KPP.00.00.000-07',
      },
      {
        orderText: 'Waist belt',
        orderValue: 'DWB.45.00.000',
      },
      {
        orderText: 'Front bumper',
        orderValue: 'SKTB.02.CK5.00.00.006',
      },
      {
        orderText: 'Rear bumper',
        orderValue: 'SKTB.02.CK5.00.00.003',
      },
      {
        orderText: 'Belt loops',
        orderValue: 'SKTB.02.CK5.00.00.004',
      },
      {
        orderText: 'Belt loops fixators set',
        orderValue: 'SKTB.02.CK5.00.00.005, SKTB.02.CK5.00.00.005-01',
      }
    ],
  },
  {
    id: 91253673,
    url: '#',
    mainPhoto: 'https://en.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/5/3/3/53320b5c13d998c00c7de653d3f1d9c9888bb770/dezega_slide_6.jpg',
    photo: [
      'https://en.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/5/3/3/53320b5c13d998c00c7de653d3f1d9c9888bb770/dezega_slide_6.jpg',
      'https://static.wixstatic.com/media/c26854_e78c04ecc3cd449e9e07ae82369f2787~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
      'https://ru.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/8/2/b/82bc56c4408e72961efe8a222a64a1b8ebf181c0/dezega_slide_7.jpg'
    ],
    title: 'Compressed oxygen self-contained closed-circuit breathing apparatus DEZEGA P-70',
    text: 'The P-70 is a respiratory protection device - compressed oxygen self-contained closed-circuit breathing apparatus...',
    textDescription: 'The P-70 is a respiratory protection device - compressed oxygen self-contained closed-circuit breathing apparatus. P-70 is the next-generation positive pressure breathing apparatus designed based on new safety and production principles. With new materials and high-tech design solutions, DEZEGA has significantly improved the technical characteristics and reliability of the breathing apparatus.',
    textDescripitonLi: [
      {
        textUl: 'Ergonomics during everyday carrying:',
        textLi: [
          'Nominal working duration of 4 hours.',
          'Positive pressure in the breathing circuit',
          'Lightest and smallest on the market',
          'Robust casing',
          'Simple and reliable mechanical structure based on 37 years of experience',
          'Possible to change cooling elements without doffing the breathing apparatus',
          'Automatic control and alarm system',
          'Estimated duration time calculation',
          'Personal ID card, data collection and sharing',
          'Ergonomic harness system',
          'Does not require special tools for assembling and daily maintenance',
          'Low total cost of ownership'
        ],
      },
    ],
    textDescriptionP: [
      'Compressed oxygen self-contained closed-circuit breathing apparatus P-70 is enhanced by smart onboard electronics,',
      'which provides a self-checks, warnings and alarms when there is a risk for the user,',
      'monitors the team status via special RFID tags with unique code of the user,',
      'and also calculate the estimate working duration.',
      'With high contrast, full-color display, user data is visible even in the most difficult environments such as darkness,',
      'bright sunlight, or smoke.',
      'Design of breathing apparatus allows user to assemble,',
      'disassemble and maintain the unit without any tools.',
      'A special fireproof and comfortable harness system with lumbar rotation allows the user to choose the height of the waist belt,',
      'and rotate the belt to not shift the center of gravity and facilitate the work to the user.'
    ],
    feature: [
      {
        featureText: 'Rated duration in accordance with EN 13794:2002, IS 15803:2008 and AS/NZS 1716:2012 at lung ventilation, not less:',
        featureValue: '',
      },
      {
        featureText: '- 10 l/min',
        featureValue: '90 min',
      },
      {
        featureText: '- 35 l/min',
        featureValue: '30 min',
      },
      {
        featureText: 'Breathing resistance (at inhalation or exhalation) during operation, max',
        featureValue: '1,0 kPa',
      },
      {
        featureText: 'The temperature of the inhaled gas, °C, not more',
        featureValue: '50 °С',
      },
      {
        featureText: 'The volume of oxygen in the inhaled gas during the rated duration, not less',
        featureValue: '21%',
      },
      {
        featureText: 'The maximum volume fraction of carbon dioxide in the inhaled gas, not more',
        featureValue: '3%',
      },
      {
        featureText: 'The average volume fraction of carbon dioxide in the inhaled gas during the rated duration, not more',
        featureValue: '1,5%',
      },
      {
        featureText: 'The volume of the breathing bag, not less',
        featureValue: '6 L',
      },
      {
        featureText: 'Overall dimensions (without waist and shoulder straps or bag), standard configuration:',
        featureValue: '',
      },
    ],
    order: [
      {
        orderText: 'CARBO 30',
        orderValue: 'S-30MP1-ISG-EUENEU-WK(O)',
      },
      {
        orderText: 'CARBO-30T',
        orderValue: 'T-0MP0-ISG-EUENEU-WK',
      },
      {
        orderText: 'Shoulder belt',
        orderValue: 'SKTB.02.KPP.00.00.000-07',
      },
      {
        orderText: 'Waist belt',
        orderValue: 'DWB.45.00.000',
      },
      {
        orderText: 'Front bumper',
        orderValue: 'SKTB.02.CK5.00.00.006',
      },
      {
        orderText: 'Rear bumper',
        orderValue: 'SKTB.02.CK5.00.00.003',
      },
      {
        orderText: 'Belt loops',
        orderValue: 'SKTB.02.CK5.00.00.004',
      },
      {
        orderText: 'Belt loops fixators set',
        orderValue: 'SKTB.02.CK5.00.00.005, SKTB.02.CK5.00.00.005-01',
      }
    ],
  },
  {
    id: 53246347,
    url: '#',
    mainPhoto: 'https://image.ec21.com/image/dezega/oimg_GC09983402_CA09983414/DEZEGA-Compressed-Oxygen-Self-contained-Closed-circuit-Breathing-Apparatus--P-30EX.jpg',
    photo: [
      'https://image.ec21.com/image/dezega/oimg_GC09983402_CA09983414/DEZEGA-Compressed-Oxygen-Self-contained-Closed-circuit-Breathing-Apparatus--P-30EX.jpg',
      'https://ru.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/8/2/b/82bc56c4408e72961efe8a222a64a1b8ebf181c0/dezega_slide_7.jpg',
      'https://en.tdspasatel.ru/htimg/display/item-attach-big/?relativePath=/upload/gaufrette/5/3/3/53320b5c13d998c00c7de653d3f1d9c9888bb770/dezega_slide_6.jpg',
    ],
    title: 'Compressed oxygen self-contained closed-circuit breathing apparatus DEZEGA CARBO-60',
    text: 'The CARBO-60 is a respiratory protection device - compressed oxygen self-contained closed-circuit breathing apparatus...',
    textDescription: 'The P-70 is a respiratory protection device - compressed oxygen self-contained closed-circuit breathing apparatus. P-70 is the next-generation positive pressure breathing apparatus designed based on new safety and production principles. With new materials and high-tech design solutions, DEZEGA has significantly improved the technical characteristics and reliability of the breathing apparatus.',
    textDescripitonLi: [
      {
        textUl: 'Ergonomics during everyday carrying:',
        textLi: [
          'Nominal working duration of 4 hours.',
          'Positive pressure in the breathing circuit',
          'Lightest and smallest on the market',
          'Robust casing',
          'Simple and reliable mechanical structure based on 37 years of experience',
          'Possible to change cooling elements without doffing the breathing apparatus',
          'Automatic control and alarm system',
          'Estimated duration time calculation',
          'Personal ID card, data collection and sharing',
          'Ergonomic harness system',
          'Does not require special tools for assembling and daily maintenance',
          'Low total cost of ownership'
        ],
      },
    ],
    textDescriptionP: [
      'Compressed oxygen self-contained closed-circuit breathing apparatus P-70 is enhanced by smart onboard electronics,',
      'which provides a self-checks, warnings and alarms when there is a risk for the user,',
      'monitors the team status via special RFID tags with unique code of the user,',
      'and also calculate the estimate working duration.',
      'With high contrast, full-color display, user data is visible even in the most difficult environments such as darkness,',
      'bright sunlight, or smoke.',
      'Design of breathing apparatus allows user to assemble,',
      'disassemble and maintain the unit without any tools.',
      'A special fireproof and comfortable harness system with lumbar rotation allows the user to choose the height of the waist belt,',
      'and rotate the belt to not shift the center of gravity and facilitate the work to the user.'
    ],
    feature: [
      {
        featureText: 'Rated duration in accordance with EN 13794:2002, IS 15803:2008 and AS/NZS 1716:2012 at lung ventilation, not less:',
        featureValue: '',
      },
      {
        featureText: '- 10 l/min',
        featureValue: '90 min',
      },
      {
        featureText: '- 35 l/min',
        featureValue: '30 min',
      },
      {
        featureText: 'Breathing resistance (at inhalation or exhalation) during operation, max',
        featureValue: '1,0 kPa',
      },
      {
        featureText: 'The temperature of the inhaled gas, °C, not more',
        featureValue: '50 °С',
      },
      {
        featureText: 'The volume of oxygen in the inhaled gas during the rated duration, not less',
        featureValue: '21%',
      },
      {
        featureText: 'The maximum volume fraction of carbon dioxide in the inhaled gas, not more',
        featureValue: '3%',
      },
      {
        featureText: 'The average volume fraction of carbon dioxide in the inhaled gas during the rated duration, not more',
        featureValue: '1,5%',
      },
      {
        featureText: 'The volume of the breathing bag, not less',
        featureValue: '6 L',
      },
      {
        featureText: 'Overall dimensions (without waist and shoulder straps or bag), standard configuration:',
        featureValue: '',
      },
    ],
    order: [
      {
        orderText: 'CARBO 30',
        orderValue: 'S-30MP1-ISG-EUENEU-WK(O)',
      },
      {
        orderText: 'CARBO-30T',
        orderValue: 'T-0MP0-ISG-EUENEU-WK',
      },
      {
        orderText: 'Shoulder belt',
        orderValue: 'SKTB.02.KPP.00.00.000-07',
      },
      {
        orderText: 'Waist belt',
        orderValue: 'DWB.45.00.000',
      },
      {
        orderText: 'Front bumper',
        orderValue: 'SKTB.02.CK5.00.00.006',
      },
      {
        orderText: 'Rear bumper',
        orderValue: 'SKTB.02.CK5.00.00.003',
      },
      {
        orderText: 'Belt loops',
        orderValue: 'SKTB.02.CK5.00.00.004',
      },
      {
        orderText: 'Belt loops fixators set',
        orderValue: 'SKTB.02.CK5.00.00.005, SKTB.02.CK5.00.00.005-01',
      }
    ],
  },

])
const filterProduct = ref([])

//

const descriptionLi = (text) => {
  if (text.length === 0) {
    return false
  } else {
    return true
  }
}

// v-tab

const tab = ref('one')

//

const heightFuncInCarousel = () => {
  if (name.value === 'xs') {
    return '350'
  } else if (name.value === 'sm') {
    return '350'
  } else if (name.value === 'md') {
    return '350'
  } else if (name.value === 'lg') {
    return '400'
  } else if (name.value === 'xl') {
    return '550'
  } else if (name.value === 'xxl') {
    return '550'
  }
}


onMounted(async () => {
  const currentUrl = ref(router.currentRoute.value.params);
  const idNumber = ref(Number(currentUrl.value))
  await fetchIdProduct(currentUrl.value)
  filterProduct.value = JSON.parse(localStorage.getItem('productId'))
})


</script>

<template>

  <div class="wrapProductId" v-for="i in filterProduct">

    <div class="topContent">
      <div class="topPhotoContent">
        <v-carousel
            class="topPhotoContentVCarousel"
            :height="heightFuncInCarousel()"
            progress="primary"
            show-arrows="hover"
            hide-delimiters
        >
          <v-carousel-item
              class="topPhotoContentVCarouselItem"
              v-for="(slide, i) in i.photo"
              :key="i"
          >
            <div class="imgCarouselDiv">
              <img class="imgCarousel" :src="slide" alt="">
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="topTextContent">
        <div class="topTextContentTitleDiv">
          <h1 class="topTextContentTitle">{{ i.title }}</h1>
        </div>
        <div class="topTextContentSubtitleDiv">
          <p class="topTextContentSubtitle">{{ i.textDescription }}</p>
        </div>
      </div>
    </div>

    <div class="middleContent">
      <div class="middleContentVTab">
        <v-tabs
            v-model="tab"
            color="primary"
        >
          <v-tab hide-slider
                 class="middleContentVTabDescription" value="description">Description
          </v-tab>
          <v-tab hide-slider class="middleContentVTabFeature" value="feature">Feature</v-tab>
          <v-tab hide-slider class="middleContentVTabFiles" value="files">Files</v-tab>
        </v-tabs>

        <v-window v-model="tab">
          <v-window-item value="description">

            <div class="descriptionDiv">
              <h1 class="descriptionTitle">CHARACTERISTICS AND ADVANTAGES</h1>
              <div class="descriptionUlLiDiv" v-for="text in i.textDescripitonLi">
                <div class="descriptionLi" v-if="descriptionLi(text.textUl)">
                  <h1 class="descriptionUl">{{ text.textUl }}</h1>
                  <p class="descriptionLiText" v-for="textLi in text.textLi">
                    <v-icon class="descriptionIcon" icon="fa-regular fa-thumbs-up"></v-icon>
                    {{ textLi }}
                  </p>
                </div>
              </div>
              <div class="descriptionMiddleInfoDiv">
                <p class="descriptionMiddleInfoP" v-for="textInfo in i.textDescriptionP">{{ textInfo }}</p>
              </div>
            </div>
            <h1 class="descriptionTitleSecond">Available for order</h1>
            <v-table class="descriptionComponentVTable" density="compact">
              <tbody>
              <tr
                  v-for="item in i.order"
                  :key="item"
              >
                <td class="descriptionVTableText">{{ item.orderText }}</td>
                <td class="descriptionVTableValue">{{ item.orderValue }}</td>
              </tr>
              </tbody>
            </v-table>

          </v-window-item>
          <v-window-item value="feature">
            <div class="descriptionComponentVTableDiv">
              <v-table class="descriptionComponentVTable" density="compact">
                <tbody>
                <tr
                    v-for="item in i.feature"
                    :key="item"
                >
                  <td class="descriptionVTableText">{{ item.featureText }}</td>
                  <td class="descriptionVTableValue">{{ item.featureValue }}</td>
                </tr>
                </tbody>
              </v-table>
            </div>
          </v-window-item>
          <v-window-item value="files">
            <h1>None</h1>
          </v-window-item>
        </v-window>

      </div>
    </div>

  </div>

</template>

<style scoped lang="scss">
@import '../../assets/mixins.scss';

//

@media screen and (max-width: 376px) {

  .wrapProductId {
    width: 95%;
    min-height: 200vh;
    padding: 0;
    margin: 0 auto 50px;
  }

  // top

  .topContent {
    width: 100%;
    min-height: 50vh;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    //background-color: rgba(182, 181, 181, 0.45);
    background: transparent;
  }


  .topPhotoContent {
    width: 100%;
    min-height: 450px;
    background-color: #FFFFFF;
  }

  .topPhotoContentVCarousel {
    width: 100%;
  }

  .topPhotoContentVCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarouselDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarousel {
    width: 60%;
  }

  // Top

  .topTextContent {
    width: 100%;
    min-height: 350px;
    background-color: #FFFFFF;

  }

  .topTextContentTitleDiv {
    width: 100%;
    min-height: 15%;
    padding: 10px;
    text-align: center;
    //background-color: rgba(142, 142, 142, 0.47);
  }

  .topTextContentTitle {
    font-size: 1.3rem;
    font-weight: 580;
    line-height: 1.3;
    color: $primary;

  }

  .topTextContentSubtitleDiv {
    width: 100%;
    min-height: 45%;
    padding: 10px;
  }

  .topTextContentSubtitle {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    color: $primary;
  }

  // middle

  .middleContent {
    width: 100%;
    min-height: 100vh;
    margin-top: 35px;
    //background-color: red;
    background-color: rgba(236, 236, 236, 0.65);
  }

  .middleContentVTab {
    width: 100%;
  }

  .v-tabs--density-default {
    --v-tabs-height: 50px;
  }

  .middleContentVTabDescription, .middleContentVTabFeature, .middleContentVTabFiles {
    color: $surface;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 4px;
  }

  .middleContentVTabDescription {
    width: 35%;
  }

  .middleContentVTabFeature {
    width: 30%;
  }

  .middleContentVTabFiles {
    width: 35%
  }

  .v-window {
    transition: none !important;
    padding: 15px;
  }

  .v-window-item, .v-window-item--active {
    transition: none !important;
  }

  .descriptionDiv {
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
  }

  .descriptionTitle {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 2px;
    text-align: center;
    color: $surface;
  }

  .descriptionUlLiDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionLi {
    width: 100%;
  }

  .descriptionUl {
    font-size: 1.3rem;
    font-weight: 550;
    letter-spacing: 1px;
    color: $primary;
  }

  .descriptionLiText {
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: $background;
  }

  .descriptionIcon {
    font-size: 1rem;
    margin-right: 7px;
    color: $primary;
  }

  .descriptionMiddleInfoDiv {
    width: 100%;
    margin-top: 30px;
  }

  .descriptionMiddleInfoP {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: $background;
  }

  //

  .descriptionTitleSecond {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 40px 0 40px 0;
    color: $surface;
  }

  .descriptionComponentVTableDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionComponentVTable {
    color: $primary;
    background-color: rgba(223, 222, 222, 0.68);
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1rem;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    height: 50px;
  }

}

@media screen and (min-width: 376px) and (max-width: 600px) {

  .wrapProductId {
    width: 95%;
    min-height: 200vh;
    padding: 0;
    margin: 0 auto 50px;
  }

  // top

  .topContent {
    width: 100%;
    min-height: 50vh;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    //background-color: rgba(182, 181, 181, 0.45);
    background: transparent;
  }


  .topPhotoContent {
    width: 100%;
    min-height: 450px;
    background-color: #FFFFFF;
  }

  .topPhotoContentVCarousel {
    width: 100%;
  }

  .topPhotoContentVCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarouselDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarousel {
    width: 60%;
  }

  // Top

  .topTextContent {
    width: 100%;
    min-height: 350px;
    background-color: #FFFFFF;

  }

  .topTextContentTitleDiv {
    width: 100%;
    min-height: 15%;
    padding: 10px;
    text-align: center;
    //background-color: rgba(142, 142, 142, 0.47);
  }

  .topTextContentTitle {
    font-size: 1.3rem;
    font-weight: 580;
    line-height: 1.3;
    color: $primary;

  }

  .topTextContentSubtitleDiv {
    width: 100%;
    min-height: 45%;
    padding: 10px;
  }

  .topTextContentSubtitle {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    color: $primary;
  }

  // middle

  .middleContent {
    width: 100%;
    min-height: 100vh;
    margin-top: 35px;
    //background-color: red;
    background-color: rgba(236, 236, 236, 0.65);
  }

  .middleContentVTab {
    width: 100%;
  }

  .v-tabs--density-default {
    --v-tabs-height: 50px;
  }

  .middleContentVTabDescription, .middleContentVTabFeature, .middleContentVTabFiles {
    color: $surface;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 4px;
  }

  .middleContentVTabDescription {
    width: 35%;
  }

  .middleContentVTabFeature {
    width: 30%;
  }

  .middleContentVTabFiles {
    width: 35%
  }

  .v-window {
    transition: none !important;
    padding: 15px;
  }

  .v-window-item, .v-window-item--active {
    transition: none !important;
  }

  .descriptionDiv {
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
  }

  .descriptionTitle {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 2px;
    text-align: center;
    color: $surface;
  }

  .descriptionUlLiDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionLi {
    width: 100%;
  }

  .descriptionUl {
    font-size: 1.3rem;
    font-weight: 550;
    letter-spacing: 1px;
    color: $primary;
  }

  .descriptionLiText {
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: $background;
  }

  .descriptionIcon {
    font-size: 1rem;
    margin-right: 7px;
    color: $primary;
  }

  .descriptionMiddleInfoDiv {
    width: 100%;
    margin-top: 30px;
  }

  .descriptionMiddleInfoP {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: $background;
  }

  //

  .descriptionTitleSecond {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 40px 0 40px 0;
    color: $surface;
  }

  .descriptionComponentVTableDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionComponentVTable {
    color: $primary;
    background-color: rgba(223, 222, 222, 0.68);
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1rem;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    height: 50px;
  }

}

@media screen and (min-width: 600px) and (max-width: 960px) {

  .wrapProductId {
    width: 90%;
    min-height: 200vh;
    padding: 0;
    margin: 0 auto 50px;
  }

  // top

  .topContent {
    width: 100%;
    min-height: 50vh;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    //background-color: rgba(182, 181, 181, 0.45);
    background: transparent;
  }


  .topPhotoContent {
    width: 100%;
    min-height: 450px;
    background-color: #FFFFFF;
  }

  .topPhotoContentVCarousel {
    width: 100%;
  }

  .topPhotoContentVCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarouselDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarousel {
    width: 45%;
  }

  // Top

  .topTextContent {
    width: 100%;
    min-height: 350px;
    background-color: #FFFFFF;

  }

  .topTextContentTitleDiv {
    width: 100%;
    min-height: 15%;
    padding: 10px;
    text-align: center;
    //background-color: rgba(142, 142, 142, 0.47);
  }

  .topTextContentTitle {
    font-size: 1.5rem;
    font-weight: 580;
    line-height: 1.3;
    color: $primary;

  }

  .topTextContentSubtitleDiv {
    width: 100%;
    min-height: 45%;
    padding: 10px;
  }

  .topTextContentSubtitle {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.6;
    color: $primary;
  }

  // middle

  .middleContent {
    width: 100%;
    min-height: 100vh;
    margin-top: 35px;
    //background-color: red;
    background-color: rgba(236, 236, 236, 0.65);
  }

  .middleContentVTab {
    width: 100%;
  }

  .v-tabs--density-default {
    --v-tabs-height: 50px;
  }

  .middleContentVTabDescription, .middleContentVTabFeature, .middleContentVTabFiles {
    color: $surface;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 4px;
  }

  .middleContentVTabDescription {
    width: 35%;
  }

  .middleContentVTabFeature {
    width: 30%;
  }

  .middleContentVTabFiles {
    width: 35%
  }

  .v-window {
    transition: none !important;
    padding: 30px;
  }

  .v-window-item, .v-window-item--active {
    transition: none !important;
  }

  .descriptionDiv {
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
  }

  .descriptionTitle {
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 4px;
    text-align: center;
    color: $surface;
  }

  .descriptionUlLiDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionLi {
    width: 100%;
  }

  .descriptionUl {
    font-size: 1.4rem;
    font-weight: 550;
    letter-spacing: 1px;
    color: $primary;
  }

  .descriptionLiText {
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: $background;
  }

  .descriptionIcon {
    font-size: 1rem;
    margin-right: 7px;
    color: $primary;
  }

  .descriptionMiddleInfoDiv {
    width: 100%;
    margin-top: 30px;
  }

  .descriptionMiddleInfoP {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: $background;
  }

  //

  .descriptionTitleSecond {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 40px 0 40px 0;
    color: $surface;
  }

  .descriptionComponentVTableDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionComponentVTable {
    color: $primary;
    background-color: rgba(223, 222, 222, 0.68);
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1rem;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    height: 50px;
  }

}

@media screen and (min-width: 960px) and (max-width: 1280px) {

  .wrapProductId {
    width: 90%;
    min-height: 200vh;
    padding: 0;
    margin: 0 auto 50px;
  }

  // top

  .topContent {
    width: 100%;
    min-height: 50vh;
    margin-top: 10vh;
    display: flex;
    align-items: center;

    justify-content: space-between;


    //background-color: rgba(182, 181, 181, 0.45);
    background: transparent;
  }


  .topPhotoContent {
    width: 50%;
    min-height: 450px;
    margin: 20px;
    background-color: #FFFFFF;
  }

  .topPhotoContentVCarousel {
    width: 100%;
  }

  .topPhotoContentVCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarouselDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarousel {
    width: 60%;
  }

  // Top

  .topTextContent {
    width: 50%;
    margin: 20px;
    min-height: 350px;
    background-color: #FFFFFF;

  }

  .topTextContentTitleDiv {
    width: 100%;
    min-height: 15%;
    padding: 10px;
    text-align: center;
    //background-color: rgba(142, 142, 142, 0.47);
  }

  .topTextContentTitle {
    font-size: 1.5rem;
    font-weight: 580;
    line-height: 1.3;
    color: $primary;

  }

  .topTextContentSubtitleDiv {
    width: 100%;
    min-height: 45%;
    padding: 10px;
  }

  .topTextContentSubtitle {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.7;
    color: $primary;
  }

  // middle

  .middleContent {
    width: 100%;
    min-height: 100vh;
    margin-top: 35px;
    //background-color: red;
    background-color: rgba(236, 236, 236, 0.65);
  }

  .middleContentVTab {
    width: 100%;
  }

  .v-tabs--density-default {
    --v-tabs-height: 50px;
  }

  .middleContentVTabDescription, .middleContentVTabFeature, .middleContentVTabFiles {
    color: $surface;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 4px;
  }

  .middleContentVTabDescription {
    width: 30%;
  }

  .middleContentVTabFeature {
    width: 40%;
  }

  .middleContentVTabFiles {
    width: 30%
  }

  .v-window {
    transition: none !important;
    padding: 30px;
  }

  .v-window-item, .v-window-item--active {
    transition: none !important;
  }

  .descriptionDiv {
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
  }

  .descriptionTitle {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 4px;
    text-align: center;
    color: $surface;
  }

  .descriptionUlLiDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionLi {
    width: 100%;
  }

  .descriptionUl {
    font-size: 1.5rem;
    font-weight: 550;
    letter-spacing: 1px;
    color: $primary;
  }

  .descriptionLiText {
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: $background;
  }

  .descriptionIcon {
    font-size: 1rem;
    margin-right: 7px;
    color: $primary;
  }

  .descriptionMiddleInfoDiv {
    width: 100%;
    margin-top: 30px;
  }

  .descriptionMiddleInfoP {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: $background;
  }

  //

  .descriptionTitleSecond {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 40px 0 40px 0;
    color: $surface;
  }

  .descriptionComponentVTableDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionComponentVTable {
    color: $primary;
    background-color: rgba(223, 222, 222, 0.68);
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1rem;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    height: 50px;
  }

}

@media screen and (min-width: 1280px) and (max-width: 1920px) {

  .wrapProductId {
    width: 90%;
    min-height: 200vh;
    padding: 0;
    margin: 0 auto 50px;
  }

  // top

  .topContent {
    width: 100%;
    min-height: 60vh;
    margin-top: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;


    //background-color: rgba(182, 181, 181, 0.45);
    background: transparent;
  }


  .topPhotoContent {
    width: 50%;
    min-height: 450px;
    margin: 20px;
    background-color: #FFFFFF;
  }

  .topPhotoContentVCarousel {
    width: 100%;
  }

  .topPhotoContentVCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarouselDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarousel {
    width: 60%;
  }

  // Top

  .topTextContent {
    width: 50%;
    margin: 20px;
    min-height: 350px;
    background-color: #FFFFFF;

  }

  .topTextContentTitleDiv {
    width: 100%;
    min-height: 15%;
    padding: 10px;
    text-align: center;
    //background-color: rgba(142, 142, 142, 0.47);
  }

  .topTextContentTitle {
    font-size: 1.7rem;
    font-weight: 580;
    line-height: 1.3;
    color: $primary;

  }

  .topTextContentSubtitleDiv {
    width: 100%;
    min-height: 45%;
    padding: 10px;
  }

  .topTextContentSubtitle {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5;
    color: $primary;
  }

  // middle

  .middleContent {
    width: 100%;
    min-height: 100vh;
    margin-top: 35px;
    //background-color: red;
    background-color: rgba(236, 236, 236, 0.65);
  }

  .middleContentVTab {
    width: 100%;
  }

  .v-tabs--density-default {
    --v-tabs-height: 50px;
  }

  .middleContentVTabDescription, .middleContentVTabFeature, .middleContentVTabFiles {
    color: $surface;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 4px;
  }

  .middleContentVTabDescription {
    width: 30%;
  }

  .middleContentVTabFeature {
    width: 40%;
  }

  .middleContentVTabFiles {
    width: 30%
  }

  .v-window {
    transition: none !important;
    padding: 30px;
  }

  .v-window-item, .v-window-item--active {
    transition: none !important;
  }

  .descriptionDiv {
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
  }

  .descriptionTitle {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 4px;
    text-align: center;
    color: $surface;
  }

  .descriptionUlLiDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionLi {
    width: 100%;
  }

  .descriptionUl {
    font-size: 1.5rem;
    font-weight: 550;
    letter-spacing: 1px;
    color: $primary;
  }

  .descriptionLiText {
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: $background;
  }

  .descriptionIcon {
    font-size: 1rem;
    margin-right: 7px;
    color: $primary;
  }

  .descriptionMiddleInfoDiv {
    width: 100%;
    margin-top: 30px;
  }

  .descriptionMiddleInfoP {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: $background;
  }

  //

  .descriptionTitleSecond {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 40px 0 40px 0;
    color: $surface;
  }

  .descriptionComponentVTableDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionComponentVTable {
    color: $primary;
    background-color: rgba(223, 222, 222, 0.68);
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1rem;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    height: 50px;
  }

}

@media screen and (min-width: 1920px) and (max-width: 2560px) {

  .wrapProductId {
    width: 1620px;
    min-height: 200vh;
    padding: 0;
    margin: 0 auto 50px;
  }

  // top

  .topContent {
    width: 100%;
    min-height: 65vh;
    margin-top: 10vh;
    display: flex;
    align-items: center;

    justify-content: space-between;


    //background-color: rgba(182, 181, 181, 0.45);
    background: transparent;
  }


  .topPhotoContent {
    width: 50%;
    min-height: 450px;
    margin: 20px;
    background-color: #FFFFFF;
  }

  .topPhotoContentVCarousel {
    width: 100%;
  }

  .topPhotoContentVCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarouselDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarousel {
    width: 60%;
  }

  // Top

  .topTextContent {
    width: 50%;
    margin: 20px;
    min-height: 350px;
    background-color: #FFFFFF;

  }

  .topTextContentTitleDiv {
    width: 100%;
    min-height: 25%;
    padding: 15px;
    text-align: center;
    //background-color: rgba(142, 142, 142, 0.47);
  }

  .topTextContentTitle {
    font-size: 2.2rem;
    font-weight: 580;
    line-height: 1.3;
    color: $primary;

  }

  .topTextContentSubtitleDiv {
    width: 100%;
    min-height: 45%;
    margin-top: 1%;
    padding: 15px;
  }

  .topTextContentSubtitle {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5;
    color: $primary;
  }

  // middle

  .middleContent {
    width: 100%;
    min-height: 35vh;
    margin-top: 35px;
    //background-color: red;
    background-color: rgba(236, 236, 236, 0.65);
  }

  .middleContentVTab {
    width: 100%;
  }

  .v-tabs--density-default {
    --v-tabs-height: 80px;
  }

  .middleContentVTabDescription, .middleContentVTabFeature, .middleContentVTabFiles {
    color: $surface;
    font-size: 1.7rem;
    font-weight: 600;
    letter-spacing: 4px;
  }

  .middleContentVTabDescription {
    width: 30%;
  }

  .middleContentVTabFeature {
    width: 40%;
  }

  .middleContentVTabFiles {
    width: 30%
  }

  .v-window {
    transition: none !important;
    padding: 30px;
  }

  .v-window-item, .v-window-item--active {
    transition: none !important;
  }

  .descriptionDiv {
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
  }

  .descriptionTitle {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 4px;
    text-align: center;
    color: $surface;
  }

  .descriptionUlLiDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionLi {
    width: 100%;
  }

  .descriptionUl {
    font-size: 2rem;
    font-weight: 550;
    letter-spacing: 1px;
    color: $primary;
  }

  .descriptionLiText {
    margin-top: 4px;
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: $background;
  }

  .descriptionIcon {
    font-size: 1rem;
    margin-right: 7px;
    color: $primary;
  }

  .descriptionMiddleInfoDiv {
    width: 100%;
    margin-top: 30px;
  }

  .descriptionMiddleInfoP {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.5;
    color: $background;
  }

  //

  .descriptionTitleSecond {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 40px 0 40px 0;
    color: $surface;
  }

  .descriptionComponentVTableDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionComponentVTable {
    color: $primary;
    background-color: rgba(223, 222, 222, 0.68);
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1.7rem;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    height: 80px;
  }

}

@media screen and (min-width: 2560px) {

  .wrapProductId {
    width: 1920px;
    min-height: 200vh;
    padding: 0;
    margin-bottom: 50px;
    //box-shadow: 0 15px 20px 1px rgba(46, 46, 46, 0.75);
  }

  // top

  .topContent {
    width: 100%;
    min-height: 45vh;
    margin-top: 15vh;
    display: flex;
    align-items: center;
    justify-content: space-between;


    //background-color: rgba(182, 181, 181, 0.45);
    background: transparent;
  }


  .topPhotoContent {
    width: 50%;
    min-height: 350px;
    margin: 20px;
    background-color: #FFFFFF;
  }

  .topPhotoContentVCarousel {
    width: 100%;
  }

  .topPhotoContentVCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarouselDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarousel {
    width: 60%;
  }

  // Top

  .topTextContent {
    width: 50%;
    margin: 20px;
    min-height: 350px;
    background-color: #FFFFFF;

  }

  .topTextContentTitleDiv {
    width: 100%;
    min-height: 25%;
    padding: 15px;
    text-align: center;
    //background-color: rgba(142, 142, 142, 0.47);
  }

  .topTextContentTitle {
    font-size: 2.5rem;
    font-weight: 580;
    line-height: 1.3;
    color: $primary;

  }

  .topTextContentSubtitleDiv {
    width: 100%;
    min-height: 45%;
    margin-top: 5%;
    padding: 15px;
  }

  .topTextContentSubtitle {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.5;
    color: $primary;
  }

  // middle

  .middleContent {
    width: 100%;
    min-height: 35vh;
    margin-top: 35px;
    //background-color: red;
    background-color: rgba(236, 236, 236, 0.65);
  }

  .middleContentVTab {
    width: 100%;
  }

  .v-tabs--density-default {
    --v-tabs-height: 80px;
  }

  .middleContentVTabDescription, .middleContentVTabFeature, .middleContentVTabFiles {
    color: $surface;
    font-size: 1.7rem;
    font-weight: 600;
    letter-spacing: 4px;
  }

  .middleContentVTabDescription {
    width: 30%;
  }

  .middleContentVTabFeature {
    width: 40%;
  }

  .middleContentVTabFiles {
    width: 30%
  }

  .v-window {
    transition: none !important;
    padding: 30px;
  }

  .v-window-item, .v-window-item--active {
    transition: none !important;
  }

  .descriptionDiv {
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
  }

  .descriptionTitle {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 4px;
    text-align: center;
    color: $surface;
  }

  .descriptionUlLiDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionLi {
    width: 100%;
  }

  .descriptionUl {
    font-size: 2rem;
    font-weight: 550;
    letter-spacing: 1px;
    color: $primary;
  }

  .descriptionLiText {
    margin-top: 4px;
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: $background;
  }

  .descriptionIcon {
    font-size: 1rem;
    margin-right: 7px;
    color: $primary;
  }

  .descriptionMiddleInfoDiv {
    width: 100%;
    margin-top: 30px;
  }

  .descriptionMiddleInfoP {
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 1.5;
    color: $background;
  }

  //

  .descriptionTitleSecond {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 40px 0 40px 0;
    color: $surface;
  }

  .descriptionComponentVTableDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionComponentVTable {
    color: $primary;
    background-color: rgba(223, 222, 222, 0.68);
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1.7rem;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    height: 80px;
  }

}

</style>