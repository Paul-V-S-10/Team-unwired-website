import React from 'react'
import './ContentDisplay.css'
import Card from '../Card/Card'

const ContentDisplay = () => {
    // cardDetails.js
    const cardDetails = [
        {
            image: "/pr7.jpg",
            altText: "SUPRA SAE India 2023 Car",
            title: "SEENA",
            subtitle: "SUPRA SAE India 2023| Overall AIR 27",
            description: `Bajaj Dominar 400 engine
      Suspension: Front - Pull rod, Rear-Push rod
      Hanging Chassis
      ASI 4130 Chromoly Chassis
      7th in design
      10th in acceleration`,
        },
        {
            image: "/pr6.jpg",
            altText: "Another Car",
            title: "GKDC GO-KART | Overall AIR 3",
            subtitle: "TUW E-KART",
            description: "5KW, 48V PMSM MOTOR, IP67 rated LI-ion NMC battery pack 120AH 48V CAPACITY SKF bearings 1st in Brakes 2nd in Acceleration 2nd in Business PLan",
        },
        {
            image: "/pr8.jpg",
            altText: "Another Car",
            title: "SAE SUPRA 2022 | Overall AIR 24",
            subtitle: "MINNAL",
            description: "Baja Dominar 400 engine ASI 4130 Chromoly Suspension: Front and Rear Pushrod suspension",
        },
        {
            image: "/pr9.jpg",
            altText: "Another Car",
            title: "SAE E-BAJA 2020 | Overall AIR 24",
            subtitle: "ZEUS E-27",
            description: "4.5 kW BLDC motor Battery 110 AH AISI 4130 chromoly chassis 9th in cost 7th in design 10th in acceleration",
        },
        {
            image: "/pr10.jpeg",
            altText: "Another Car",
            title: "SUPRA SAE India 2019 | Overall AIR 24",
            subtitle: "UNLEASHED 5.0",
            description: "KTM Duke 390RC (373.2 cc), 42.90HP@ 9000 RPM, Torsen T-1 Limited Slip Differential AISI 4130 chromoly chassis 9th in cost 7th in design 10th in acceleration",
        },
        {
            image: "/pr6.jpg",
            altText: "Another Car",
            title: "GKDC GO-KART | Overall AIR 3",
            subtitle: "TUW E-KART",
            description: "5KW, 48V PMSM MOTOR, IP67 rated LI-ion NMC battery pack 120AH 48V CAPACITY SKF bearings 1st in Brakes 2nd in Acceleration 2nd in Business PLan",
        },
        {
            image: "/pr6.jpg",
            altText: "Another Car",
            title: "GKDC GO-KART | Overall AIR 3",
            subtitle: "TUW E-KART",
            description: "5KW, 48V PMSM MOTOR, IP67 rated LI-ion NMC battery pack 120AH 48V CAPACITY SKF bearings 1st in Brakes 2nd in Acceleration 2nd in Business PLan",
        },
        {
            image: "/pr6.jpg",
            altText: "Another Car",
            title: "GKDC GO-KART | Overall AIR 3",
            subtitle: "TUW E-KART",
            description: "5KW, 48V PMSM MOTOR, IP67 rated LI-ion NMC battery pack 120AH 48V CAPACITY SKF bearings 1st in Brakes 2nd in Acceleration 2nd in Business PLan",
        },
        {
            image: "/pr6.jpg",
            altText: "Another Car",
            title: "GKDC GO-KART | Overall AIR 3",
            subtitle: "TUW E-KART",
            description: "5KW, 48V PMSM MOTOR, IP67 rated LI-ion NMC battery pack 120AH 48V CAPACITY SKF bearings 1st in Brakes 2nd in Acceleration 2nd in Business PLan",
        },
        // Add more card objects as needed
    ];
    return (
        <div className='contentDisplay'>
            {cardDetails.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    altText={card.altText}
                    title={card.title}
                    subtitle={card.subtitle}
                    description={card.description}
                />
            ))}
        </div>
    )
}

export default ContentDisplay