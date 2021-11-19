import './swipe.js';
import './photos.js';

import '../scss/index.scss'

const box1 = document.querySelector('.boks-1');
const box2 = document.querySelector('.boks-2');
const box3 = document.querySelector('.boks-3');
const box4 = document.querySelector('.boks-4');
const table = document.getElementById('tableHours')
const quickContact = document.getElementById('quickContact')
const aboutUsHeader = document.querySelector('.section2 h1')
const aboutUsText = document.getElementById('aboutText')
const iconsBlock = document.querySelector('.icons-block');
const iconsBlockText = document.querySelector('.icons-block-text')
const elements = document.querySelectorAll(['.table-wrapper','.contact','.address']);
const inputs = document.querySelectorAll('.addedImg label');
const priceEstimate = document.querySelector('.form h4')

const pricelistHeading = document.querySelector('.pricelist .heading');
const pricelistGroup = document.querySelector('.pricelist .price-group');

const addImgBoxes = document.querySelector('.addedImg');
const formular = document.querySelector('.formular');
const formularBottom = document.querySelector('.formular+div');

const realizationHeader = document.querySelector('.realizations-heading')

const joinUsPic = document.querySelector('img[alt="join-us"]');
const socials = document.querySelector('.socials');
const footerTable = document.querySelector('.hours')
const footerLogo = document.querySelector('.footerLogo')


let siteElements = [box1,box2,box3,box4,table,quickContact,aboutUsHeader,aboutUsText,iconsBlock,iconsBlockText,pricelistHeading,pricelistGroup,priceEstimate,addImgBoxes,formular,formularBottom,realizationHeader,joinUsPic,socials,footerTable,footerLogo]

siteElements = siteElements.map(element =>{
 const obj={
    elementDOM : element,
    isScrolled : false,
    height: null,
  }
  return obj
})

inputs.forEach(input=>{
  input.addEventListener('click', (event)=>{
    if(window.innerWidth < 746) event.preventDefault()
  })
})


setInterval(()=>{
  elements.forEach(element => {
    element.classList.toggle('invisibleBorder');
  })
}, 500)


window.addEventListener('scroll', ()=>{
  const scrollWindow = window.scrollY;
  
  siteElements.forEach(item => {
    // if(item.elementDOM.id === "aboutText") item.height = item.elementDOM.offsetTop + item.elementDOM.offsetHeight - window.innerHeight * 1.5;
    // else item.height = item.elementDOM.offsetTop + item.elementDOM.offsetHeight - window.innerHeight;

    item.height = item.elementDOM.offsetTop + item.elementDOM.offsetHeight - window.innerHeight * 1.40;

    if(scrollWindow > item.height && !item.isScrolled ){
      item.elementDOM.classList.add('active');
      item.isScrolled = true;
    } else if(scrollWindow < item.height && item.isScrolled ){
      item.elementDOM.classList.remove('active');
      item.isScrolled = false;
    }
  })
})