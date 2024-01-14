import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FAQsComponent {
  faqData = [
    { id: 1, question: 'What is a COVID-19 vaccine?', answer: 'A COVID-19 vaccine is a preparation that helps to provide immunity against COVID-19. It stimulates the immune system to produce antibodies, protecting against the virus.', active: false },
    { id: 2, question: 'Are COVID-19 vaccines safe?', answer: 'Yes, COVID-19 vaccines approved for use have undergone rigorous testing in clinical trials to ensure safety and efficacy. They meet strict standards for safety, quality, and effectiveness.', active: false },
    { id: 3, question: 'How do COVID-19 vaccines work?', answer: 'Most COVID-19 vaccines work by teaching the immune system to recognize and fight the virus. They do not contain the live virus that causes COVID-19.', active: false },
    { id: 4, question: 'Who should get the COVID-19 vaccine?', answer: 'COVID-19 vaccines are recommended for eligible individuals according to government guidelines. Priority is often given to healthcare workers, older adults, and those with underlying health conditions.', active: false },
    { id: 5, question: 'What are the side effects of COVID-19 vaccines?', answer: 'Common side effects of COVID-19 vaccines may include soreness at the injection site, fatigue, headache, muscle pain, fever, and chills. These usually resolve within a few days.', active: false },
    { id: 6, question: 'How many doses of the COVID-19 vaccine are required?', answer: 'The number of doses depends on the specific vaccine. Some vaccines require two doses, administered several weeks apart, while others may be single-dose vaccines.', active: false },
    { id: 7, question: 'Can I get COVID-19 after being vaccinated?', answer: 'While COVID-19 vaccines are highly effective, no vaccine provides 100% protection. It is possible to get infected after vaccination, but the illness is usually milder.', active: false },
    { id: 8, question: 'How long does immunity from COVID-19 vaccines last?', answer: 'The duration of immunity from COVID-19 vaccines is still being studied. Additional booster doses may be recommended in the future to enhance and extend protection.', active: false },
    { id: 9, question: 'Are COVID-19 vaccines effective against new variants?', answer: 'COVID-19 vaccines remain effective against many variants, but their efficacy against new variants may vary. Scientists continue to monitor the effectiveness of vaccines against emerging variants.', active: false },
    { id: 10, question: 'Do COVID-19 vaccines have long-term effects?', answer: 'COVID-19 vaccines have undergone extensive testing for safety. However, long-term effects are continually monitored as part of ongoing vaccine safety surveillance.', active: false },
    { id: 11, question: 'Can I take other medications before or after getting the vaccine?', answer: 'It is generally safe to take most medications before or after vaccination. However, consult a healthcare professional for specific guidance if you have concerns.', active: false },
    { id: 12, question: 'Can pregnant or breastfeeding women receive the COVID-19 vaccine?', answer: 'Pregnant or breastfeeding women should discuss vaccination with their healthcare provider to weigh the potential benefits and risks based on available data.', active: false },
    { id: 13, question: 'Where can I get the COVID-19 vaccine?', answer: 'COVID-19 vaccination sites may include healthcare facilities, vaccination centers, pharmacies, and clinics. Check local health authorities for information on vaccination locations.', active: false },
    { id: 14, question: 'Do I still need to follow safety measures after vaccination?', answer: 'While vaccinated individuals have some protection, it is essential to continue following safety measures like wearing masks, practicing social distancing, and adhering to public health guidelines.', active: false },
    { id: 15, question: 'Can I choose which COVID-19 vaccine I receive?', answer: 'In some cases, individuals may have a choice of vaccine based on availability and eligibility. However, it is recommended to take any approved vaccine offered to you for protection.', active: false },
    // Add more FAQs as needed
  ];
  
  
  toggleAccordion(id: number) {
    this.faqData = this.faqData.map(item => {
      if (item.id === id) {
        return { ...item, active: !item.active };
      }
      return { ...item, active: false };
    });
  }
  
}
