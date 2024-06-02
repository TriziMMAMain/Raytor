<script setup="">
import {ref} from 'vue'

// lodash
import _ from 'lodash'

// display
import {useDisplay} from 'vuetify'
const {name} = useDisplay()

// router
import {useRouter} from 'vue-router'
const router = useRouter()

// notification
import {ProcessingError} from "../notification/toasting.js";

import photoProducts from '../assets/photo/photo380x250.jpg'

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
const productsFilter = ref([
  {
    title: 'STANDARD',
    text: ['En', 'DSTU', 'IS', 'SANS', 'Others'],
  },
  {
    title: 'MANUFACTURER',
    text: ['DEZEGA SP', 'DONSORB'],
  },
  {
    title: 'FIELD',
    text: ['SCSR', 'Closed-circuit SCBA', 'Emergency escape hood', 'Auxiliary equipment'],
  }
])

const titleLink = () => {
  window.location.reload()
}

const checkboxChange = () => {
  console.log(vCheckboxValue.value);
}
const vCheckboxValue = ref([])
const heightFuncInCarousel = () => {
  if (name.value === 'xs') {
    return '50'
  } else if (name.value === 'sm') {
    return '50'
  } else if (name.value === 'md') {
    return '50'
  } else if (name.value === 'lg') {
    return '50'
  } else if (name.value === 'xl') {
    return '50'
  } else if (name.value === 'xxl') {
    return '60'
  }
}
const sizeFuncPaginator = () => {
  if (name.value === 'xs') {
    return 'small'
  } else if (name.value === 'sm') {
    return 'large'
  } else if (name.value === 'md') {
    return 'x-large'
  } else if (name.value === 'lg') {
    return 'x-large'
  } else if (name.value === 'xl') {
    return 'x-large'
  } else if (name.value === 'xxl') {
    return 'x-large'
  }
}
const page = ref(1)

//
const filteredId = ref([])
const transitionToHref = async (id) => {
  filteredId.value = _.filter(productsList.value, {id: id})
  console.log(filteredId.value.length);
  if (filteredId.value.length >= 1) {
    const filterId = filteredId.value[0].id
    console.log(filterId);
    localStorage.setItem("filter_id", JSON.stringify(filterId))
    await router.push(`/product/id/${id}`)

  } else {
    ProcessingError('Error')
  }

}

</script>

<template>
  <div class="wrap_main">
    <div class="filter_menu">

      <h1 class="filter_menu_title">FILTER</h1>

      <v-expansion-panels variant="accordion">
        <v-expansion-panel
            v-for="i in productsFilter"
            :key="i"
        >
          <v-expansion-panel-title>
            <h1 class="v-expansion-panel-title-h1">{{ i.title }}</h1>
          </v-expansion-panel-title>

          <v-expansion-panel-text>
            <div class="v-expansion-panel-text-div">
              <v-checkbox color="primary" v-model="vCheckboxValue" v-for="textValue in i.text"
                          :value="textValue"
                          @change="checkboxChange()">
                <template v-slot:label>
                  <p class="v_checkbox_label">
                    {{ textValue }}
                  </p>
                </template>
              </v-checkbox>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>


    </div>

    <div class="card_catalog">
      <h1 class="title_absolute">CATALOGUE</h1>
      <div class="card_block" v-for="i in productsList">
        <div class="photo_block">
          <img class="block_img" alt="" :src="i.mainPhoto">
        </div>
        <div class="card_content">
          <div class="content_title">
            <h1 @click="transitionToHref(i.id)" class="card_title">{{ i.title }}</h1>
          </div>
          <div class="content_text">
            <p class="card_text">{{ i.text }}</p>
          </div>

        </div>
        <div class="card_actions">
          <v-btn tag="a" class="v-btn" :height="heightFuncInCarousel()" @click="transitionToHref(i.id)">MORE</v-btn>
        </div>
      </div>
    </div>

    <div class="paginator">
      <v-pagination
          v-model="page"
          rounded="circle"
          :size="sizeFuncPaginator()"
          :total-visible="3"
          :length="5"></v-pagination>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

@media screen and (max-width: 376px) {
  .wrap_main {
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    padding: 35px;
    height: 80px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .v-checkbox {
    width: 50%;
    font-size: 0.9rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1rem;
    font-weight: 800;
    color: $primary;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 350px;
    min-height: 400px;
    margin: 30px 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 60%;
    height: 100%;
  }

  .card_content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 150px;
    padding-top: 20px;
  }

  .card_title {
    font-size: 1.3rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 200px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .card_text {
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn {
    width: 150px;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0;
    letter-spacing: 7px;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 376px) and (max-width: 600px) {
  .wrap_main {
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    padding: 35px;
    height: 80px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .v-checkbox {
    width: 50%;
    font-size: 0.9rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1rem;
    font-weight: 800;
    color: $primary;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 350px;
    min-height: 400px;
    margin: 40px 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 60%;
    height: 100%;
  }

  .card_content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 110px;
    padding-top: 20px;
  }

  .card_title {
    font-size: 1.3rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 170px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .card_text {
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn {
    width: 150px;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0;
    letter-spacing: 7px;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  .wrap_main {
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    padding: 35px;
    height: 80px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .v-checkbox {
    width: 50%;
    font-size: 1.2rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1.3rem;
    font-weight: 800;
    color: $primary;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 350px;
    min-height: 350px;
    margin: 40px 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 60%;
    height: 100%;
  }

  .card_content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 110px;
    padding-top: 20px;
  }

  .card_title {
    font-size: 1.3rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 150px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .card_text {
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn {
    width: 150px;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0;
    letter-spacing: 7px;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  .wrap_main {
    width: 80%;
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    padding: 35px;
    height: 80px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .v-checkbox {
    width: 50%;
    font-size: 1.2rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1.3rem;
    font-weight: 800;
    color: $primary;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card_block {
    width: 350px;
    min-height: 350px;
    margin: 40px 25px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 60%;
    height: 100%;
  }

  .card_content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 110px;
    padding-top: 20px;
  }

  .card_title {
    font-size: 1.3rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 150px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .card_text {
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn {
    width: 150px;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0;
    letter-spacing: 7px;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1920px) {
  .wrap_main {
    width: 80%;
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    padding: 35px;
    height: 80px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .v-checkbox {
    width: 50%;
    font-size: 1.2rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1.3rem;
    font-weight: 800;
    color: $primary;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 400px;
    min-height: 350px;
    margin: 50px 40px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 60%;
    height: 100%;
  }

  .card_content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 110px;
    padding-top: 20px;
  }

  .card_title {
    font-size: 1.3rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 150px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .card_text {
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn {
    width: 150px;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0;
    letter-spacing: 7px;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  .wrap_main {
    width: 85%;
    min-height: 100vh;
    margin: 100px auto;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 5rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 5rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    letter-spacing: 4px;
    padding: 35px;
    height: 100px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .checkboxValue {
    font-size: 5rem;
  }

  .checkboxValueLabel {
    font-size: 1.5rem;
  }

  .v-checkbox {
    width: 50%;
    font-size: 1.5rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1.8rem;
    font-weight: 800;
    color: $primary;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card_block {
    width: 450px;
    min-height: 650px;
    margin: 70px 30px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 70%;
    height: 100%;
  }

  .card_content {
    min-height: 300px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 200px;
    padding-top: 30px;
  }

  .card_title {
    font-size: 1.6rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 200px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .card_text {
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn {
    width: 150px;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 0;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);

  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 2560px) {
  .wrap_main {
    width: 1920px;
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 5rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 5rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    letter-spacing: 4px;
    padding: 35px;
    height: 130px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .checkboxValue {
    font-size: 5rem;
  }

  .checkboxValueLabel {
    font-size: 1.5rem;
  }

  .v-checkbox {
    width: 50%;
    font-size: 1.5rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1.8rem;
    font-weight: 800;
    color: $primary;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card_block {
    width: 450px;
    min-height: 650px;
    margin: 70px 80px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 70%;
    height: 100%;
  }

  .card_content {
    min-height: 300px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 200px;
    padding-top: 30px;
  }

  .card_title {
    font-size: 1.6rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 200px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .card_text {
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn {
    width: 150px;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 0;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

</style>
