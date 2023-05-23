
// let Translate = {
//         home : 'الرئيسية', 
//         aboutus : 'من نحن',
//         aboutus1 : 'عن الشركة',
//         aboutus2 : 'مجموعاتنا',
//         aboutus3 : 'رئيس مجلس الإدارة',
//         aboutus4 : 'مهامنا',
//         aboutus5 : 'رؤيتنا',
//         aboutus6 : 'الأنتماءات',
//         aboutus7 : 'فوائد العملاء',
//         services : 'خدماتنا',
//         ourOffices : 'جميع مكاتبنا',
//         news : 'الأخبار',
//         jobs : 'الوظائف',
//         contact : 'تواصل معنا',
//         lang : 'اللغة',
//     }

// localStorage.setItem('tran' , JSON.stringify(Translate))
// console.log(Translate);


// let ar = document.getElementById('ar'),
//     en = document.getElementById('en')

// let clickar =  ar.addEventListener('click', translationAR);
// let clicken =  en.addEventListener('click', translationEN);



//      function translationAR() {
//         // <!-- ===============================  HEHEADER   ============================= -->
//             document.querySelector('.menu__home').innerHTML = 'الرئيسية'
//             document.querySelector('.menu__about').innerHTML = 'من نحن'
//             document.querySelector('.menu__company').innerHTML = 'عن الشركة'
//             document.querySelector('.menu__ourGroup').innerHTML = 'مجوعاتنا'
//             document.querySelector('.menu__chairman').innerHTML = 'رئيس مجلس الإدارة'
//             document.querySelector('.menu__mission').innerHTML = 'مهامنا'
//             document.querySelector('.menu__vision').innerHTML = 'رؤيتنا'
//             document.querySelector('.menu__affiliations').innerHTML = 'الأنتماءات'
//             document.querySelector('.menu__customers').innerHTML = 'فوائد العملاء'
//             document.querySelector('.menu__services').innerHTML = 'خدماتنا'
//             document.querySelector('.menu__ourOffices').innerHTML = 'جميع مكاتبنا'
//             document.querySelector('.menu__news').innerHTML = 'الأخبار'
//             document.querySelector('.menu__job').innerHTML = 'الوظائف'
//             document.querySelector('.menu__contact').innerHTML = 'تواصل معنا'
//             document.querySelector('.menu__lang').innerHTML = 'االغة'
//             document.querySelector('.menu__lang-en').innerHTML = 'الأنجليزية'
//             document.querySelector('.menu__lang-ar').innerHTML = 'العربية'
//             document.querySelector('.change-theme-name').innerHTML = 'الوضع المظلم'
            
//             // <!--==================== HOME ====================-->
//             document.querySelector('.home__data-subtitle').innerHTML = 'مرحبا بكم في شركة سي باور'
//             document.querySelector('.home__data-title').innerHTML = 'الوكالات البحرية'
//             document.querySelector('.home__data-subtitle-2').innerHTML = 'شركة سي باور هي الشركة الرائدة في مجال <br> الخدمات اللوجستية في المملكة وتقدم أفضل .خدمات <br> الشحن البحري  لعملائها الكرام'
//             document.querySelector('.home__btn').innerHTML = 'الخدمات'

//         }
       


   
        
//     function translationEN() {
//         // <!-- ===========================  HEHEADER   =========================== -->
//          document.querySelector('.menu__home').innerHTML = 'Home'
//          document.querySelector('.menu__about').innerHTML = 'About Us'
//          document.querySelector('.menu__company').innerHTML = 'The Company'
//          document.querySelector('.menu__ourGroup').innerHTML = 'Our Group'
//          document.querySelector('.menu__chairman').innerHTML = 'Chairman Message'
//          document.querySelector('.menu__mission').innerHTML = 'Mission'
//          document.querySelector('.menu__vision').innerHTML = 'Vision'
//          document.querySelector('.menu__affiliations').innerHTML = 'Affiliations'
//          document.querySelector('.menu__customers').innerHTML = 'Customers Benefits'
//          document.querySelector('.menu__services').innerHTML = 'Services'
//          document.querySelector('.menu__ourOffices').innerHTML = 'Our Offices'
//          document.querySelector('.menu__news').innerHTML = 'News'
//          document.querySelector('.menu__job').innerHTML = 'Job'
//          document.querySelector('.menu__contact').innerHTML = 'Contact'
//          document.querySelector('.menu__lang').innerHTML = 'Language'
//          document.querySelector('.menu__lang-en').innerHTML = 'English'
//          document.querySelector('.menu__lang-ar').innerHTML = 'Arabic'
//          document.querySelector('.change-theme-namer').innerHTML = 'Dark mode'

//         //  <!--==================== HOME ====================-->
//         document.querySelector('.home__data-subtitle').innerHTML = 'Welcome To Sea Power Co'
//         document.querySelector('.home__data-title').innerHTML = 'Maritime agencies'
//         document.querySelector('.home__data-subtitle-2').innerHTML = 'Sea Power is the leading logistics provider in the <br> kingdom offering its best Ocean Freight services <br> to their valued customers.'
//         document.querySelector('.home__btn').innerHTML = 'Services'

//     }


function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }