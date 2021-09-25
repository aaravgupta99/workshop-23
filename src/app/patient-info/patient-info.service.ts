const PatientBrief = [
    {
        id: 1,
        patientName:'Sara Smith',
        admissionDate:'15-Aug-2021',
        image:'D:Leeway Workshops/Angular/Workshop23/public/media/patient one-modified.png',
    },
    {
        id: 2,
        patientName:'James Johnson', 
        admissionDate:'15-Aug-2020',
        image:'public/media/patient two-modified.png',
    },
    {
        id: 3,
        patientName:'Partice Page', 
        admissionDate:'20-Aug-2020',
        image:'../../public/media/patient three-modified.png',
    },
]


const Patient = [
    {
        id: 1,
        patientName:'Sara Smith', 
        admissionDate:'15-Aug-2021', 
        status: true, 
        image:'media/patient one-modified.png',
        phone: '304-323-23s4',
        email: 'sara@email.com',
        gender: 'female',
        age: 45,
        surgeryType: 'Roaster Cuff Repair',
        surgeryDate: '15 Aug 2021',
        lastUpdated: '15 aug 2021',
        height: 163,
        weight: 110,
        BMI: 19,
        anesthesiologist: 'Dr.Christina Hardway',
        anesthesiologistPhone: '238-342-1234',
        anesthesiologistEmail: 'christina@email.com',
        sugeryClearance: true
    }
]

export class PatientService{
    getpatientBrief(){
        return PatientBrief;
    }

    getPatient(){
        return Patient;
    }
}